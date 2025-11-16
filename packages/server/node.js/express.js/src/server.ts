import { Task } from '@prisma/client';
import express, { Request, Response } from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from './services/tasks.service';

const app = express();
app.use(express.json());

// ---------------------
// GET /tasks
// ---------------------
app.get('/tasks', async (request: Request, response: Response) => {
  try {
    const listId: number = Number(request.params.listId);
    const limit: number = Number(request.params.limit);
    const offset: number = Number(request.params.offset);
    const tasks: Task[] = await getTasks({ listId, limit, offset });
    response.json({ total: tasks.length, tasks });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// ---------------------
// GET /tasks/:id
// ---------------------
app.get('/tasks/:id', async (request: Request, response: Response) => {
  try {
    const id = Number(request.params.id);
    const task = await getTask(id);
    if (!task) return response.status(404).json({ error: 'Task not found' });
    response.json(task);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to fetch task' });
  }
});

// ---------------------
// POST /tasks (add)
// ---------------------
app.post('/tasks', async (request: Request, response: Response) => {
  try {
    const { listId = 0, text = '', completed = false } = request.body;
    const data = { listId, text, completed };
    const task = await createTask(data);
    response.status(201).json(task);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to create task' });
  }
});

// ---------------------
// PATCH /tasks/:id (update)
// ---------------------
app.patch('/tasks/:id', async (request: Request, response: Response) => {
  try {
    const id = Number(request.params.id);
    const { text, completed } = request.body;

    const data: Partial<Pick<Task, 'text' | 'completed'>> = {};
    if (text !== undefined) data.text = text;
    if (completed !== undefined) data.completed = completed;

    if (Object.keys(data).length === 0)
      return response
        .status(400)
        .json({ error: 'No fields provided to update' });

    const task = await updateTask(id, data);
    response.json(task);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to update task' });
  }
});

// ---------------------
// DELETE /tasks/:id
// ---------------------
app.delete('/tasks/:id', async (request: Request, response: Response) => {
  try {
    const id = Number(request.params.id);
    const task = await deleteTask(id);
    response.json(task);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to delete task' });
  }
});

// ---------------------
// START SERVER
// ---------------------
const PORT = process.env.PORT ?? '8080';

app.listen(PORT, () => {
  console.log(`🚀 Express server running at http://localhost:${PORT}`);
});
