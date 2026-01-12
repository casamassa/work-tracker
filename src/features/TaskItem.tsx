// src/features/TaskItem.tsx
import React from 'react';
import Button from '../components/Button';
import { formatTime } from '../utils/formatTime';
import type { Task } from '../types';

type TaskItemProps = {
    task: Task;
    onStart: (task: Task) => void;
    onPause: () => void;
    isActive: boolean;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onStart, onPause, isActive }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded shadow-md mb-2">
            <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{task.title}</h3>
                <p className="text-sm text-gray-400">Priority: {task.priority}</p>
                <p className="text-md text-white">Total Time: {formatTime(task.totalTimeSeconds)}</p>
            </div>
            <div>
                <Button variant={isActive ? 'secondary' : 'primary'} onClick={isActive ? onPause : () => onStart(task)}>
                    {isActive ? 'Pause' : 'Start'}
                </Button>
            </div>
        </div>
    );
};

export default TaskItem;