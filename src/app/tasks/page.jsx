import { AddTask } from '@/components/AddTask';
import TaskCard from '@/components/TaskCard';
import { creatATask } from '@/lib/action';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TaskPage = async () => {
    const tasks= await getTasks();
    return (
        <div className='space-y-7 p-6'> 
            <h1>Task : {tasks.length}</h1>
            <AddTask creatATask={creatATask}></AddTask>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-4'>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;