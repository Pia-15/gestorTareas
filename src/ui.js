//Importar la función para traer las tareas de localStorage
import { getTasks } from "./task";

// Función para visualizar tareas 
export const renderTask = () =>{
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    const task = getTasks();
    taskList.forEach ((task) => {
        const li =document.createElement("li");
        li.setAttribute ("data-id", task.id)

        if (task.completed === true)  {
            li.classList.add ("completed");
      }

        li.innerHTML = `
            ${task.text}
            <button class="delete"> Borrar </button>
            <button class="toggle"> ${task.completed === true ? "Regresar": "CompletedO"}  </button> 
        `;

        taskList.appendChild(li);
    });
 };
