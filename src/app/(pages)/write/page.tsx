import { getChannel } from '@/api/channels/get-channel';
import { WriteEditor, WriteHeader } from '@/app/(pages)/write/_components';
import { Flex } from '@/styled-system/jsx';
import { redirect } from 'next/navigation';

interface WritePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function WritePage({ searchParams }: WritePageProps) {
  const channelId = searchParams['channel'] as string;
  const data = await getChannel({ queries: { id: Number(channelId) }, isServer: true });

  if (!data) {
    redirect('/404');
  }

  // user 확인 후 홈으로 리다이렉트

  return (
    <Flex direction="column" css={{ w: 'full', h: 'full', position: 'relative' }}>
      <WriteHeader title={data.channel.movie.krTitle} poster={data.channel.movie.posterPath} />
      <WriteEditor channelId={channelId} />
    </Flex>
  );
}
