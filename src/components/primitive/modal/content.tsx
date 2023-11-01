import { useRef } from 'react';

import { useClickOutsideEffect } from '@/hooks';

import { css } from '@/styled-system/css';
import { useModal } from './context';

interface ModalContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function ModalContent(props: ModalContentProps) {
  const { children, className } = props;
  const { open, onOpenChange } = useModal();

  const contentRef = useRef<HTMLDivElement>(null);

  useClickOutsideEffect(contentRef, () => onOpenChange?.(false));

  if (!open) {
    return null;
  }

  return open ? (
    <div className={modalContentContainerStyles}>
      <div ref={contentRef} className={className}>
        {children}
      </div>
    </div>
  ) : null;
}

const modalContentContainerStyles = css({
  inset: 0,
  position: 'fixed',
  display: 'flex',
  zIndex: 9999,
});
