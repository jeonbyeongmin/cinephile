import { getChannel } from '@/api/channels/get-channel';
import { css } from '@/styled-system/css';
import { redirect } from 'next/navigation';

import { ChannelDetailHeader, ChannelThreadList, MovieInfo, StillcutCarousel } from './_components';

interface ChannelDetailPageProps {
  params: {
    id: string;
  };
}

async function ChannelDetailPage({ params }: ChannelDetailPageProps) {
  const channelId = params.id;

  if (!channelId) redirect('/not-found');

  const data = await getChannel({
    queries: { id: params.id },
    isServer: true,
  });

  if (!data.channel) redirect('/not-found');

  return (
    <>
      <ChannelDetailHeader title={data.channel.movie.krTitle} />
      <MovieInfo
        movie={data.channel.movie}
        posterPath={data.channel.movie.posterPath}
        representImage={data.channel.movie.stillcuts[0]}
      />

      <div className={css({ px: 4 })}>
        <div className={css({ mb: 2, fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>개요</div>
        <div className={css({ fontSize: { base: 'sm', md: 'md' }, color: 'gray.200' })}>
          {data.channel.movie.overview}
        </div>
      </div>

      <div className={css({ mt: 3, p: 4 })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>출연/제작</div>
      </div>

      <div className={css({ mt: 3, p: 4, overflow: 'auto' })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>이미지</div>
      </div>
      <StillcutCarousel stillcuts={data.channel.movie.stillcuts} />

      <div className={css({ mt: 3, p: 4 })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>스레드</div>
      </div>
      <ChannelThreadList />
    </>
  );
}

export default ChannelDetailPage;
