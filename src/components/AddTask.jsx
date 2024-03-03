import { useState, useRef } from 'react'

export default function AddTask({ addTask }) {
    const [taskItem, setTaskItem] = useState('');
    const taskRef = useRef()


    const handleClick = () => {
        addTask(taskRef.current.value)
        taskRef.current.value = ''
    }

    return (
        <div>
            <input className=" bg-slate-100 rounded-md p-4 m-4"
                type="text"
                ref={taskRef}
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
