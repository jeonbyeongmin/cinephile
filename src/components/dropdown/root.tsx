import { createContext, useCallback, useContext, useMemo } from 'react';

type DropdownValues = {
  open: boolean;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
};

const DropdwonContext = createContext<DropdownValues | null>(null);

export function useDropdown() {
  const context = useContext(DropdwonContext);
  if (context === null) {
    throw new Error('useDropdown must be used within a DropdownRoot');
  }
  return context;
}

interface DropdownProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange(open: boolean): void;
  className?: string;
}

export function DropdownRoot(props: DropdownProps) {
  const { children, open, onOpenChange, className } = props;

  const onOpenToggle = useCallback(() => {
    onOpenChange(!open);
  }, [onOpenChange, open]);

  const value = useMemo(() => {
    return { open, onOpenChange, onOpenToggle };
  }, [onOpenChange, onOpenToggle, open]);

  return (
    <DropdwonContext.Provider value={value}>
      <div className={className}>{children}</div>
    </DropdwonContext.Provider>
  );
}
