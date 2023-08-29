'use client';

import { Button, Flex, Icon, Logo, Text } from '@/components/base';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function LoginModal({ isOpen, closeModal }: Props) {
  const ref = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal} autoFocus={false} initialFocus={ref}>
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
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex flex-col max-w-xl transform overflow-hidden rounded-2xl bg-gray-950 p-6 text-left align-middle shadow-xl transition-all">
                <Button onClick={closeModal} variant="ghost" className="p-1 self-end">
                  <Icon name="close" size={18} />
                </Button>

                <Flex direction="col" align="center">
                  <Logo width={300} height={80} />
                  <Text className="text-gray-500">로그인을 해서 토론을 시작하세요!</Text>
                </Flex>

                <Flex gap={2} className="m-5">
                  <Button
                    variant="solid"
                    radius="md"
                    className="p-3 w-full bg-gray-800 hover:bg-gray-700"
                    onClick={() => {
                      window.location.href = '/api/auth/google';
                    }}
                  >
                    <Flex align="center" justify="center" gap={2}>
                      <Icon name="google" size={18} />
                      <Text>구글로 로그인</Text>
                    </Flex>
                  </Button>

                  <Button
                    variant="solid"
                    radius="md"
                    className="p-3 w-full bg-gray-800 hover:bg-gray-700"
                    onClick={() => {
                      window.location.href = '/api/auth/kakao';
                    }}
                  >
                    <Flex align="center" justify="center" gap={2}>
                      <Icon name="kakao" size={18} />
                      <Text>카카오로 로그인</Text>
                    </Flex>
                  </Button>
                </Flex>

                <Text className="text-gray-500 text-sm text-center mb-4">
                  로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며, <br /> 서비스 이용을 위해
                  이메일과 이름, 프로필 이미지를 수집합니다.
                </Text>
                <Text className="text-gray-500 text-sm"></Text>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
