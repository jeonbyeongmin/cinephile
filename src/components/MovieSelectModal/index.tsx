'use client';

import MovieCard from '@/components/MovieCard';
import { Button, Flex, Icon } from '@/components/base';
import { Movie } from '@/types/movies';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const movieList: Movie[] = [
  {
    id: '1',
    title: '쇼생크 탈출',
    poster: 'https://yts.mx/assets/images/movies/the_shawshank_redemption_1994/medium-cover.jpg',
    originalTitle: 'The Shawshank Redemption',
    overview: `쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 
               쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 
               쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 
               쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리`,
    releaseDate: '1994-09-23',
    channelID: 'c1',
  },
  {
    id: '2',
    title: '쇼생크 탈출',
    poster: 'https://yts.mx/assets/images/movies/the_shawshank_redemption_1994/medium-cover.jpg',
    originalTitle: 'The Shawshank Redemption',
    overview: `쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리`,
    releaseDate: '1994-09-23',
    channelID: 'c2',
  },
  {
    id: '3',
    title: '쇼생크 탈출',
    poster: 'https://yts.mx/assets/images/movies/the_shawshank_redemption_1994/medium-cover.jpg',
    originalTitle: 'The Shawshank Redemption',
    overview: `쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리`,
    releaseDate: '1994-09-23',
    channelID: 'c3',
  },
];

export default function MovieSelectModal({ isOpen, closeModal }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={closeModal} className="relative z-50 text-sm md:text-base">
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Dialog.Panel className="w-full max-w-xl transform overflow-hidden md:rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
              <Flex direction="row" align="center" justify="between">
                <Dialog.Title as="h3" className="text-base md:text-lg font-bold leading-6">
                  영화 선택
                </Dialog.Title>
                <Button onClick={closeModal} variant="ghost" className="p-1 self-end">
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
                  placeholder="영화 제목, 출연 배우, 감독 이름으로 검색해보세요"
                  className="w-full pl-10 rounded-md bg-gray-800 border-gray-700 border p-2"
                />
              </div>
              <Flex as="ul" direction="col" className="mt-5">
                {movieList.map(movie => (
                  <Link key={movie.id} href={`/write?id=${movie.channelID}`}>
                    <li key={movie.id} className="mb-2" onClick={closeModal}>
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
