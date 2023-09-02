'use client';

import { createThread } from '@/api/threads/create-thread';
import { WriteHeader } from '@/app/(pages)/write/components/header';

import WriteEditor from '@/app/(pages)/write/components/write-editor';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

const sample = `
  <p>안녕하세요. 이 문장은 평문입니다.</p>
  <p><strike>안녕하세요. 이 문장은 취소선이 적용된 모습입니다.</strike></p>
  <p><em>안녕하세요. 이 문장은 기울림체가 적용된 모습입니다.</em></p>
  <p><strong>안녕하세요. 이 문장은 볼드체가 적용된 모습입니다.</strong></p>
  <hr>
  <ol>
    <li>안녕하세요. 숫자형 리스트 첫 번째 문장입니다.</li>
    <li>안녕하세요. 숫자형 리스트 두 번째 문장입니다.</li>
    <li>안녕하세요. 숫자형 리스트 세 번째 문장입니다.</li>
  </ol>
  <ul>
    <li>안녕하세요. 불릿형 리스트 첫 번째 문장입니다.</li>
    <li>안녕하세요. 불릿형 리스트 두 번째 문장입니다.</li>
    <li>안녕하세요. 불릿형 리스트 세 번째 문장입니다.</li>
  </ul>
  <p>안녕하세요. 이 문장은 평문입니다.</p>
  <p><strike>안녕하세요. 이 문장은 취소선이 적용된 모습입니다.</strike></p>
  <p><em>안녕하세요. 이 문장은 기울림체가 적용된 모습입니다.</em></p>
  <p><strong>안녕하세요. 이 문장은 볼드체가 적용된 모습입니다.</strong></p>
  <blockquote><p>안녕하세요. 여기는 인용구(blockquote) 입니다.</p><p>커스텀 인용 컴포넌트와는 다릅니다.</p><p>안녕하세요. 이 문장은 평문입니다.</p><p><s>안녕하세요. 이 문장은 취소선이 적용된 모습입니다.</s></p><p><em>안녕하세요. 이 문장은 기울림체가 적용된 모습입니다.</em></p><p><strong>안녕하세요. 이 문장은 볼드체가 적용된 모습입니다.</strong></p></blockquote>
`;

interface WritePageMainProps {
  channelId: string;
  title: string;
  poster: string;
}

export function WriteMain({ channelId, title, poster }: WritePageMainProps) {
  const [content, setContent] = useState(sample);

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
