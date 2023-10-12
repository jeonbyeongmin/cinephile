import Image from 'next/image';

import { getChannel } from '@/api/channels/get-channel';
import { Poster } from '@/components';
import { css, cx } from '@/styled-system/css';
import { aspectRatio, flex } from '@/styled-system/patterns';
import { getImage } from '@/utils/image';

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

  const stillcuts = await Promise.all(
    data.channel.movie.stillcuts.map(stillcut => {
      return getImage(stillcut);
    })
  );

  return (
    <>
      <ChannelDetailHeader title={data.channel.movie.krTitle} />
      <div className={css({ position: 'relative' })}>
        <div
          className={cx(
            aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
            css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
          )}
        >
          <Image
            src={stillcuts[0].img.src}
            alt="대표 이미지"
            placeholder="blur"
            blurDataURL={stillcuts[0].base64}
            className={cx(css({ objectFit: 'cover', position: 'absolute' }))}
            sizes="300px"
            priority
            fill
          />
        </div>
        <div
          className={css({ position: 'absolute', bottom: 0, w: 'full', h: 'full', bgGradient: 'verticalOverflow' })}
        />
        <div className={cx(css({ position: 'absolute', bottom: 3, left: 3 }), flex({ align: 'center' }))}>
          <Poster
            src={poster.img.src}
            placeholder="blur"
            blurDataURL={poster.base64}
            alt={data.channel.movie.krTitle}
            width="100px"
            sizes="100px"
          />
          <div className={css({ ml: 3 })}>
            <div
              className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold', color: 'white' })}
              id="movie-title"
            >
              {data.channel.movie.krTitle}
            </div>
            <div className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>
              {data.channel.movie.originalTitle}
            </div>
            <div className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>
              {data.channel.movie.releaseDate}
            </div>
          </div>
        </div>
      </div>

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
