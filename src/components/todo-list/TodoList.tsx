// src/TodoList.tsx
import { DragEvent, FC, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store';
import { toJS } from 'mobx';
import { Task, TaskStatuses } from '../Task';
import { Todo } from '../todo';

const TodoList: FC = observer(() => {
  const [draggedTask, setDraggedTask] = useState<Task>();

  const handleDrop = (
    event: DragEvent<HTMLDivElement>,
    status: TaskStatuses
  ) => {
    event.preventDefault();

    if (draggedTask) {
      const updatedTask = { ...draggedTask, status };

      taskStore.updateTask(updatedTask);
    }
  };

  const handleDragStart = (event: DragEvent<HTMLDivElement>, task: Task) => {
    setDraggedTask(toJS(task));
  };
  return (
    <div className='flex'>
      {taskStore.initialStatusOptions.map((status) => (
        <div
          key={status}
          className='flex-1 p-4 h-[500px] bg-slate-300 ml-5'
          data-status={JSON.stringify(status)}
          onDrop={(event) => handleDrop(event, status)}
          onDragOver={(event) => event.preventDefault()}
          onDragEnter={(event) => event.preventDefault()}
        >
          <h2 className='text-lg font-bold mb-4'>{status}</h2>
          {taskStore.filteredTasks
            .filter((todo) => todo.status === status)
            .map((todo) => (
              <Todo
                handleDragStart={handleDragStart}
                task={todo}
                deleteTask={() => taskStore.deleteTask(todo)}
                title={todo.title}
              />
            ))}
        </div>
      ))}
    </div>
  );
});

export default TodoList;
