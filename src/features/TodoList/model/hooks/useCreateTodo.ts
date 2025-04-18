import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { type ITodo } from '@/entities/Todo';
import { todosService } from '@/entities/Todo/model/services/todos.service';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: createTodo, isPending } = useMutation({
    mutationKey: ['todos'],
    mutationFn: (todo: Omit<ITodo, 'id'>) => todosService.createTodo(todo),
    onSuccess: (createdTodo) => {
      queryClient.setQueryData<ITodo[]>(['todos'], (oldTodos) => {
        if (!oldTodos) return [createdTodo];
        return [...oldTodos, createdTodo];
      });
    },
  });

  return useMemo(() => ({ createTodo, isPending }), [createTodo, isPending]);
};
