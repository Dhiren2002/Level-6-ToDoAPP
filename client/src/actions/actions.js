import axios from 'axios';

//URL from node js
const url ='http://localhost:8900/';


// Gathers all tasks from the database
const getTasks = async () => {
    let response = await axios.get(url + "tasks").then(response => {
        return response.data;
    });

    return response;
};

// POSTS / Adds Task into the database
const addTask = async (task) => {
    let response = await axios.post(url + "tasks", task).then(response => {
        return response.data;
    });

    return response;
}

// PUT / updates the task from the database
const updateTask = async (id) => {
    let response = await axios.put(url + "tasks", id, {
  
    }).then(response =>{
        return response.data;
    });

    return response;
}

//DELETES Tasks from the database

const deleteTask = async (id) => {

    try {
        await axios.delete(url + "tasks/" + id);
        window.location.reload()
    } catch (err) {
    }    
}

//Gathers all Low Priority Tasks where task_status_id (FK) is set to 1
const LowPriorityTask = async() => {
    let response = await axios.get(url + "tasks/pri/1" , {
    }).then(response =>{
        return response.data;
    });

    return response;
}

//Gathers all Medium Priority Tasks where task_status_id (FK) is set to 2


const MediumPriorityTask = async() => {
    let response = await axios.get(url + "tasks/pri/2" , {
    }).then(response =>{
        return response.data;
    });

    return response;
}

//Gathers all High Priority Tasks where task_status_id (FK) is set to 3


const HighPriorityTask = async() => {
    let response = await axios.get(url + "tasks/pri/3" , {
    }).then(response =>{
        return response.data;
    });

    return response;
}


// Gathers Most recent task looking from ascending order
const UpcomingTasks = async() => {
    let response = await axios.get(url + "tasks/tasks/TaskOrder" , {
    }).then(response =>{
        return response.data;
    });

    return response;
}

// Gets a specifc task from the unique ID from the database
const getTaskById = async(id) => {
    console.log(id)
    let response = await axios.get(url + `tasks/${id}`).then(response => {
        return response.data;
    });

    return response;
}

//gets all avatars from the avatar table
const getAvatar = async () => {
    let response = await axios.get(url + "avatars").then(response => {
        return response.data;
    });

    return response;
};


export { getTasks, addTask, updateTask, deleteTask, LowPriorityTask, MediumPriorityTask, HighPriorityTask, UpcomingTasks, getTaskById, getAvatar };