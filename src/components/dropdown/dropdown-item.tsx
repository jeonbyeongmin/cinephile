interface DropdownItemProps {
  children: React.ReactNode;
  onSelect?(): void;
  classNames?: string;
}

export function DropdownItem(props: DropdownItemProps) {
  const { children, onSelect, classNames } = props;

  return (
    <div onClick={onSelect} className={classNames}>
      {children}
    </div>
  );
}
