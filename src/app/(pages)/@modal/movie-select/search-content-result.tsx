'use client';

import { getSearchData } from '@/api/search/get-search-data';
import MoviesSkeleton from '@/app/(pages)/@modal/movie-select/movies-skeleton';
import SearchContentNoResult from '@/app/(pages)/@modal/movie-select/search-content-no-result';
import { Link } from '@/components';
import { useObserverEffect } from '@/hooks';
import { close } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';
import { getYear } from '@/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
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

  const isEmpty = !data?.pages?.length && !!searchQuery && !isInitialLoading;
  const isSearching = searchQuery !== '' || isPreviousData;

  const observerRef = useRef<HTMLDivElement>(null);

  useObserverEffect(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('fetchNextPage');

          fetchNextPage();
        }
      });
    },
    observerRef.current,
    { rootMargin: '200px 0px', threshold: 1, isReady: !!data }
  );

  if (!isSearching) {
    return null;
  }

  return (
    <Flex
      direction="column"
      className={css({
        opacity: isPreviousData ? 0.5 : 1,
        transition: 'opacity 100ms',
        pointerEvents: isPreviousData ? 'none' : 'auto',
      })}
      py={5}
    >
      <p className={css({ fontSize: 'lg', mb: 3, fontWeight: 'bold' })}>검색 결과</p>
      {isEmpty && <SearchContentNoResult />}

      <ul
        className={css({
          w: 'full',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          columnGap: 3,
          rowGap: 5,
          mb: 3,
        })}
      >
        {isInitialLoading && <MoviesSkeleton length={16} />}
        {data?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.movies?.map(movie => (
              <li key={movie.movieId} className="group">
                <Link href={`/write?channel=${movie.channelId}`} onClick={() => dispatch(close())}>
                  <div
                    className={aspectRatio({
                      ratio: 11 / 16,
                      position: 'relative',
                      overflow: 'hidden',
                      rounded: 'sm',
                      mb: 2,
                    })}
                  >
                    <Image
                      src={movie.posterPath}
                      alt={movie.krTitle}
                      className={css({
                        objectFit: 'cover',
                        position: 'absolute',
                        bg: 'gray.800',
                        _groupHover: { transform: 'scale(1.05)' },
                        transition: 'all 150ms ease-in-out',
                      })}
                      sizes="100px"
                      fill
                    />
                  </div>

                  <p className={css({ fontSize: 'sm', lineClamp: 1 })} title={movie.krTitle}>
                    {movie.krTitle}
                  </p>
                  <Flex
                    align="center"
                    gap={1}
                    className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}
                  >
                    <span className={css({ fontSize: 'xs', color: 'gray.400' })}>{getYear(movie.releaseDate)}</span>
                    <span>&#183;</span>
                    <span className={css({ fontSize: 'xs', color: 'gray.400', lineClamp: 1 })}>
                      {movie.genres.map(genre => genre.genreName).join(', ')}
                    </span>
                  </Flex>
                </Link>
              </li>
            ))}
          </Fragment>
        ))}
        {isFetchingNextPage && hasNextPage && <MoviesSkeleton />}

        <div id="observe-last-item" ref={observerRef} className={css({ position: 'none' })} />
      </ul>
    </Flex>
  );
}
