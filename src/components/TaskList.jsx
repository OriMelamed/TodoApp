import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <div className='mt-10'>
            {
                tasks.length > 0 ?
                    tasks.map((task, index) =>
                        < TaskItem key={index} description={task} onDelete={onDelete} index={index} onEdit={onEdit} />
                    )
                    :
                    <p>There are no tasks</p>
            }

        </div>
    )
}
