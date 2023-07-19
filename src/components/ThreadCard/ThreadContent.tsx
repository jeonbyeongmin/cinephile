interface Props {
  children: React.ReactNode;
}

export function ThreadContent({ children }: Props) {
  return <div>{children}</div>;
}
