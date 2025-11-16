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

export const getTask = async (id: number): Promise<Task | null> => {
  const task: Task | null = await prismaClient.task.findUnique({
    where: { id },
  });
  return task;
};

export const createTask = async (
  data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Task> => {
  const task: Task = await prismaClient.task.create({ data });
  return task;
};

export const updateTask = async (
  id: number,
  data: Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Task> => {
  const task: Task = await prismaClient.task.update({
    where: { id },
    data,
  });
  return task;
};

export const deleteTask = async (id: number): Promise<Task> => {
  const task: Task = await prismaClient.task.delete({
    where: { id },
  });
  return task;
};
