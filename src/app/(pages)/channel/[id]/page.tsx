import { getChannel } from '@/api/channels/get-channel';
import { css } from '@/styled-system/css';
import { getImage } from '@/utils/image';

import { MovieInfo } from '@/app/(pages)/channel/[id]/_components/movie-info';
import { ChannelDetailHeader, ChannelThreadList, StillcutCarousel } from './_components';

interface ChannelDetailPageProps {
  params: {
    id: string;
  };
}

async function ChannelDetailPage({ params }: ChannelDetailPageProps) {
  const channelId = params.id;

  const data = await getChannel({
    queries: { id: Number(channelId) },
    isServer: true,
  });

  const poster = await getImage(data.channel.movie.posterPath);

  const repStillcuts = data.channel.movie.stillcuts.slice(0, 10);

  const stillcuts = await Promise.all(
    repStillcuts.map(stillcut => {
      return getImage(stillcut);
    })
  );

  return (
    <>
      <ChannelDetailHeader title={data.channel.movie.krTitle} />
      <MovieInfo movie={data.channel.movie} poster={poster} representImage={stillcuts[0]} />

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
      <StillcutCarousel stillcuts={stillcuts} />

      <div className={css({ mt: 3, p: 4 })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>스레드</div>
      </div>
      <ChannelThreadList />
    </>
  );
}

export default ChannelDetailPage;
