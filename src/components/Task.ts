// src/Task.ts
export type TaskStatuses = 'backlog' | 'todo' | 'inProgress' | 'test' | 'done';
export type Task = {
  id: string;
  title: string;
  status: TaskStatuses;
  createdAt: Date;
  deletedAt?: Date;
  isDeleted: boolean;
};

export const initialStatusOptions = [
  'backlog',
  'todo',
  'inProgress',
  'test',
  'done',
] as const;
