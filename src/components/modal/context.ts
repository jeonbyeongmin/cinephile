import { createContext, useContext } from 'react';

interface ModalValues {
  open: boolean;
  onOpenChange?(open: boolean): void;
  onOpenToggle(): void;
}

const ModalContext = createContext<ModalValues | null>(null);

export function useModal() {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error('useModal must be used within a ModalRoot');
  }
  return context;
}

export const ModalProvider = ModalContext.Provider;
