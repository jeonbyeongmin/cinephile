interface ModalTitleProps {
  children?: React.ReactNode;
  className?: string;
}

export function ModalTitle(props: ModalTitleProps) {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
}
