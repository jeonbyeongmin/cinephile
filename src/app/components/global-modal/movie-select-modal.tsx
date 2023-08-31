'use client';

import { getSearchData } from '@/api/search/get-search-data';
import MovieCard from '@/components/MovieCard';
import { Button, Icon } from '@/components/base';
import { useDebounceValue } from '@/hooks/use-debounce-value';
import { close, selectModal } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Flex } from '@/styled-system/jsx';
import { Dialog, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Fragment, useCallback, useMemo, useState } from 'react';

export default function MovieSelectModal() {
  const { type, isOpen } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const show = useMemo(() => {
    return type === 'login' && isOpen;
  }, [isOpen, type]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue(searchQuery, 500);

  const { data } = useQuery({
    queryKey: ['search', debouncedSearchQuery],
    queryFn: () => getSearchData({ queries: { keyword: debouncedSearchQuery } }),
    enabled: !!debouncedSearchQuery,
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <Transition show={show} appear as={Fragment}>
      <Dialog onClose={() => dispatch(close())} as="div" className="relative z-50 text-sm md:text-base">
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Dialog.Panel className="w-full max-w-xl transform overflow-hidden md:rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
              <Flex direction="row" align="start" justify="between">
                <Flex direction="col">
                  <Dialog.Title as="h3" className="text-base md:text-lg font-bold leading-6">
                    영화 선택
                  </Dialog.Title>
                  <Dialog.Description as="p" className="text-xs md:text-sm text-gray-500">
                    글 작성을 위해 영화를 선택해주세요
                  </Dialog.Description>
                </Flex>
                <Button onClick={() => dispatch(close())} variant="ghost" className="p-1">
                  <Icon name="close" size={18} />
                </Button>
              </Flex>
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
                      <MovieCard movie={movie} />
                    </li>
                  </Link>
                ))}
              </Flex>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
