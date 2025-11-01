import { Component, signal, effect, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  updatedAt: string; // ISO timestamp
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Tasks');
  private readonly dbName = 'TasksDB';
  private readonly storeName = 'tasks';
  private db: IDBDatabase | null = null;

  // Signals for reactive UI
  tasks = signal<Task[]>([]);
  newTask = signal('');

  constructor() {
    this.openDB();

    // auto refresh when db ready
    effect(() => {
      if (this.db) this.loadTasks();
    });
  }

  /** Open or create IndexedDB */
  private openDB() {
    if (typeof indexedDB === 'undefined') {
      console.warn('IndexedDB not available (SSR or non-browser environment)');
      return;
    }

    const request = indexedDB.open(this.dbName, 1);

    request.onupgradeneeded = (event: any) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(this.storeName)) {
        const store = db.createObjectStore(this.storeName, {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
      }
    };

    request.onsuccess = () => {
      this.db = request.result;
      this.loadTasks();
    };

    request.onerror = (event) => {
      console.error('IndexedDB error:', event);
    };
  }

  /** Sort and load all tasks */
  private loadTasks() {
    if (!this.db) return;
    const transaction = this.db.transaction(this.storeName, 'readonly');
    const store = transaction.objectStore(this.storeName);
    const request = store.getAll();

    request.onsuccess = () => {
      const result = request.result as Task[];
      result.sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });
      this.tasks.set(result);
    };
  }

  /** Add new task */
  addTask() {
    if (!this.db) return;
    const text = this.newTask().trim();
    if (!text) return;

    const now = new Date().toISOString();
    const transaction = this.db.transaction(this.storeName, 'readwrite');
    const store = transaction.objectStore(this.storeName);
    store.add({ text, completed: false, updatedAt: now });

    transaction.oncomplete = () => {
      this.newTask.set('');
      this.loadTasks();
    };
  }

  /** Toggle completion */
  toggleTask(task: Task) {
    if (!this.db) return;
    const now = new Date().toISOString();
    const transaction = this.db.transaction(this.storeName, 'readwrite');
    const store = transaction.objectStore(this.storeName);
    store.put({ ...task, completed: !task.completed, updatedAt: now });

    transaction.oncomplete = () => this.loadTasks();
  }

  /** Delete task */
  deleteTask(id: number) {
    if (!this.db) return;
    const transaction = this.db.transaction(this.storeName, 'readwrite');
    const store = transaction.objectStore(this.storeName);
    store.delete(id);
    transaction.oncomplete = () => this.loadTasks();
  }

  // Derived/computed value
  remaining = computed(() => this.tasks().filter((t) => !t.completed).length);
}
