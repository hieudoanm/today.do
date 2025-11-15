import { Task } from '@prisma/client';
import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { prismaClient } from './prisma/prisma.client';

const fastify = Fastify({ logger: true });

// ---------------------
// GET /tasks
// ---------------------
fastify.get<{
  Querystring: { limit?: string; offset?: string };
}>(
  '/tasks',
  async (
    request: FastifyRequest<{
      Querystring: { limit?: string; offset?: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const limit = Number(request.query.limit) || 100;
      const offset = Number(request.query.offset) || 0;

      const tasks: Task[] = await prismaClient.task.findMany({
        take: limit,
        skip: offset,
      });

      return { total: tasks.length, tasks };
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: 'Failed to fetch tasks' });
    }
  }
);

// ---------------------
// GET /tasks/:id
// ---------------------
fastify.get<{ Params: { id: string } }>(
  '/tasks/:id',
  async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id = Number(request.params.id);
      const task = await prismaClient.task.findUnique({ where: { id } });

      if (!task) return reply.status(404).send({ error: 'Task not found' });

      return task;
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: 'Failed to fetch task' });
    }
  }
);

// ---------------------
// POST /tasks (add)
// ---------------------
fastify.post(
  '/tasks',
  async (
    request: FastifyRequest<{
      Body: { listId: number; text: string; completed: boolean };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { listId = 0, text = '', completed = false } = request.body;
      const data = { listId, text, completed };
      const task = await prismaClient.task.create({ data });
      return reply.status(201).send(task);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: 'Failed to create task' });
    }
  }
);

// ---------------------
// PATCH /tasks/:id (update)
// ---------------------
fastify.patch(
  '/tasks/:id',
  async (
    request: FastifyRequest<{
      Params: { id: string };
      Body: { text: string; completed: boolean };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id = Number(request.params.id);
      const { text, completed } = request.body;

      const data: Partial<Pick<Task, 'text' | 'completed'>> = {};
      if (text !== undefined) data.text = text;
      if (completed !== undefined) data.completed = completed;

      if (Object.keys(data).length === 0)
        return reply
          .status(400)
          .send({ error: 'No fields provided to update' });

      const task = await prismaClient.task.update({ where: { id }, data });
      return task;
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: 'Failed to update task' });
    }
  }
);

// ---------------------
// DELETE /tasks/:id
// ---------------------
fastify.delete(
  '/tasks/:id',
  async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id = Number(request.params.id);
      const task = await prismaClient.task.delete({ where: { id } });
      return task;
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: 'Failed to delete task' });
    }
  }
);

// ---------------------
// START SERVER
// ---------------------
const PORT = Number(process.env.PORT ?? '8080');

fastify.listen({ port: PORT }, (error, address) => {
  if (error) {
    fastify.log.error(error);
    process.exit(1);
  }
  fastify.log.info(`🚀 Fastify server running at ${address}`);
});
