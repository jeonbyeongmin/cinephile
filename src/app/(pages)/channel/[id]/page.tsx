import { getChannel } from '@/api/channels/get-channel';
import { ChannelDetailHeader } from '@/app/(pages)/channel/[id]/_components';
import { ChannelThreadList } from '@/app/(pages)/channel/[id]/_components/channel-thread-list';
import { StillcutCarousel } from '@/app/(pages)/channel/[id]/_components/stillcut-carousel';
import { Poster } from '@/components';
import { css, cx } from '@/styled-system/css';
import { aspectRatio, flex } from '@/styled-system/patterns';
import Image from 'next/image';

interface ChannelDetailPageProps {
  params: {
    id: string;
  };
}

async function ChannelDetailPage({ params }: ChannelDetailPageProps) {
  const channelId = params.id;
  const data = await getChannel({ queries: { id: Number(channelId) }, isServer: true });

  return (
    <>
      <ChannelDetailHeader title={data.channel.movie.krTitle} />
      <div className={css({ position: 'relative' })}>
        <div
          className={cx(
            aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
            css({ position: 'relative', overflow: 'hidden', opacity: 0.8 })
          )}
        >
          <Image
            src={data.channel.movie.stillcuts[0]}
            alt="대표 이미지"
            className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
            fill
            priority
            sizes="500px"
          />
        </div>
        <div className={css({ position: 'absolute', bottom: 0, w: 'full', h: '80', bgGradient: 'verticalOverflow' })} />
        <div className={cx(css({ position: 'absolute', bottom: 3, left: 3 }), flex({ align: 'center' }))}>
          <Poster src={data.channel.movie.posterPath} alt={data.channel.movie.posterPath} width="20" sizes="100px" />
          <div className={css({ ml: 3 })}>
            <div className={css({ fontSize: 'md', fontWeight: 'bold', color: 'white' })} id="movie-title">
              {data.channel.movie.krTitle}
            </div>
            <div className={css({ fontSize: 'xs', color: 'gray.400' })}>{data.channel.movie.originalTitle}</div>
            <div className={css({ fontSize: 'xs', color: 'gray.400' })}>{data.channel.movie.releaseDate}</div>
          </div>
        </div>
      </div>

      <div className={css({ mt: 3, p: 4 })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>개요</div>
        <div className={css({ fontSize: { base: 'sm', md: 'md' }, color: 'gray.200' })}>
          {data.channel.movie.overview}
        </div>
      </div>

      <div className={css({ mt: 3, p: 4 })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>출연/제작</div>
      </div>

      <div className={css({ mt: 3, p: 4, overflow: 'auto' })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>스틸컷</div>
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
