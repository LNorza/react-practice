import type { Todo } from '../TaskApp';
import * as z from 'zod/v4';

interface TaskState {
  todos: Todo[];
  lenght: number;
  completed: number;
  pending: number;
}

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  lenght: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTaskInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem('task-state');

  if (!localStorageState) {
    return {
      completed: 0,
      lenght: 0,
      pending: 0,
      todos: [],
    };
  }

  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      completed: 0,
      lenght: 0,
      pending: 0,
      todos: [],
    };
  }

  return result.data;
};

export type TaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };

      return {
        ...state,
        lenght: state.lenght + 1,
        pending: state.todos.length + 1,
        todos: [...state.todos, newTodo],
      };
    }

    case 'DELETE_TODO': {
      const currentTodos = state.todos.filter(todo => todo.id == action.payload);

      const completedTodos = currentTodos.filter(todo => todo.completed).length;
      const pendingTodos = currentTodos.length - completedTodos;

      return {
        ...state,
        lenght: currentTodos.length,
        completed: completedTodos,
        pending: pendingTodos,
        todos: currentTodos,
      };
    }

    case 'TOGGLE_TODO':
      const updatedTodos = state.todos.map(todo => {
        if (todo.id == action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      const completeTodos = updatedTodos.filter(todo => todo.completed).length;
      const pendingTodos = updatedTodos.length - completeTodos;

      return {
        ...state,
        completed: completeTodos,
        pending: pendingTodos,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};
