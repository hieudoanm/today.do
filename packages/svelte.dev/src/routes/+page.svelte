<script lang="ts">
	import { onMount } from 'svelte';
	import { getIndexedDB } from '$lib/indexedDB'; // same logic reused

	type Task = {
		id: number;
		text: string;
		completed: boolean;
	};

	const { database, list, add, update, remove } = getIndexedDB<Task>({
		databaseName: 'TasksDB',
		storeName: 'tasks'
	});

	let tasks: Task[] = [];
	let newTask = '';

	// Load tasks once DB is ready
	onMount(async () => {
		const db = database();
		if (!db) {
			// Wait until database initializes
			const checkDB = setInterval(async () => {
				if (database()) {
					clearInterval(checkDB);
					tasks = await list();
				}
			}, 100);
			return;
		}

		tasks = await list();
	});

	async function handleAdd() {
		const text = newTask.trim();
		if (!text) return;
		await add(text);
		newTask = '';
		tasks = await list();
	}

	async function handleToggle(todo: Task) {
		await update({ ...todo, completed: !todo.completed });
		tasks = await list();
	}

	async function handleDelete(id: number) {
		await remove(id);
		tasks = await list();
	}
</script>

<div class="flex h-screen flex-col items-center bg-base-200 py-0 md:min-h-screen md:py-10">
	<div
		class="h-screen w-full max-w-md rounded-none bg-base-100 p-6 shadow-lg md:h-auto md:rounded-2xl"
	>
		<h1 class="mb-4 text-center text-2xl font-bold">Tasks</h1>

		<!-- Input Section -->
		<div class="mb-4 flex gap-2">
			<input
				type="text"
				placeholder="Add a new task"
				class="input-bordered input flex-1"
				bind:value={newTask}
				on:keydown={(e) => e.key === 'Enter' && handleAdd()}
			/>
			<button class="btn rounded-full btn-primary" on:click={handleAdd}> Add </button>
		</div>

		<!-- Task List -->
		<ul class="space-y-2">
			{#each tasks as todo (todo.id)}
				<li class="flex items-center justify-between rounded-lg bg-base-300 p-3">
					<div class="flex items-center gap-2">
						<input
							type="checkbox"
							class="checkbox checkbox-primary"
							checked={todo.completed}
							on:change={() => handleToggle(todo)}
						/>
						<span
							class="text-lg"
							class:text-gray-500={todo.completed}
							class:line-through={todo.completed}
						>
							{todo.text}
						</span>
					</div>
					<button class="btn rounded-full btn-sm btn-error" on:click={() => handleDelete(todo.id)}>
						Delete
					</button>
				</li>
			{/each}
		</ul>

		{#if tasks.length === 0}
			<p class="mt-4 text-center text-gray-500">No tasks yet!</p>
		{/if}
	</div>
</div>
