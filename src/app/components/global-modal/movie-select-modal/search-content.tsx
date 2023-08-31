'use client';

import { getSearchData } from '@/api/search/get-search-data';
import { Icon } from '@/components/base';
import { useDebounceValue } from '@/hooks';
import { Flex } from '@/styled-system/jsx';
import { getYear } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// TODO: 서치바, 영화 목록 스타일링
// TODO: 서스펜스 처리 --> 첫 로딩 시에는 지금 인기있는 영화 목록 표시, 검색 시에는 검색 결과 표시
// TODO: 검색 전에는 지금 인기있는 영화 목록 가져오기 --> 백엔드 작업 필요
// TODO: 검색 후에는 검색 결과 목록을 페이징 처리해서 가져오기 --> 백엔드 작업 필요
// TODO: 화살표로 포커싱 이동, 엔터로 선택
export default function SearchContent() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue(searchQuery, 500);

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
      <div className="mt-5 relative">
        <label htmlFor="search-input">
          <Icon name="search" size={18} className="absolute left-3 top-3 text-gray-500" />
        </label>
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          placeholder="영화 제목, 출연 배우, 감독 이름으로 검색해보세요"
          className="w-full pl-10 rounded-md bg-gray-800 border-gray-700 border p-2"
          onChange={handleInputChange}
        />
      </div>
      <Flex direction="col" className="mt-5">
        {data?.movies?.map(movie => (
          <Link key={movie.movieId} href={`/write?channel=${movie.channelId}`}>
            <li className="mb-2">
              <Flex className="rounded-lg cursor-pointer hover:bg-gray-800">
                <Image src={movie.posterPath} alt={movie.krTitle} className="object-cover" sizes="100px" fill />
                <Flex direction="col" justify="center" className="w-full last-of-type:border-b border-gray-800">
                  <p className="text-base md:text-lg font-bold">{movie.krTitle}</p>
                  <p className="text-sm md:text-base text-gray-400">{getYear(movie.releaseDate)}</p>
                </Flex>
              </Flex>
            </li>
          </Link>
        ))}
      </Flex>
    </>
  );
}
