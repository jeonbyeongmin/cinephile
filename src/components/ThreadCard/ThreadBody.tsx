import Link from 'next/link';

interface Props {
  content: string;
  navigateTo: string;
}

export function ThreadBody({ content, navigateTo }: Props) {
  return (
    <div className="text-gray-200 line-clamp-4 break-all">
      <Link href={navigateTo}>{content}</Link>
    </div>
  );
}
