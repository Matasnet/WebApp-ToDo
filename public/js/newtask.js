import {update_task} from '../../modules/update-task.js'
import {delete_task} from '../../modules/delete-task.js'


document.getElementById('task').addEventListener('keyup', function(event){

    if(event.key === 'Enter'){

        const task = document.getElementById('task').value 
        if(task){
            addNewTask(task)
            document.getElementById('task').value = ''
                }
        }
})

function addNewTask(task){

    let tasks // var tasks


    if(localStorage.hasOwnProperty('to_do_tasks')){
        
        // get tasks
        // push a new task to the list
        // save new list in local storage

        /* const */ tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
        tasks.push ({name: task, status: 'to_do'})


    } else {
        
        // craete a new array with new task object
        // save it to the local storage

        /*const*/ tasks = [
            {
                name: task,
                status: 'to do'
            }
        ]
        
    }
    
    localStorage.setItem('to_do_tasks', JSON.stringify(tasks)) 
    

    const tasks_list = document.getElementById("tasks-list")
    const newTask = document.createElement("li")
    newTask.innerText = task

    const buttons = document.createElement("div")
    buttons.classList.add("buttons")

    const remove = document.createElement("button") //dodanie elementu <button>
    remove.classList.add("remove")                  // dodanie klasy "remove"
    remove.addEventListener('click', function() {
        delete_task(this.parentNode.parentNode)
    })


    const complete = document.createElement("button")
    complete.classList.add("complete")
    complete.addEventListener('click', function() {
        update_task.log(this.parentNode.parentNode)
    })

    buttons.appendChild(remove)     // dodanie przycisku usuń 
    buttons.appendChild(complete)
    newTask.appendChild(buttons)
    tasks_list.prepend(newTask)
}
