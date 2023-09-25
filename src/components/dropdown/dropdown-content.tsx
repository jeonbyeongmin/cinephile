'use client';

import { useDropdown } from '@/components/dropdown/root';

interface DropdownContentProps {
  children: React.ReactNode;
  classNames?: string;
}

export function DropdownContent(props: DropdownContentProps) {
  const { children, classNames } = props;

  const { open } = useDropdown();

  if (!open) {
    return null;
  }

  return <div className={classNames}>{children}</div>;
}
