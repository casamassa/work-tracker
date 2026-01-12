// src/App.tsx
import useTasks from './hooks/useTasks';
import useTimer from './hooks/useTimer';
import TaskForm from './features/TaskForm';
import TaskItem from './features/TaskItem';
import type { Task } from '../types';

function App() {
  // Chamada dos hooks
  const { tasks, addTask, updateTask, deleteTask } = useTasks(); // Incluindo deleteTask
  const { timerState, startTask, pauseTask } = useTimer(tasks, updateTask);

  // Ordenar as tarefas por prioridade (high, medium, low)
  const sortedTasks = [...tasks].sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">Deep Focus Tracker</h1>
          <p className="text-zinc-400">Manage your time with precision.</p>
        </header>

        <section className="mb-10 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <TaskForm onAddTask={addTask} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Your Tasks 
            <span className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-400">{sortedTasks.length}</span>
          </h2>
          
          <div className="space-y-3">
            {sortedTasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task}
                onStart={startTask}
                onPause={pauseTask}
                isActive={timerState.activeTask?.id === task.id}
                deleteTask={deleteTask} // Passando a função deleteTask
              />
            ))}
            
            {sortedTasks.length === 0 && (
              <div className="text-center py-10 border-2 border-dashed border-zinc-800 rounded-xl">
                <p className="text-zinc-500 italic">No tasks yet. Add one above to start focusing!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;