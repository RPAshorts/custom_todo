import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';
import { ThemeToggle } from './components/ThemeToggle';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
          <div className="container mx-auto px-4 py-8 max-w-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <CheckSquare size={32} className="text-blue-500" />
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Todo App
                </h1>
              </div>
              <ThemeToggle />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <TodoInput />
              <TodoList />
            </div>
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;