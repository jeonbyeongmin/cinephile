'use client';

import { createThread } from '@/api/threads/create-thread';
import { WriteHeader } from '@/app/(pages)/write/components/header';
import { WriteEditor } from '@/app/(pages)/write/components/write-editor';

import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface WritePageMainProps {
  channelId: string;
  title: string;
  poster: string;
}

export function WriteMain({ channelId, title, poster }: WritePageMainProps) {
  const router = useRouter();
  const [content, setContent] = useState('');

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const mutation = useMutation({
    mutationFn: () => createThread({ data: { content, channelId: Number(channelId), isExposed: true } }),
    onSuccess: () => {
      router.push(`/home`);
    },
  });

  return (
    <Flex direction="column" className={css({ minH: 0, h: 'full', flex: 1, w: 'full' })}>
      <WriteHeader title={title} poster={poster} handlePublishButtonClick={mutation.mutate} />
      <WriteEditor content={content} handleContentChange={handleContentChange} />
    </Flex>
  );
}
