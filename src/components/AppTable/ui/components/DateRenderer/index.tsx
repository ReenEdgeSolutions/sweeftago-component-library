interface DateRendererProps {
  value: string | number | Date;
}

export const DateRenderer: React.FC<DateRendererProps> = ({ value }) => {
  if (!value) return <>-</>;
  const date = new Date(value);
  return <>{date.toLocaleDateString()}</>;
};