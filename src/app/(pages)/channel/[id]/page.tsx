import { getChannel } from '@/api/channels/get-channel';
import { css } from '@/styled-system/css';
import { redirect } from 'next/navigation';

import { ThreadSortDropdown, type ThreadSortValue } from '@/app/(pages)/_components';
import { Button, Icon } from '@/components';
import { flex } from '@/styled-system/patterns';

import { ChannelDetailHeader, ChannelThreadList, MovieInfo, StillcutCarousel } from './_components';
import { THREAD_SORT_KEY } from './_utils/constants';

interface ChannelDetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ChannelDetailPage({ params, searchParams }: ChannelDetailPageProps) {
  const channelId = params.id;
  const threadSortMode = searchParams[THREAD_SORT_KEY] as ThreadSortValue;

  if (!channelId) {
    redirect('/not-found');
  }

  if (!threadSortMode) {
    redirect(`?${THREAD_SORT_KEY}=hot`);
  }

  const data = await getChannel({
    queries: { channelId },
    isServer: true,
  });

  if (!data.channel) {
    redirect('/not-found');
  }

  const stillcuts = data.channel.movie.stillcuts.slice(0, 10);

  return (
    <>
      <ChannelDetailHeader title={data.channel.movie.krTitle} />
      <MovieInfo
        movie={data.channel.movie}
        posterPath={data.channel.movie.posterPath}
        backdropImage={data.channel.movie.stillcuts[0]}
      />

      <div className={css({ px: 4 })}>
        <div className={css({ mb: 2, fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>개요</div>
        <div className={css({ fontSize: { base: 'sm', md: 'md' }, color: 'gray.200' })}>
          {data.channel.movie.overview}
        </div>
      </div>

      <div className={css({ mt: 3, p: 4 })}>
        <div className={sectionTitleStyles}>출연/제작</div>
      </div>

      <div className={flex({ mt: 3, p: 4, align: 'center', gap: 2 })}>
        <div className={sectionTitleStyles}>이미지</div>
        <p className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>{stillcuts.length}</p>
      </div>
      <StillcutCarousel stillcuts={stillcuts} />

      <div className={dividerStyles} />

      <div className={flex({ px: 4, justify: 'space-between' })}>
        <div className={flex({ align: 'center', gap: 2 })}>
          <p className={sectionTitleStyles}>스레드</p>
          <p className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>{data.channel.threadCount}</p>
        </div>
        <ThreadSortDropdown
          value={threadSortMode}
          keyName={THREAD_SORT_KEY}
          scrollToTop={false}
          className="thread-sorter"
        />
      </div>
      <div className={flex({ px: 3, my: 1 })}>
        <Button
          href={`/write?channel=${channelId}`}
          className={css({ rounded: 'full', fontSize: 'sm' })}
          leftElement={<Icon name="edit" size={18} />}
        >
          스레드 작성
        </Button>
      </div>
      <ChannelThreadList type={threadSortMode} />
    </>
  );
}

const sectionTitleStyles = css({
  fontSize: { base: 'md', md: 'lg' },
  fontWeight: 'bold',
});

const dividerStyles = css({
  w: 'full',
  my: 5,
  h: 2,
  bg: 'gray.900',
});
