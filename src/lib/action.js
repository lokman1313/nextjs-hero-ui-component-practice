import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

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