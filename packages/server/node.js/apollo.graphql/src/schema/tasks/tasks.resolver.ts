import { Task } from '@prisma/client';
import {
  TaskActionsAddArgs,
  TaskActionsDeleteArgs,
  TaskActionsUpdateArgs,
} from '../../generated/graphql';
import { prismaClient } from '../../prisma/prisma.client';

export const resolvers = {
  Query: {
    tasks: async (): Promise<Task[]> => {
      // use shared PrismaClient instance (do not connect/disconnect per request)
      return prismaClient.task.findMany();
    },
    task: async (_: unknown, { id }: { id: number }): Promise<Task | null> => {
      return prismaClient.task.findUnique({ where: { id } });
    },
  },

  Mutation: {
    // return a trivial object so nested TaskActions resolvers run
    taskActions: () => ({}),
  },

  TaskActions: {
    add: async (
      _parent: unknown,
      { taskInput }: TaskActionsAddArgs
    ): Promise<Task> => {
      const data = {
        listId: taskInput.listId,
        text: taskInput.text,
        completed: taskInput.completed ?? false,
      };
      return prismaClient.task.create({ data });
    },
    update: async (
      _parent: unknown,
      { taskId, taskInput }: TaskActionsUpdateArgs
    ): Promise<Task> => {
      const data: Pick<Task, 'text' | 'completed'> = {
        text: '',
        completed: false,
      };
      if (taskInput.text !== undefined) data.text = taskInput.text;
      if (taskInput.completed !== undefined)
        data.completed = taskInput.completed;
      if (Object.keys(data).length === 0)
        throw new Error('No fields provided to update');
      return prismaClient.task.update({ where: { id: taskId }, data });
    },

    delete: async (
      _parent: unknown,
      { taskId }: TaskActionsDeleteArgs
    ): Promise<Task> => {
      return prismaClient.task.delete({ where: { id: taskId } });
    },
  },
};
