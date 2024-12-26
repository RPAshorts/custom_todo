import { Todo } from '../types/todo';

export const demoTodos: Todo[] = [
  {
    id: '1',
    text: 'Complete project documentation',
    completed: false,
    createdAt: new Date('2024-03-10T10:00:00'),
  },
  {
    id: '2',
    text: 'Review pull requests',
    completed: true,
    createdAt: new Date('2024-03-10T11:30:00'),
  },
  {
    id: '3',
    text: 'Setup development environment',
    completed: false,
    createdAt: new Date('2024-03-10T09:15:00'),
  },
  {
    id: '4',
    text: 'Write unit tests',
    completed: false,
    createdAt: new Date('2024-03-10T14:20:00'),
  },
  {
    id: '5',
    text: 'Deploy to staging',
    completed: true,
    createdAt: new Date('2024-03-10T13:45:00'),
  },
];