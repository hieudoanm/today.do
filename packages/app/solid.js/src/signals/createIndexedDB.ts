import { createSignal, onMount } from 'solid-js';

export interface Task {
	id: number;
	text: string;
	completed: boolean;
	updatedAt: string; // ISO timestamp
}

export const createIndexedDB = <T>({
	databaseName,
	storeName,
}: {
	databaseName: string;
	storeName: string;
}) => {
	const [database, setDatabase] = createSignal<IDBDatabase | null>(null);

	onMount(() => {
		const request = indexedDB.open(databaseName, 1);

		request.onupgradeneeded = (event) => {
			const database = (event.target as IDBOpenDBRequest).result;

			if (!database.objectStoreNames.contains(storeName)) {
				const store = database.createObjectStore(storeName, {
					keyPath: 'id',
					autoIncrement: true,
				});

				// Optional index for sorting/filtering
				store.createIndex('updatedAt', 'updatedAt', { unique: false });
			}
		};

		request.onsuccess = () => {
			setDatabase(request.result);
		};

		request.onerror = (event) => {
			console.error('IndexedDB error:', event);
		};
	});

	// eslint-disable-next-line
	const sortItems = (a: any, b: any) => {
		// 1. Incomplete first
		if (a.completed !== b.completed) {
			return a.completed ? 1 : -1;
		}

		// 2. Sort by updatedAt DESC
		return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
	};

	/** Get all tasks sorted by: incomplete first, then updatedAt DESC */
	const list = (): Promise<T[]> => {
		return new Promise((resolve, reject) => {
			const db = database();
			if (!db) return resolve([]);

			const transaction = db.transaction(storeName, 'readonly');
			const store = transaction.objectStore(storeName);
			const request = store.getAll();

			request.onsuccess = () => {
				const tasks = request.result;
				tasks.sort(sortItems);
				resolve(tasks);
			};

			request.onerror = () =>
				reject(new Error(request.error?.message || 'Failed to fetch tasks'));
		});
	};

	/** Add new task with updatedAt */
	const add = (text: string) => {
		return new Promise<void>((resolve, reject) => {
			const db = database();
			if (!db) return;

			const now = new Date().toISOString();
			const transaction = db.transaction(storeName, 'readwrite');
			const store = transaction.objectStore(storeName);

			store.add({ text, completed: false, updatedAt: now });

			transaction.oncomplete = () => resolve();
			transaction.onerror = () =>
				reject(new Error(transaction.error?.message || 'Failed to add task'));
		});
	};

	/** Update task and refresh updatedAt */
	const update = (item: T) => {
		return new Promise<void>((resolve, reject) => {
			const db = database();
			if (!db) return;

			const now = new Date().toISOString();
			const transaction = db.transaction(storeName, 'readwrite');
			const store = transaction.objectStore(storeName);

			store.put({ ...item, updatedAt: now });

			transaction.oncomplete = () => resolve();
			transaction.onerror = () =>
				reject(
					new Error(transaction.error?.message || 'Failed to update task'),
				);
		});
	};

	/** Delete a task */
	const remove = (id: number) => {
		return new Promise<void>((resolve, reject) => {
			const db = database();
			if (!db) return;

			const transaction = db.transaction(storeName, 'readwrite');
			const store = transaction.objectStore(storeName);

			store.delete(id);

			transaction.oncomplete = () => resolve();
			transaction.onerror = () =>
				reject(
					new Error(transaction.error?.message || 'Failed to delete task'),
				);
		});
	};

	return { database, list, add, update, remove };
};

export default createIndexedDB;
