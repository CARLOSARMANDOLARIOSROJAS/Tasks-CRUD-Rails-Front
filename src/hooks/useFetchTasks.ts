import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../interfaces";


export const useFetchTasks = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            const response = await axios.get('http://localhost:3000/tasks');
            setTasks(response.data);
        }
        getTasks();
    }, []);

    const getTask = async (id: number) => {
        try {
            const response = await axios.get(`http://localhost:3000/tasks/${id}`);
            return response.data;
        } catch (error) {
            console.log("error", error);
        }
     }

    const createTask = async (task: Task) => {
        try {
            const response = await axios.post('http://localhost:3000/tasks', task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleUpdate = async (id: number, formData: Task) => {
        try {
           const response = await axios.put(`http://localhost:3000/tasks/${id}`, formData);
            setTasks(tasks.map((t) => (t.id === id ? response.data : t)));
        } catch (error) {
            console.log("error", error);
        }
    }

    return {
        tasks,
        getTask,
        createTask,
        handleDelete, 
        handleUpdate
    }
}
