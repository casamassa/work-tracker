// src/features/TaskForm.tsx
import React, { useState } from 'react';
import Button from '../components/Button';
import type { Task, Priority } from '../types';
import useTasks from '../hooks/useTasks';

const TaskForm: React.FC = () => {
    const { addTask } = useTasks();
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState<Priority>('medium');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        addTask({ title, priority, status: 'idle', totalTimeSeconds: 0 });
        setTitle(''); // Clear input field
        setPriority('medium'); // Reset to default
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-4 rounded bg-gray-800">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Task Title"
                className="bg-zinc-900 border border-gray-600 rounded p-2 mb-2 w-full text-white"
                required
            />
            <select
                value={priority}
                onChange={e => setPriority(e.target.value as Priority)}
                className="bg-zinc-900 border border-gray-600 rounded p-2 mb-2 w-full text-white"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <Button variant="primary">Add Task</Button>
        </form>
    );
};

export default TaskForm;