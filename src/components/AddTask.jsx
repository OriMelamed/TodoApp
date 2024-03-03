import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

export default function AddTask({ addTask }) {
    const [taskItem, setTaskItem] = useState('');
    const taskRef = useRef()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const handleClick = (data) => {
        addTask(data.task)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleClick)}>
                <div className='flex flex-col items-center'>
                    <div className=' inline-grid'>
                        {errors.task && <span className=' text-red-600 px-4 mx-4'>This field is required</span>}
                        <input className=" bg-slate-100 rounded-md p-4 m-4"
                            type="text"
                            placeholder="Create a new todo"
                            {...register("task", { required: true })}
                        />
                    </div>
                    <button
                        className='  bg-blue-600 font-bold px-6 py-2 rounded-full'
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div >
    )
}
