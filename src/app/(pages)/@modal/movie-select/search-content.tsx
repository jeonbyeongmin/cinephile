'use client';

import SearchContentResult from '@/app/(pages)/@modal/movie-select/search-content-result';
import { Icon, Input } from '@/components';
import { useDebounceCallback } from '@/hooks/use-debounce-callback';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

const DEBOUNCE_DELAY = 800;

export function SearchContent() {
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
    <Flex direction="column" bg="gray.950">
      <Input
        id="search-input"
        placeholder="영화 제목을 검색해보세요"
        value={inputValue}
        onChange={handleInputValueChange}
        onKeyDown={handleEnterKey}
        inputSize="lg"
        rounded="lg"
        color="gray.500"
        leftElement={<Icon name="search" size={18} />}
        autoComplete="off"
      />
      <SearchContentResult searchQuery={searchQuery} />
    </Flex>
  );
}
