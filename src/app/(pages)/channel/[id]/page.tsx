import { getChannel } from '@/api/channels/get-channel';
import { ChannelDetailHeader } from '@/app/(pages)/channel/[id]/_components';
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
            src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
            alt="스틸 컷"
            className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
            sizes="300px"
            fill
          />
        </div>
        <div className={css({ position: 'absolute', bottom: 0, w: 'full', h: '80', bgGradient: 'verticalOverflow' })} />
        <div className={cx(css({ position: 'absolute', bottom: 3, left: 3 }), flex({ align: 'center' }))}>
          <Poster src={data.channel.movie.posterPath} alt={data.channel.movie.posterPath} width="20" size="100px" />
          <div className={css({ ml: 3 })}>
            <div className={css({ fontSize: 'md', fontWeight: 'bold', color: 'white' })}>
              {data.channel.movie.krTitle}
            </div>
            <div className={css({ fontSize: 'xs', color: 'gray.400' })}>{data.channel.movie.originalTitle}</div>
            <div className={css({ fontSize: 'xs', color: 'gray.400' })}>{data.channel.movie.releaseDate}</div>
          </div>
        </div>
      </div>
      <div className={css({ mt: 3, p: 3 })}>
        <div className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>개요</div>
        <div className={css({ fontSize: { base: 'sm', md: 'md' }, color: 'gray.300' })}>
          {data.channel.movie.overview}
        </div>
      </div>
    </>
  );
}

export default ChannelDetailPage;
