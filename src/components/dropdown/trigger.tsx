import { useDropdown } from '@/components/dropdown/root';

interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownTrigger(props: DropdownTriggerProps) {
  const { children, className } = props;

  const { onOpenToggle, onOpenChange } = useDropdown();

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      onOpenChange(false);
    }
  };

  return (
    <button onClick={onOpenToggle} onKeyDown={onKeyDown} className={className}>
      {children}
    </button>
  );
}
