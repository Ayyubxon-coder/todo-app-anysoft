// src/TodoList.tsx
import { DragEvent, FC, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { taskStore } from '@/store';
import { toJS } from 'mobx';
import { Task, TaskStatuses } from '../Task';
import { TodoStatus } from '@/design-system';

export const TodoList: FC = observer(() => {
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
        <TodoStatus
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          tasks={taskStore.filteredTasks}
          status={status}
        />
      ))}
    </div>
  );
});
