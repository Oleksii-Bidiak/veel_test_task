import { Trash2 } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Button } from '@/shared/components/ui/button';
import { useDeleteTodos } from '../model/hooks/useDeleteTodo';
import { useState } from 'react';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

export const Todo: React.FC<TodoProps> = ({ id, title, completed }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);
  const { deleteTodo, isPending } = useDeleteTodos();

  return (
    <Card className="mb-2 border-l-4 hover:border-l-primary transition-colors duration-200 shadow-sm p-1">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Checkbox
            id={`todo-${id}`}
            checked={isCompleted}
            onCheckedChange={() => setIsCompleted((prev) => !prev)}
            className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground cursor-pointer"
          />
          <label
            htmlFor={`todo-${id}`}
            className={cn(
              'text-sm font-medium leading-none cursor-pointer flex-1',
              isCompleted && 'line-through text-muted-foreground'
            )}>
            {title}
          </label>
        </div>

        {isPending ? (
          <div className="flex justify-center py-8">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => deleteTodo(id)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer">
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

