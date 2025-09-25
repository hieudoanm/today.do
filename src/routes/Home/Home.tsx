import { Task, useIndexedDB } from '@today.do/hooks/useIndexedDB';
import { FC, useEffect, useState } from 'react';
import { PiPlus, PiX } from 'react-icons/pi';

export const Home: FC = () => {
	const { database, list, add, update, remove } = useIndexedDB<Task>({
		databaseName: 'TasksDB',
		storeName: 'tasks',
	});

	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState<string>('');

	useEffect(() => {
		if (!database) return;
		list().then(setTasks);
	}, [database]);

	const handleAdd = async () => {
		if (!newTask.trim()) return;
		await add(newTask.trim());
		setNewTask('');
		const updatedTask = await list();
		setTasks(updatedTask);
	};

	const handleToggle = async (todo: Task) => {
		await update({ ...todo, completed: !todo.completed });
		const updatedTask = await list();
		setTasks(updatedTask);
	};

	const handleDelete = async (id: number) => {
		await remove(id);
		const updatedTask = await list();
		setTasks(updatedTask);
	};

	return (
		<div className="bg-base-200 flex h-screen flex-col items-center py-0 md:min-h-screen md:py-10">
			<div className="bg-base-100 h-screen w-full max-w-md rounded-none p-6 shadow-lg md:h-auto md:rounded-2xl">
				<h1 className="mb-4 text-center text-2xl font-bold">Tasks</h1>

				{/* Input Section */}
				<div className="mb-4 flex gap-2">
					<input
						type="text"
						placeholder="Add a new task"
						className="input input-bordered flex-1"
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
					/>
					<button className="btn btn-glass" onClick={handleAdd}>
						<PiPlus />
					</button>
				</div>

				{/* Task List */}
				<ul className="space-y-2">
					{tasks.map((todo) => (
						<li key={todo.id} className="bg-base-300 flex items-center justify-between rounded-lg p-3">
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									className="checkbox checkbox-primary"
									checked={todo.completed}
									onChange={() => handleToggle(todo)}
								/>
								<span className={`text-lg ${todo.completed ? 'text-gray-500 line-through' : ''}`}>{todo.text}</span>
							</div>
							<button className="btn btn-sm btn-error" onClick={() => handleDelete(todo.id)}>
								<PiX />
							</button>
						</li>
					))}
				</ul>

				{tasks.length === 0 && <p className="mt-4 text-center text-gray-500">No tasks yet!</p>}
			</div>
		</div>
	);
};
