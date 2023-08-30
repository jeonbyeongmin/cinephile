'use client';

import { Avatar } from '@/components/base';
import { Flex } from '@/styled-system/jsx';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';

interface AccountMenuProps {
  trigger: React.ReactNode;
  position?: 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom';
}

const positionMap = {
  leftTop: '-translate-y-full right-0 -mt-2 top-0 origin-bottom-right',
  rightTop: '-translate-y-full left-0 -mt-2 top-0 origin-bottom-left',
  leftBottom: 'right-0 mt-2 origin-top-right',
  rightBottom: 'left-0 mt-2 origin-top-left',
};

export function AccountMenu({ trigger, position = 'rightTop' }: AccountMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={Fragment}>{trigger}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            'absolute w-56  divide-y divide-gray-600 rounded-lg bg-gray-800 focus:outline-none',
            positionMap[position]
          )}
        >
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <Flex align="center" gap={2} className={classNames(active ? 'bg-gray-700 text-white' : '', 'p-3')}>
                  <Avatar size="md" />
                  <Flex direction="col">
                    <p className="text-sm font-medium text-white">전병민</p>
                    <p className="text-xs font-normal text-gray-400">qudals7613@gmail.com</p>
                  </Flex>
                </Flex>
              )}
            </Menu.Item>
          </div>
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-gray-700 text-white' : ''} group flex w-full items-center p-3 text-sm`}
                >
                  내 스레드
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-gray-700 text-white' : ''} group flex w-full items-center p-3 text-sm`}
                >
                  내 답변
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-gray-700 text-white' : ''} group flex w-full items-center p-3 text-sm`}
                >
                  좋아요 표시한 스레드
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-gray-700 text-white' : ''} group flex w-full items-center p-3 text-sm`}
                >
                  로그아웃
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
