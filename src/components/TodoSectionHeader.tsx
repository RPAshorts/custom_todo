import React from 'react';

interface TodoSectionHeaderProps {
  title: string;
  count: number;
}

export function TodoSectionHeader({ title, count }: TodoSectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <span className="px-2 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
        {count}
      </span>
    </div>
  );
}