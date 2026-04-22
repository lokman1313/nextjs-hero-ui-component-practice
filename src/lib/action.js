import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const creatATask= async (formData)=>{
'use server'
// const name=formData.get("name")
// const discription = formData.get('discription');
// const priority = formData.get('priority');
// const status = formData.get('status');
// const dueDate = formData.get('dueDate');
// const newTask = {name, discription, priority, status, dueDate};
const newTask = Object.fromEntries(formData.entries());
console.log('the surver action',newTask)


const res = await postTask(newTask);
if(res.ok){
    revalidatePath('/tasks')
}
return res;
}

export const newTaskAction= async (formData)=>{
    'use server'
    const newTask = Object.fromEntries(formData.entries())

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks')
        redirect('/tasks')
    }
    return res
}