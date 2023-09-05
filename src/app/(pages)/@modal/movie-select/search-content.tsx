'use client';

import SearchContentResult from '@/app/(pages)/@modal/movie-select/search-content-result';
import SearchContentTopMovies from '@/app/(pages)/@modal/movie-select/search-content-top-movies';
import { Icon, Input } from '@/components';
import { useDebounceCallback } from '@/hooks/use-debounce-callback';
import { useState } from 'react';

const DEBOUNCE_DELAY = 800;

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
      <Input
        inputSize="lg"
        leftIcon={<Icon name="search" size={18} />}
        placeholder="영화 제목을 검색해보세요"
        rounded="lg"
        value={inputValue}
        onChange={handleInputValueChange}
        onKeyDown={handleEnterKey}
        color="gray.500"
      />
      <SearchContentResult searchQuery={searchQuery} />
      <SearchContentTopMovies />
    </>
  );
}
