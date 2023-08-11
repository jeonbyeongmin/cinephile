'use client';

import MovieCard from '@/components/MovieCard';
import { Button, Flex, Icon } from '@/components/base';
import { Movie } from '@/types/movie';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const movie: Movie = {
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
};

export default function MovieSelectModal({ isOpen, closeModal }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                <Flex direction="row" align="center" justify="between">
                  <Dialog.Title as="h3" className="text-lg font-bold leading-6">
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
                  <li className="w-full">
                    <MovieCard movie={movie} />
                  </li>

                  <li className="w-full">
                    <MovieCard movie={movie} />
                  </li>
                  <li className="w-full">
                    <MovieCard movie={movie} />
                  </li>
                </Flex>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
