import { getChannel } from '@/api/channels/get-channel';
import { WriteEditor, WriteHeader } from '@/app/(pages)/write/_components';
import { Flex } from '@/styled-system/jsx';
import { redirect } from 'next/navigation';

interface WritePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function WritePage({ searchParams }: WritePageProps) {
  const channelId = searchParams['channel'] as string;

  if (!channelId) redirect('/not-found');

  const data = await getChannel({ queries: { id: channelId }, isServer: true });

  if (!data.channel) redirect('/not-found');

  return (
    <Flex direction="column" css={{ w: 'full', h: 'full', position: 'relative' }}>
      <WriteHeader title={data.channel.movie.krTitle} poster={data.channel.movie.posterPath} />
      <WriteEditor channelId={channelId} />
    </Flex>
  );
}
