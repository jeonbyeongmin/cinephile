import Link from 'next/link';

interface Props {
  content: string;
  navigateTo?: string;
}

export function ThreadBody({ content, navigateTo }: Props) {
  return (
    <p className="text-sm flex-1 md:text-base text-gray-200 line-clamp-4 break-all">
      {navigateTo ? <Link href={navigateTo}>{content}</Link> : content}
    </p>
  );
}
