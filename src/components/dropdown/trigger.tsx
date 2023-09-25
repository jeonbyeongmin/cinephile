import { useDropdown } from '@/components/dropdown/root';

interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownTrigger(props: DropdownTriggerProps) {
  const { children, className } = props;

  const { onOpenToggle } = useDropdown();

  return (
    <button onClick={onOpenToggle} className={className}>
      {children}
    </button>
  );
}
