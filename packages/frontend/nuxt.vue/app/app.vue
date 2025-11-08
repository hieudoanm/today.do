<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface Task {
  id?: number;
  text: string;
  completed: boolean;
  updatedAt: string;
}

const databaseName = "TasksDB";
const storeName = "tasks";
const database = ref<IDBDatabase | null>(null);
const tasks = ref<Task[]>([]);
const newTask = ref("");

// --- Open or create IndexedDB ---
const openDB = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(storeName)) {
        const store = db.createObjectStore(storeName, {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("updatedAt", "updatedAt", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// --- Utility sorter ---
const sortItems = (a: Task, b: Task) => {
  if (a.completed !== b.completed) return a.completed ? 1 : -1;
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
};

// --- CRUD methods ---
const list = async (): Promise<Task[]> => {
  if (!database.value) return [];
  return new Promise((resolve, reject) => {
    const tx = database.value!.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result.sort(sortItems));
    request.onerror = () => reject(request.error);
  });
};

const add = async (text: string) => {
  if (!database.value) return;
  const now = new Date().toISOString();
  const tx = database.value.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.add({ text, completed: false, updatedAt: now });
  await tx.done;
};

const update = async (item: Task) => {
  if (!database.value) return;
  const now = new Date().toISOString();
  const tx = database.value.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.put({ ...item, updatedAt: now });
  await tx.done;
};

const remove = async (id: number) => {
  if (!database.value) return;
  const tx = database.value.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.delete(id);
  await tx.done;
};

// --- UI event handlers ---
const handleAdd = async () => {
  if (!newTask.value.trim()) return;
  await add(newTask.value.trim());
  newTask.value = "";
  tasks.value = await list();
};

const handleToggle = async (todo: Task) => {
  await update({ ...todo, completed: !todo.completed });
  tasks.value = await list();
};

const handleDelete = async (id: number) => {
  await remove(id);
  tasks.value = await list();
};

// --- Lifecycle ---
onMounted(async () => {
  database.value = await openDB();
  tasks.value = await list();
});
</script>

<template>
  <div
    class="bg-base-200 flex h-screen flex-col items-center py-0 md:min-h-screen md:py-10"
  >
    <div
      class="bg-base-100 h-screen w-full max-w-md rounded-none p-6 shadow-lg md:h-auto md:rounded-2xl"
    >
      <h1 class="mb-4 text-center text-2xl font-bold">Tasks</h1>

      <!-- Input Section -->
      <div class="mb-4 flex gap-2">
        <input
          v-model="newTask"
          @keydown.enter="handleAdd"
          type="text"
          placeholder="Add a new task"
          class="input input-bordered flex-1"
        />
        <button class="btn btn-primary rounded-full" @click="handleAdd">
          <i class="pi pi-plus"></i>
          +
        </button>
      </div>

      <!-- Task List -->
      <ul class="space-y-2">
        <li
          v-for="todo in tasks"
          :key="todo.id"
          class="bg-base-300 flex items-center justify-between rounded-lg p-3"
        >
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              v-model="todo.completed"
              @change="handleToggle(todo)"
            />
            <span
              class="text-lg"
              :class="{
                'text-gray-500 line-through': todo.completed,
              }"
            >
              {{ todo.text }}
            </span>
          </div>
          <button
            class="btn btn-sm btn-error rounded-full"
            @click="handleDelete(todo.id!)"
          >
            ×
          </button>
        </li>
      </ul>

      <p v-if="tasks.length === 0" class="mt-4 text-center text-gray-500">
        No tasks yet!
      </p>
    </div>
  </div>
</template>

<style scoped>
/* optional fine-tuning */
</style>
