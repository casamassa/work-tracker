// src/hooks/useTimer.ts
import { useEffect, useRef, useState } from 'react';
import type { Task, TimerState } from '../types';

const useTimer = (tasks: Task[], updateTask: (task: Task) => void) => {
    const [timerState, setTimerState] = useState<TimerState>({ activeTask: null, currentSessionTime: 0 });
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startTask = (task: Task) => {
        if (timerState.activeTask) return; // Prevent starting a new task if one is already active
        setTimerState({ activeTask: task, currentSessionTime: 0 });
        intervalRef.current = setInterval(() => {
            setTimerState(prev => ({ ...prev, currentSessionTime: prev.currentSessionTime + 1 }));
        }, 1000);
    };

    const pauseTask = () => {
        if (!timerState.activeTask) return;
        const updatedTask = { ...timerState.activeTask, totalTimeSeconds: timerState.activeTask.totalTimeSeconds + timerState.currentSessionTime }; 
        updateTask(updatedTask);
        clearInterval(intervalRef.current!);
        setTimerState({ activeTask: null, currentSessionTime: 0 });
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current!); // Clean up interval on component unmount
        };
    }, []);

    return { timerState, startTask, pauseTask };
};

export default useTimer;