import React from 'react'
import { useFetchTasks } from '../hooks/useFetchTasks';
import { TaskCard } from './TaskCard';

export const Task = () => {

    const { tasks, handleDelete } = useFetchTasks();

    return (
        <ul className='grid grid-cols-3 gap-5 mb-2 p-4'>
            {tasks.map((t) => (
                <div key={t.id}>
                    <TaskCard
                        task={t}
                        handleDelete={handleDelete}
                    />
                </div>
            ))}
        </ul>
    )
}
