//Array of strings
let Tasks = ["Study"];

//adds task to array 
let addTask = (task) =>
{
   Tasks.push(task);
   console.log(task + " has been added to my tasks.")
}

//lists all tasks and prints them
let listAllTasks = ()=>
{
    Tasks.forEach((element) =>{console.log(element)});
}

//delete tasks
let deleteTask = (task)=>
{
    let index = Tasks.indexOf(task);
    
    if(index > -1)  
    {
        Tasks.splice(index,1);
        console.log(task + " has been deleted from my Tasks")
    }
    else
    {
        console.log(task + " not found in my Tasks")
    }
    return Tasks.length;
    
}

//carry out functions
addTask("Sleep");
addTask("Work");
addTask("Eat");
listAllTasks();
deleteTask();
