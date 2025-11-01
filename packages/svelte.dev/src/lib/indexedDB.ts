// A lightweight IndexedDB wrapper compatible with Svelte.
// Works for simple CRUD operations with object stores.

export interface Task {
	id: number;
	text: string;
	completed: boolean;
}

interface Options {
	databaseName: string;
	storeName: string;
}

export function getIndexedDB<T extends { id?: number }>(options: Options) {
	let db: IDBDatabase | null = null;

	const openDB = (): Promise<IDBDatabase> => {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(options.databaseName, 1);

			request.onupgradeneeded = () => {
				const db = request.result;
				if (!db.objectStoreNames.contains(options.storeName)) {
					db.createObjectStore(options.storeName, { keyPath: 'id', autoIncrement: true });
				}
			};

			request.onsuccess = () => {
				db = request.result;
				resolve(db);
			};

			request.onerror = () => reject(request.error);
		});
	};

	const getDB = async (): Promise<IDBDatabase> => {
		if (db) return db;
		return openDB();
	};

	const list = async (): Promise<T[]> => {
		const database = await getDB();
		return new Promise((resolve, reject) => {
			const tx = database.transaction(options.storeName, 'readonly');
			const store = tx.objectStore(options.storeName);
			const request = store.getAll();

			request.onsuccess = () => resolve(request.result as T[]);
			request.onerror = () => reject(request.error);
		});
	};

	const add = async (text: string): Promise<void> => {
		const database = await getDB();
		return new Promise((resolve, reject) => {
			const tx = database.transaction(options.storeName, 'readwrite');
			const store = tx.objectStore(options.storeName);
			store.add({ text, completed: false } as T);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	};

	const update = async (item: T): Promise<void> => {
		const database = await getDB();
		return new Promise((resolve, reject) => {
			const tx = database.transaction(options.storeName, 'readwrite');
			const store = tx.objectStore(options.storeName);
			store.put(item);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	};

	const remove = async (id: number): Promise<void> => {
		const database = await getDB();
		return new Promise((resolve, reject) => {
			const tx = database.transaction(options.storeName, 'readwrite');
			const store = tx.objectStore(options.storeName);
			store.delete(id);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	};

	return {
		database: () => db,
		list,
		add,
		update,
		remove
	};
}
