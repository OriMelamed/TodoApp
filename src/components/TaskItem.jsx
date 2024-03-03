import React from 'react'

export default function TaskItem({ description, onDelete, index }) {
    return (
        <div>
            <ul>
                <div className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md">
                    <li className="self-center font-semibold pr-10 mr-6 grow">{description}</li>
                    <button
                        className=" bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600"
                        onClick={() => onDelete(index)}
                    >Delete</button>
                </div>
            </ul>
        </div>
    )
}
