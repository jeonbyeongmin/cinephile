import { useRef } from 'react';

import { useClickOutsideEffect } from '@/hooks';

import { useDropdown } from './root';

interface DropdownContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownContent(props: DropdownContentProps) {
  const { children, className } = props;
  const { open, onOpenChange } = useDropdown();

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutsideEffect(containerRef, () => onOpenChange(false));

  return open ? (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  ) : null;
}
