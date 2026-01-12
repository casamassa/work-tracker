// src/features/TaskItem.tsx
import React from 'react';
import Button from '../components/Button';
import { formatTime } from '../utils/formatTime';
import type { Task } from '../types';
import { Trash, Play, Pause } from 'lucide-react'; // Importando os ícones de lixeira, play e pause

type TaskItemProps = {
    task: Task;
    onStart: (task: Task) => void;
    onPause: () => void;
    isActive: boolean;
    currentSessionTime: number; // Adicionando a prop para o tempo de sessão atual
    deleteTask: (taskId: string) => void; // Função para deletar a tarefa
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onStart, onPause, isActive, currentSessionTime, deleteTask }) => {
    const totalTime = isActive ? task.totalTimeSeconds + currentSessionTime : task.totalTimeSeconds; // Calcula o tempo total

    const handleDelete = () => {
        if (window.confirm(`Tem certeza que deseja excluir a tarefa: ${task.title}?`)) {
            deleteTask(task.id); // Chama a função deleteTask caso o usuário confirme
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded shadow-md mb-2">
            <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{task.title}</h3>
                <p className="text-sm text-gray-400">Priority: {task.priority}</p>
                <p className="text-md text-white">Total Time: {formatTime(totalTime)}</p> {/* Atualiza o tempo total para mostrar o tempo somado */}
            </div>
            <div className="flex items-center">
                <Button variant={isActive ? 'secondary' : 'primary'} onClick={isActive ? onPause : () => onStart(task)}>
                    {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button variant="danger" onClick={handleDelete} className="ml-2">
                    <Trash className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
};

export default TaskItem;