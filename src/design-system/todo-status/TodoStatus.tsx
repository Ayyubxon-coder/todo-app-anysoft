import { Task, TaskStatuses } from '@/components/Task';
import { Todo } from '@/components/todo';
import { taskStore } from '@/store';
import { DragEvent, HTMLAttributes } from 'react';

type TodoStatusPropsType = {
  tasks: Task[];
  handleDrop: (event: DragEvent<HTMLDivElement>, status: TaskStatuses) => void;
  handleDragStart: (event: DragEvent<HTMLDivElement>, task: Task) => void;
  status: TaskStatuses;
} & Partial<HTMLAttributes<HTMLDivElement>>;

export function TodoStatus({
  handleDrop,
  handleDragStart,
  status,
  tasks,
  ...props
}: TodoStatusPropsType) {
  return (
    <div
      {...props}
      key={status}
      className='flex-1 p-4 h-[500px] bg-slate-300 ml-5'
      data-status={JSON.stringify(status)}
      onDrop={(event) => handleDrop(event, status)}
      onDragOver={(event) => event.preventDefault()}
      onDragEnter={(event) => event.preventDefault()}
    >
      <h2 className='text-lg font-bold mb-4'>{status}</h2>
      {tasks
        .filter((todo) => todo.status === status)
        .map((todo) => (
          <Todo
            key={todo.id}
            handleDragStart={handleDragStart}
            task={todo}
            deleteTask={() => taskStore.deleteTask(todo)}
            title={todo.title}
          />
        ))}
    </div>
  );
}
