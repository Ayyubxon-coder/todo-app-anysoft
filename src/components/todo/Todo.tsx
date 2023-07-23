import { DragEvent, HTMLAttributes } from 'react';
import { Task } from '../Task';

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
      data-data={JSON.stringify(task)}
    >
      <span>{task.title}</span>
      <button
        className={`bg-red-700 w-full text-[white]`}
        onClick={() => deleteTask(task)}
      >
        Delete
      </button>
    </div>
  );
}
