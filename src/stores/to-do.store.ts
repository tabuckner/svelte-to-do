import { writable } from 'svelte/store';
import type { ToDoModel } from '../models/to-do.model';

export const toDos = writable<Array<ToDoModel>>([
  {
    id: Math.random(),
    content: 'Learn Svelte',
    completed: false,
  },
  {
    id: Math.random(),
    content: 'Build Simple ToDo App with Svelte',
    completed: false,
  },
]);