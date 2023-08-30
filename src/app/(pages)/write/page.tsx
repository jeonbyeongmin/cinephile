import { getChannel } from '@/api/channels/get-channel';
import { WritePageMain } from '@/app/(pages)/write/Main';
import { Flex } from '@/styled-system/jsx';

import { redirect } from 'next/navigation';

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
    <Flex direction="col" className="w-full h-full relative">
      <WritePageMain channelId={channelId} movieTitle={data.channel.movie.krTitle} />
    </Flex>
  );
}
