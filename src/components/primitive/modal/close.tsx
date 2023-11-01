interface ModalCloseProps {
  children?: React.ReactNode;
  className?: string;
}

export function ModalClose(props: ModalCloseProps) {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
}
