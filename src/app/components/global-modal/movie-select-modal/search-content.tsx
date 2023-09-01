'use client';

import SearchContentResult from '@/app/components/global-modal/movie-select-modal/search-content-result';
import SearchContentTopMovies from '@/app/components/global-modal/movie-select-modal/search-content-top-movies';
import { Icon } from '@/components/base';
import { useDebounceCallback } from '@/hooks/use-debounce-callback';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

const DEBOUNCE_DELAY = 800;

// TODO: 이미지 최적화, fallback 처리
// TODO: 키보드 화살표로 이동 가능하게?
// TODO: 페이징 처리
export default function SearchContent() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputValue, setInputValue] = useState('');

  const handleSearchQueryChange = useDebounceCallback((value: string) => {
    setSearchQuery(value);
  }, DEBOUNCE_DELAY);

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleSearchQueryChange(e.target.value);
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchQuery(inputValue);
    }
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
          value={inputValue}
          placeholder="영화 제목을 검색해보세요"
          className={css({ flex: 1, bg: 'gray.900', outline: 'none', color: 'gray.50', ml: 2 })}
          onChange={handleInputValueChange}
          onKeyDown={handleEnterKey}
        />
      </Flex>
      <SearchContentResult searchQuery={searchQuery} />
      <SearchContentTopMovies />
    </>
  );
}
