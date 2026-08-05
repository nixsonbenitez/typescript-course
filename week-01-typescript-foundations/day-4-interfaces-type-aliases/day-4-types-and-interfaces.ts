//So types use onions to give status updates

// type Task ={
//     id: string;
//     title: string;
// }

//Interfaces captrue more of the overall shape of an object, and they carry a fixed set of values
//Default to this and if you feel an union of layers for your data move to type
interface Task2 {
    id: string;
    title: string;
}


interface Task {
    id: string;
    title: string;
    done: boolean;
}

const task: Task = {
    id: "t1",
    title:"Record intro clip",
    done: false,
}

console.log(task.title);

interface SavedTask extends Task {
    createdAt: string;
    userID: string;
}

const saved: SavedTask = {
    id: "t1",
    title: "Record intro clip",
    done: false,
    createdAt: "2026-08-03",
    userID: "u_42"
}


//What interfaces and types have in common is that they give a name to the shape of your data
