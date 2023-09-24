import { HomeThreadList } from '@/app/(pages)/home/_components';

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const mode = searchParams.sort as 'new' | 'hot';

  return <HomeThreadList type={mode} />;
}
