'use client';

import { Icon, Input } from '@/components';
import { useDebouncedCallback } from '@/hooks';
import { chnage, selectMovieSearchQuery } from '@/redux/features/movie-search-query-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

import SearchContentResult from './search-content-result';

const DEBOUNCE_DELAY = 800;

export function SearchContent() {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector(selectMovieSearchQuery);
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSearchQueryChange = useDebouncedCallback((value: string) => {
    dispatch(chnage({ searchQuery: value }));
  }, DEBOUNCE_DELAY);

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleSearchQueryChange(e.target.value);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(chnage({ searchQuery: inputValue }));
    }
  };

  return (
    <Flex direction="column" bg="gray.950">
      <Input
        id="search-input"
        placeholder="영화 제목을 검색해보세요"
        value={inputValue}
        onChange={handleInputValueChange}
        onKeyDown={handleEnterKeyDown}
        inputSize="lg"
        rounded="lg"
        color="gray.500"
        leftElement={<Icon name="search" size={18} />}
        autoComplete="off"
      />

      {!!searchQuery && <SearchContentResult searchQuery={searchQuery} />}
    </Flex>
  );
}
