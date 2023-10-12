import { useCallback, useMemo } from 'react';

import { Portal } from '@/components/portal';

import { useEscapePressEffect } from '@/components/modal/use-escape-press-effect';
import { useScrollLock } from '@/components/modal/use-scroll-lock';
import { ModalClose } from './close';
import { ModalContent } from './content';
import { ModalProvider } from './context';
import { ModalDescription } from './description';
import { ModalOverlay } from './overlay';
import { ModalTitle } from './title';

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

export function Modal(props: ModalProps) {
  const { children, open = false, onOpenChange } = props;

  const onOpenToggle = useCallback(() => {
    onOpenChange?.(!open);
  }, [onOpenChange, open]);

  const value = useMemo(() => {
    return { open, onOpenChange, onOpenToggle };
  }, [onOpenChange, onOpenToggle, open]);

  useScrollLock({ value: open });

  useEscapePressEffect(() => {
    onOpenChange?.(false);
  });

  return (
    <ModalProvider value={value}>
      <Portal>{children}</Portal>
    </ModalProvider>
  );
}

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Close = ModalClose;
