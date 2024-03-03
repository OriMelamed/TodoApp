import React, { useState } from 'react'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    if (task) {
      setTaskList([...taskList, task]);
    }
  }

  const handleDeleteTask = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1)
    setTaskList(updatedList)
  }

  const handlerEditTask = ({ task, index }) => {
    const updatedList = [...taskList];
    updatedList[index] = task
    setTaskList(updatedList)

  }

  return (
    <div className='flex flex-col items-center m-10'>
      <h1 className='text-4xl mt-5'>TODO APP</h1>
      <div className=' flex'>
        <AddTask addTask={handleAddTask} />
      </div>
      <div>
        <TaskList tasks={taskList} onDelete={handleDeleteTask} onEdit={handlerEditTask} />
      </div>
    </div>
  )
}
