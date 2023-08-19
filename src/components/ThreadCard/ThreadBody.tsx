interface Props {
  content: string;
  navigateTo?: string;
}

// TODO: sanitize html
export function ThreadBody({ content, navigateTo }: Props) {
  return (
    <div
      className="text-sm flex-1 md:text-base text-gray-200 line-clamp-4 break-all"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
