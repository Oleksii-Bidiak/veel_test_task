import type { ITodo } from '@/entities/Todo';
import { $api } from '@/shared/api/$api';
import { API_URL } from '@/shared/config/api.config';

class TodosService {
  async getTodos(limit = 10): Promise<ITodo[]> {
    const { data: todos } = await $api.get<ITodo[]>(API_URL.todos(), {
      params: {
        _limit: limit,
      },
    });

    return todos;
  }

  async deleteTodo(id: number): Promise<void> {
    const result = await $api.delete(API_URL.todos(`/${id}`));
    console.log('result', result);
  }
}

export const todosService = new TodosService();
