interface Props {
  content: string;
}

export function ThreadBody({ content }: Props) {
  return <div className="text-gray-200 line-clamp-4 break-all">{content}</div>;
}
