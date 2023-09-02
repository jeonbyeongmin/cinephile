'use client';

import { createThread } from '@/api/threads/create-thread';
import { WriteHeader } from '@/app/(pages)/write/components/header';
import { WriteEditor } from '@/app/(pages)/write/components/write-editor';

import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

interface WritePageMainProps {
  channelId: string;
  title: string;
  poster: string;
}

export function WriteMain({ channelId, title, poster }: WritePageMainProps) {
  const [content, setContent] = useState('');

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handlePublishButtonClick = async () => {
    if (!channelId) return;

    try {
      const data = await createThread({
        data: {
          content,
          channel: {
            channelId: Number(channelId),
          },
        },
      });
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex direction="column" className={css({ minH: 0, h: 'full', flex: 1, w: 'full' })}>
      <WriteHeader title={title} poster={poster} handlePublishButtonClick={handlePublishButtonClick} />
      <WriteEditor content={content} handleContentChange={handleContentChange} />
    </Flex>
  );
}
