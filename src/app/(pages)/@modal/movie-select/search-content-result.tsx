'use client';

import { getSearchData } from '@/api/search/get-search-data';
import { MovieItem } from '@/app/(pages)/@modal/movie-select/movie-item';
import { MovieListSkeleton } from '@/app/(pages)/@modal/movie-select/movie-list-skeleton';
import { SearchContentNoResult } from '@/app/(pages)/@modal/movie-select/search-content-no-result';
import { useObserverEffect } from '@/hooks';
import { close } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { css, cx } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useRef } from 'react';

interface SearchContentResultProps {
  searchQuery: string;
}

export default function SearchContentResult({ searchQuery }: SearchContentResultProps) {
  const dispatch = useAppDispatch();

  const fetchSearchData = async ({ pageParam = -1 }) => {
    return await getSearchData({ queries: { keyword: searchQuery, cursor: pageParam } });
  };

  const { data, isInitialLoading, isPreviousData, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['search', searchQuery],
    queryFn: fetchSearchData,
    enabled: !!searchQuery,
    keepPreviousData: true,
    getNextPageParam: lastPage => lastPage.lastCursor,
  });

  const isEmpty = !data?.pages[0]?.movies?.length && !isInitialLoading;

  const observerRef = useRef<HTMLDivElement>(null);

  useObserverEffect(fetchNextPage, observerRef.current, {
    rootMargin: '200px 0px',
    threshold: 1,
    isReady: hasNextPage ?? false,
  });

  return (
    <>
      <div
        className={cx(
          flex({ direction: 'column' }),
          css({
            opacity: isPreviousData ? 0.5 : 1,
            transition: 'opacity 100ms',
            pointerEvents: isPreviousData ? 'none' : 'auto',
            py: 5,
          })
        )}
      >
        <p className={css({ fontSize: { base: 'md', md: 'lg' }, mb: 3, fontWeight: 'bold' })}>검색 결과</p>
        {isEmpty && <SearchContentNoResult />}

        <ul className={grid({ columns: { base: 1, md: 4 }, columnGap: 3, rowGap: 5 })}>
          {isInitialLoading && <MovieListSkeleton length={16} />}
          {data?.pages.map((group, index) => (
            <Fragment key={index}>
              {group.movies?.map(movie => (
                <li key={movie.movieId} className="group">
                  <MovieItem movie={movie} onClick={() => dispatch(close())} />
                </li>
              ))}
            </Fragment>
          ))}
          {isFetchingNextPage && hasNextPage && <MovieListSkeleton />}

          <div id="observe-last-item" ref={observerRef} />
        </ul>
      </div>
      <div className={css({ flex: 1, w: 'full', minH: 2, bg: 'gray.800' })} />
    </>
  );
}
