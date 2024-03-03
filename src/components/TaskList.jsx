import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, onDelete }) {
    return (
        <div>
            {
                tasks.length > 0 ?
                    tasks.map((task, index) =>
                        < TaskItem key={index} description={task} onDelete={onDelete} index={index} />
                    )
                    :
                    <p>There are no tasks</p>
            }

        </div>
    )
}
