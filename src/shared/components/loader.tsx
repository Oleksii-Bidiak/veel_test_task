interface Props {
  className?: string;
}

export const Loader = ({ className }: Props) => {
  return (
    <div className="flex justify-center py-8">
      <div
        className={`h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent ${className}`}></div>
    </div>
  );
};
