import { getChannel } from '@/api/channels/get-channel';
import { WriteMain } from '@/app/(pages)/write/components';

import { Flex } from '@/styled-system/jsx';
import { redirect } from 'next/navigation';

// TODO: create 할 때 캐시 업데이트하기 (react-query mutation)
export default async function WritePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const channelId = searchParams['channel'] as string;
  const data = await getChannel({ queries: { id: Number(channelId) }, isServer: true });

  if (!data) {
    redirect('/404');
  }

  return (
    <Flex direction="column" css={{ w: 'full', h: 'full', position: 'relative' }}>
      <WriteMain channelId={channelId} title={data.channel.movie.krTitle} poster={data.channel.movie.posterPath} />
    </Flex>
  );
}
