import { $api } from '@/shared/api/$api';
import { API_URL } from '@/shared/config/api.config';
import type { ITodo } from '../types';

class TodosService {
  async getTodos(limit = 10): Promise<ITodo[]> {
    const { data: todos } = await $api.get<ITodo[]>(API_URL.todos(), {
      params: {
        _limit: limit,
      },
    });

    return todos;
  }

  async createTodo(todo: Omit<ITodo, 'id'>): Promise<ITodo> {
    const { data: createdTodo } = await $api.post<ITodo>(API_URL.todos(), todo);

    return createdTodo;
  }

  async deleteTodo(id: number): Promise<number> {
    await $api.delete(API_URL.todos(`/${id}`));
    return id;
  }
}

export const todosService = new TodosService();
