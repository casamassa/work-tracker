// src/types/index.ts

// src/types/index.ts
export type Priority = 'low' | 'medium' | 'high';

export type TaskStatus = 'idle' | 'running' | 'paused' | 'completed';

export interface Task {
    id: string;
    title: string;
    priority: Priority;
    status: TaskStatus;
    totalTimeSeconds: number;
}

export interface TimerState {
    activeTask: Task | null;
    currentSessionTime: number;
}