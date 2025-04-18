import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { todosService } from '../services/todos.service';
import type { ITodo } from '../types';

export const useDeleteTodos = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTodo, isPending } = useMutation({
    mutationKey: ['todos'],
    mutationFn: (id: number) => todosService.deleteTodo(id),
    onSuccess: (id) => {
      queryClient.setQueryData<ITodo[]>(['todos'], (oldTodos) => {
        if (!oldTodos) return [];
        return oldTodos.filter((todo) => todo.id !== id);
      });
    },
  });

  return useMemo(() => ({ deleteTodo, isPending }), [deleteTodo, isPending]);
};
