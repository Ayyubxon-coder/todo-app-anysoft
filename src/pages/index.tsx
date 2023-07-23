import TodoList from '../components/todo-list/TodoList';
import { taskStore } from '../store';
import { useState } from 'react';

const Home: React.FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
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
        <input
          type='text'
          className='flex-1 p-2 mr-2'
          placeholder='Enter task title'
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button className='p-2 bg-blue-500 text-white' type='submit'>
          Add Task
        </button>
      </form>
      <TodoList />
    </div>
  );
};

export default Home;
