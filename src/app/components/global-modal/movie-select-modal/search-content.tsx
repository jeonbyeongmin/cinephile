'use client';

import { getSearchData } from '@/api/search/get-search-data';
import { Icon } from '@/components/base';
import { useDebounceValue } from '@/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';
import { getYear } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// TODO: 서스펜스 처리 --> 첫 로딩 시에는 지금 인기있는 영화 목록 표시, 검색 시에는 검색 결과 표시
// TODO: 키보드 처리
export default function SearchContent() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue(searchQuery, 1000);

  const { data } = useQuery({
    queryKey: ['search', debouncedSearchQuery],
    queryFn: () => getSearchData({ queries: { keyword: debouncedSearchQuery } }),
    enabled: !!debouncedSearchQuery,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Flex
        align="center"
        p={3}
        rounded="lg"
        css={{ bg: 'gray.900', border: '1px solid', borderColor: 'gray.800', _focusWithin: { outline: 'focus' } }}
      >
        <label htmlFor="search-input">
          <Icon name="search" size={18} />
        </label>
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          placeholder="영화 제목을 검색해보세요"
          className={css({ flex: 1, bg: 'gray.900', outline: 'none', color: 'gray.50', ml: 2 })}
          onChange={handleInputChange}
        />
      </Flex>
      <ul
        className={css({
          w: 'full',
          mt: 5,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          columnGap: 3,
          rowGap: 5,
        })}
      >
        {data?.movies?.map(movie => (
          <li key={movie.movieId} className="group">
            <Link href={`/write?channel=${movie.channelId}`}>
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
    </>
  );
}
