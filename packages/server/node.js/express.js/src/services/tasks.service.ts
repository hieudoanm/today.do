import { Task } from '@prisma/client';
import { prismaClient } from '../prisma/prisma.client';

export const getTasks = async ({
  listId = 0,
  limit = 100,
  offset = 0,
}: {
  listId: number;
  limit: number;
  offset: number;
}): Promise<Task[]> => {
  const tasks: Task[] = await prismaClient.task.findMany({
    take: limit || 100,
    skip: offset || 0,
    where: { listId },
  });
  return tasks;
};
