import { DragEvent, HTMLAttributes } from 'react';
import { Task } from '../Task';
import { Button } from '@/design-system';

type TodoPropsType = {
  task: Task;
  title: string;
  deleteTask: (task: Task) => void;
  handleDragStart: (event: DragEvent<HTMLDivElement>, task: Task) => void;
} & Partial<HTMLAttributes<HTMLDivElement>>;

export function Todo({
  title,
  deleteTask,
  task,
  handleDragStart,
  ...props
}: TodoPropsType) {
  return (
    <div
      {...props}
      draggable={true}
      className={`bg-white p-4 mb-4 shadow  flex flex-col cursor-pointer items-center`}
      onDragStart={(event) => handleDragStart(event, task)}
    >
      <span>{task.title}</span>
      <Button color='danger' onClick={() => deleteTask(task)} title='Delete' />
    </div>
  );
}
