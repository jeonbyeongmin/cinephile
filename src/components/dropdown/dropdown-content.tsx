import { useDropdown } from '@/components/dropdown/root';
import { useClickOutsideEffect } from '@/hooks/use-click-outside-effect';
import { useRef } from 'react';

interface DropdownContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownContent(props: DropdownContentProps) {
  const { children, className } = props;
  const { open, onOpenChange } = useDropdown();

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutsideEffect(containerRef, () => onOpenChange(false));

  if (!open) {
    return null;
  }

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
