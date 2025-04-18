'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Input } from '@/shared/components/ui/input';
import { useGetTodos } from '../model/hooks/useGetTodos';
import { useState } from 'react';
import { useCreateTodo } from '../model/hooks/useCreateTodo';
import { Loader } from '@/shared/components/loader';
import { Todo } from '@/entities/Todo';

export const TodoList = () => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const { todos, isLoading } = useGetTodos();
  const { createTodo, isPending } = useCreateTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;

    createTodo({
      title: newTodoTitle,
      completed: false,
      userId: 1,
    });
    setNewTodoTitle('');
  };

  return (
    <Card className="w-full shadow-lg border-t-4 border-t-primary mx-auto h-full max-w-[600px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Todo App</CardTitle>
        <CardDescription>Manage your tasks effectively</CardDescription>
      </CardHeader>

      <CardContent className="h-full">
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
          <Input
            placeholder="Add a new task..."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            className="cursor-pointer"
            disabled={!newTodoTitle.trim()}>
            <PlusCircle className="h-4 w-4 mr-2" />
            {isPending ? <Loader className="border-white" /> : 'Add'}
          </Button>
          ``
        </form>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {todos?.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No tasks yet. Add your first task above!
              </div>
            ) : (
              <>
                {todos?.map((todo) => (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                ))}
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
