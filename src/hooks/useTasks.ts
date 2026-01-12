// src/hooks/useTasks.ts
import { useEffect, useState } from 'react';
import type { Task } from '../types/index';

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask: Omit<Task, 'id'>) => {
        const taskWithId = { ...newTask, id: Date.now().toString() };
        setTasks(prevTasks => [...prevTasks, taskWithId]);
    };

    const updateTask = (updatedTask: Task) => {
        setTasks(prevTasks =>
            prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    const deleteTask = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    return { tasks, addTask, updateTask, deleteTask };
};

export default useTasks;