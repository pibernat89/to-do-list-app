// Info Date//
// Recoger datos del formulario en JS //
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Task Container //

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date(); //devuelve string de una fecha en una region especifica// 
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault(); // para que el form no haga submit y nos envie a otra pag//
    const { value } = event.target.taskText;
    if(!value) return; // Return corta ejecución de la función//
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task); //prepend: cada elemento se agrega al principio//
    event.target.reset(); // reset form//
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => { // Funcion order - ordenar tareas //
    const done = []; // array tareas hechas //
    const toDo = []; // array tareas por hacer //
    tasksContainer.childNodes.forEach( el => { 
        el.classList.contains('done') ? done.push(el) : toDo.push(el)  
    })
    return [...toDo, ...done]; 
}

const renderOrderedTasks = () => {
    order().forEach(el =>  tasksContainer.appendChild(el))
}


setDate();

