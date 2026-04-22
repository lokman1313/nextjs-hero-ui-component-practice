import tasks from "../data/task.json"

export const getTasks=async ()=>{
    return tasks
}

export const postTask=async (newTasks)=>{
    newTasks.id=tasks.length+1;
    tasks.push(newTasks);
    return {ok:true,message:'task added successfully'}
}