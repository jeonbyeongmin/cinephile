import { useDropdown } from '@/components/primitive/dropdown/root';
import { css, cx } from '@/styled-system/css';
import { useCallback } from 'react';

interface DropdownItemProps {
  children: React.ReactNode;
  classNames?: string;
  onSelect?(): void;
}

export function DropdownItem(props: DropdownItemProps) {
  const { children, onSelect, classNames } = props;
  const { onOpenToggle } = useDropdown();

  const click = useCallback(() => {
    onOpenToggle();
    onSelect?.();
  }, [onOpenToggle, onSelect]);

  return (
    <button onClick={click} className={cx(classNames, css({ outline: 'none', w: 'full', color: 'inherit' }))}>
      {children}
    </button>
  );
}
