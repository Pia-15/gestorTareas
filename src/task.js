//Lista de tareas 
let tasks = JSON.parse(localStorage.getItem("task")) || [];

//Función para llevar a cabo tareas 
export const getTasks = () => tasks;

//Función para agregar una tarea 
export const addTask = (task) => {
    const newTask =  {
        id: Date. now (), 
        text: task,
        completed: false,
    };
tasks.push (newTask);
localStorage.setItem("task", JSON.stringify (tasks));
};

// Función para eliminar una tarea 
export const deleteTask =(id) => { 
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("task", JSON.stringify (tasks));

};

//Función para actualizar una tarea 
export const toggleTask = (id) => {
    tasks= tasks.map ((task) => {
        if (task.id === parseInt (id)){ 
            task.completed =!task.completed;
    }
    return task
    });
    localStorage.setItem("task", JSON.stringify (tasks));
};

