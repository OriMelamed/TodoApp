import { useState } from 'react'

export default function AddTask({ addTask }) {
    const [taskItem, setTaskItem] = useState('');

    const handleClick = () => {
        addTask(taskItem)
        setTaskItem('')
    }

    return (
        <div>
            <input className=" bg-slate-100 rounded-md p-4 m-4"
                type="text"
                onChange={(e) => setTaskItem(e.target.value)}
                value={taskItem}
                placeholder="Create a new todo"
            />
            <button
                className='  bg-blue-600 font-bold px-6 py-2 rounded-full'
                onClick={handleClick}
            >
                Add Task
            </button>
        </div >
    )
}
