import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoSectionHeader } from './TodoSectionHeader';
import { useTodo } from '../context/TodoContext';

export function TodoList() {
  const { todos } = useTodo();
  
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  if (todos.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500 dark:text-gray-400">
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Active Todos Section */}
      <section>
        <TodoSectionHeader title="Tasks" count={activeTodos.length} />
        <div className="space-y-2">
          {activeTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          {activeTodos.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-center py-2">
              No active tasks
            </p>
          )}
        </div>
      </section>

      {/* Completed Todos Section */}
      <section>
        <TodoSectionHeader title="Completed" count={completedTodos.length} />
        <div className="space-y-2">
          {completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          {completedTodos.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-center py-2">
              No completed tasks
            </p>
          )}
        </div>
      </section>
    </div>
  );
}