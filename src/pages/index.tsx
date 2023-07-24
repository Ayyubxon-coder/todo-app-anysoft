import { Button, Input } from '@/design-system';
import { TodoList } from '@/components';
import { taskStore } from '../store';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

const Home: FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTaskTitle.trim() !== '') {
      taskStore.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  return (
    <div className='container mx-auto p-4 w-full h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <form onSubmit={handleAddTask} className='mb-4 flex'>
        <Input
          type='text'
          className='flex-1 p-2 mr-2'
          placeholder='Enter task title'
          value={newTaskTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTaskTitle(e.target.value)
          }
        />
        <Button title='Add Task' type='submit' />
      </form>
      <TodoList />
    </div>
  );
};

export default Home;
