import type { Task } from '@prisma/client';
import { createServer, IncomingMessage } from 'node:http';
import { json } from 'node:stream/consumers';
import { parse } from 'node:url';
import { prismaClient } from './prisma/prisma.client';

const PORT = Number(process.env.PORT ?? 8080);

const parseBody = async (req: IncomingMessage) => {
  try {
    const body = await json(req);
    return body;
  } catch {
    return {};
  }
};

const server = createServer(async (req, res) => {
  try {
    const parsedUrl = parse(req.url ?? '', true);
    const method = req.method;
    const pathname = parsedUrl.pathname ?? '';

    // GET /tasks?limit=...&offset=...
    if (method === 'GET' && pathname === '/tasks') {
      const limit = Number(parsedUrl.query.limit) || 100;
      const offset = Number(parsedUrl.query.offset) || 0;

      const tasks: Task[] = await prismaClient.task.findMany({
        take: limit,
        skip: offset,
      });

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ total: tasks.length, tasks }));
    }

    // GET /tasks/:id
    const taskIdMatch = pathname.match(/^\/tasks\/(\d+)$/);
    if (method === 'GET' && taskIdMatch) {
      const id = Number(taskIdMatch[1]);
      const task = await prismaClient.task.findUnique({ where: { id } });

      if (!task) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Task not found' }));
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(task));
    }

    // POST /tasks
    if (method === 'POST' && pathname === '/tasks') {
      const body = await parseBody(req);
      const { listId = 0, text = '', completed = false } = body as Task;
      const data = { listId, text, completed };
      const task = await prismaClient.task.create({ data });
      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(task));
    }

    // PATCH /tasks/:id
    if (method === 'PATCH' && taskIdMatch) {
      const id = Number(taskIdMatch[1]);
      const body = await parseBody(req);
      const { text, completed } = body as Task;

      const data: Partial<Pick<Task, 'text' | 'completed'>> = {};
      if (text !== undefined) data.text = text;
      if (completed !== undefined) data.completed = completed;

      if (Object.keys(data).length === 0) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(
          JSON.stringify({ error: 'No fields provided to update' })
        );
      }

      const task = await prismaClient.task.update({ where: { id }, data });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(task));
    }

    // DELETE /tasks/:id
    if (method === 'DELETE' && taskIdMatch) {
      const id = Number(taskIdMatch[1]);
      const task = await prismaClient.task.delete({ where: { id } });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(task));
    }

    // 404
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Not found' }));
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Node HTTP server running at http://localhost:${PORT}`);
});
