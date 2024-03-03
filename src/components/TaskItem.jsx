import React, { useRef, useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDownloadDone } from "react-icons/md";

export default function TaskItem({ description, onDelete, onEdit, index }) {
    const [editTask, setEditTask] = useState(false)
    const taskRef = useRef()


    const handlerEdit = (index) => {
        if (taskRef.current.value !== "") {
            setEditTask(!editTask)
            onEdit({ task: taskRef.current.value, index: index })
        }
    }

    return (
        <div>
            {editTask ?
                <ul>
                    <div className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md">
                        <input ref={taskRef} placeholder={description} />
                        <MdOutlineDownloadDone size={25} className='ml-1' onClick={() => handlerEdit(index)} />
                    </div>
                </ul>
                :
                <ul>
                    <div className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md">
                        <li className="self-center font-semibold pr-10 mr-6 grow">{description}</li>
                        <FaDeleteLeft
                            size={25}
                            onClick={() => onDelete(index)}
                        />
                        <CiEdit size={25} className=' ml-1' onClick={() => setEditTask(!editTask)} />
                    </div>
                </ul>
            }
        </div>
    )
}
