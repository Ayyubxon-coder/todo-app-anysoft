// src/TaskStore.ts
import { makeAutoObservable } from 'mobx';
import { Task, initialStatusOptions } from '@/components';
import { nanoid } from 'nanoid';

class TaskStore {
  tasks: Task[] = [];
  initialStatusOptions = initialStatusOptions;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(title: string) {
    const newTask: Task = {
      id: nanoid(),
      title,
      status: 'backlog',
      createdAt: new Date(),
      isDeleted: false,
    };
    this.tasks.push(newTask);
  }

  deleteTask(task: Task) {
    task.deletedAt = new Date();
    task.isDeleted = true;
  }

  updateTask(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === updatedTask.id
    );

    this.tasks[taskIndex] = updatedTask;
  }

  get filteredTasks() {
    return this.tasks.filter((task) => !task.isDeleted);
  }
}

export const taskStore = new TaskStore();
