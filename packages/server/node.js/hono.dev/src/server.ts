import { serve } from '@hono/node-server';
import type { Task } from '@prisma/client';
import { Hono } from 'hono';
import { prismaClient } from './prisma/prisma.client';

const app = new Hono();

// ---------------------
// GET /tasks
// ---------------------
app.get('/tasks', async (c) => {
  try {
    const limit = Number(c.req.query('limit') ?? '100');
    const offset = Number(c.req.query('offset') ?? '0');

    const tasks: Task[] = await prismaClient.task.findMany({
      take: limit,
      skip: offset,
    });

    return c.json({ total: tasks.length, tasks });
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to fetch tasks' }, 500);
  }
});

// ---------------------
// GET /tasks/:id
// ---------------------
app.get('/tasks/:id', async (c) => {
  try {
    const id = Number(c.req.param('id'));

    const task = await prismaClient.task.findUnique({
      where: { id },
    });

    if (!task) return c.json({ error: 'Task not found' }, 404);

    return c.json(task);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to fetch task' }, 500);
  }
});

// ---------------------
// POST /tasks (add)
// ---------------------
app.post('/tasks', async (c) => {
  try {
    const body = await c.req.json<{
      listId: number;
      text: string;
      completed?: boolean;
    }>();

    const task = await prismaClient.task.create({
      data: {
        listId: body.listId,
        text: body.text,
        completed: body.completed ?? false,
      },
    });

    return c.json(task, 201);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to create task' }, 500);
  }
});

// ---------------------
// PATCH /tasks/:id (update)
// ---------------------
app.patch('/tasks/:id', async (c) => {
  try {
    const id = Number(c.req.param('id'));
    const body = await c.req.json<{
      text?: string;
      completed?: boolean;
    }>();

    const data: Partial<Pick<Task, 'text' | 'completed'>> = {};
    if (body.text !== undefined) data.text = body.text;
    if (body.completed !== undefined) data.completed = body.completed;

    if (Object.keys(data).length === 0) {
      return c.json({ error: 'No fields provided to update' }, 400);
    }

    const task = await prismaClient.task.update({
      where: { id },
      data,
    });

    return c.json(task);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to update task' }, 500);
  }
});

// ---------------------
// DELETE /tasks/:id
// ---------------------
app.delete('/tasks/:id', async (c) => {
  try {
    const id = Number(c.req.param('id'));

    const task = await prismaClient.task.delete({
      where: { id },
    });

    return c.json(task);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to delete task' }, 500);
  }
});

// ---------------------
// START SERVER
// ---------------------
const PORT = Number(process.env.PORT ?? '8080');

serve({
  fetch: app.fetch,
  port: PORT,
});

console.log(`🚀 Hono server running at http://localhost:${PORT}`);
