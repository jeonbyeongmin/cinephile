'use client';

import { getSearchData } from '@/api/search/get-search-data';
import SearchContentNoResult from '@/app/(pages)/@modal/movie-select/search-content-no-result';
import SearchContentSkeletonResult from '@/app/(pages)/@modal/movie-select/search-content-skeleton-result';
import { toggle } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';
import { getYear } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

interface SearchContentResultProps {
  searchQuery: string;
}

export default function SearchContentResult({ searchQuery }: SearchContentResultProps) {
  const dispatch = useAppDispatch();

  const { data, isInitialLoading, isPreviousData } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => getSearchData({ queries: { keyword: searchQuery } }),
    enabled: !!searchQuery,
    keepPreviousData: !!searchQuery,
  });

  const isEmpty = useMemo(() => {
    return !data?.movies?.length && !!searchQuery && !isInitialLoading;
  }, [data?.movies?.length, isInitialLoading, searchQuery]);

  const isSearching = useMemo(() => {
    return searchQuery !== '' || isPreviousData;
  }, [isPreviousData, searchQuery]);

  if (!isSearching) {
    return null;
  }

  return (
    <div
      className={css({
        opacity: isPreviousData ? 0.5 : 1,
        transition: 'opacity 100ms',
        pointerEvents: isPreviousData ? 'none' : 'auto',
      })}
    >
      <p className={css({ fontSize: 'lg', mt: 5, mb: 3, fontWeight: 'bold' })}>검색 결과</p>
      {isEmpty && <SearchContentNoResult />}
      {isInitialLoading && <SearchContentSkeletonResult />}
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
        {data?.movies?.map(movie => (
          <li key={movie.movieId} className="group">
            <Link href={`/write?channel=${movie.channelId}`} onClick={() => dispatch(toggle({ type: 'movieSelect' }))}>
              <div
                className={aspectRatio({
                  ratio: 11 / 16,
                  position: 'relative',
                  overflow: 'hidden',
                  rounded: 'sm',
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
              <Flex direction="column" mt={1}>
                <p className={css({ fontSize: 'sm', lineClamp: 1 })} title={movie.krTitle}>
                  {movie.krTitle}
                </p>
                <p className={css({ fontSize: 'xs', color: 'gray.400' })}>{getYear(movie.releaseDate)}</p>
              </Flex>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
