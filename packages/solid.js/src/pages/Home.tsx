import { createSignal, onMount, For, Show } from 'solid-js';
import { Task, createIndexedDB } from '~/signals/createIndexedDB';

export const Home = () => {
	const { database, list, add, update, remove } = createIndexedDB<Task>({
		databaseName: 'TasksDB',
		storeName: 'tasks',
	});

	const [tasks, setTasks] = createSignal<Task[]>([]);
	const [newTask, setNewTask] = createSignal('');

	// Load tasks once DB is ready
	onMount(async () => {
		const db = database();
		if (!db) {
			// Watch for when DB initializes
			const checkDB = setInterval(async () => {
				if (database()) {
					clearInterval(checkDB);
					const items = await list();
					setTasks(items);
				}
			}, 100);
			return;
		}

		const items = await list();
		setTasks(items);
	});

	const handleAdd = async () => {
		const text = newTask().trim();
		if (!text) return;
		await add(text);
		setNewTask('');
		const updatedTasks = await list();
		setTasks(updatedTasks);
	};

	const handleToggle = async (todo: Task) => {
		await update({ ...todo, completed: !todo.completed });
		const updatedTasks = await list();
		setTasks(updatedTasks);
	};

	const handleDelete = async (id: number) => {
		await remove(id);
		const updatedTasks = await list();
		setTasks(updatedTasks);
	};

	return (
		<div class="bg-base-200 flex h-screen flex-col items-center py-0 md:min-h-screen md:py-10">
			<div class="bg-base-100 h-screen w-full max-w-md rounded-none p-6 shadow-lg md:h-auto md:rounded-2xl">
				<h1 class="mb-4 text-center text-2xl font-bold">Tasks</h1>

				{/* Input Section */}
				<div class="mb-4 flex gap-2">
					<input
						type="text"
						placeholder="Add a new task"
						class="input input-bordered flex-1"
						value={newTask()}
						onInput={(e) => setNewTask(e.currentTarget.value)}
						onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
					/>
					<button class="btn btn-primary rounded-full" onClick={handleAdd}>
						Add
					</button>
				</div>

				{/* Task List */}
				<ul class="space-y-2">
					<For each={tasks()}>
						{(todo) => (
							<li class="bg-base-300 flex items-center justify-between rounded-lg p-3">
								<div class="flex items-center gap-2">
									<input
										type="checkbox"
										class="checkbox checkbox-primary"
										checked={todo.completed}
										onChange={[handleToggle, todo]}
									/>
									<span
										class={`text-lg ${todo.completed ? 'text-gray-500 line-through' : ''}`}>
										{todo.text}
									</span>
								</div>
								<button
									class="btn btn-sm btn-error rounded-full"
									onClick={[handleDelete, todo.id]}>
									Delete
								</button>
							</li>
						)}
					</For>
				</ul>

				<Show when={tasks().length === 0}>
					<p class="mt-4 text-center text-gray-500">No tasks yet!</p>
				</Show>
			</div>
		</div>
	);
};
