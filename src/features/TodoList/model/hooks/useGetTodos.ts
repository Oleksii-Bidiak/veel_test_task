import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { todosService } from '../../../../entities/Todo/model/services/todos.service';

export const useGetTodos = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => todosService.getTodos(),
  });

  console.log('todos', todos);

  return useMemo(
    () => ({ todos, error, isLoading }),
    [error, todos, isLoading]
  );
};
