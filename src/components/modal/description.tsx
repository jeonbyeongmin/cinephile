interface ModalDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

export function ModalDescription(props: ModalDescriptionProps) {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
}
