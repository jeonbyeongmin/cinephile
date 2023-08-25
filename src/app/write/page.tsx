'use client';

import { getChannel } from '@/api/channels/get-channel';
import { createThread } from '@/api/threads/create-thread';
import Editor from '@/components/Editor';
import { Button, Flex, Icon, Text } from '@/components/base';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
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

export default function WritePage() {
  const [content, setContent] = useState(sample);
  console.log('🚀 ~ file: page.tsx:38 ~ WritePage ~ content:', content);
  const channelId = useSearchParams().get('channel');

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handlePublishButtonClick = async () => {
    if (!channelId) return;

    try {
      const data = await createThread({ data: { content, channelId: Number(channelId) } });
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ['channel', channelId],
    queryFn: () => getChannel({ queries: { id: Number(channelId) } }),
  });

  return (
    <Flex direction="col" className="w-full h-full relative">
      <Flex direction="col" className="min-h-0 flex-1 w-full">
        <Flex className="border-b h-[4rem] border-gray-700 w-full py-3 px-1" align="center" gap={2}>
          <Button variant="ghost" radius="full" className="p-2">
            <Icon name="arrowLeft" fill="none" size={18} />
          </Button>
          <Text weight="bold" size="lg" lineClamp={1} className="flex-1">
            애브리씽 애브리웨어 올 앳 원스
          </Text>
          <Button variant="ghost" radius="full" className="p-2">
            <Icon name="change" fill="none" size={18} />
          </Button>
        </Flex>

        <Editor content={content} handleContentChange={handleContentChange} />
      </Flex>
      <Flex className="border-t bg-gray-950 border-gray-700 w-full h-[4rem] p-3" align="center" justify="end" gap={2}>
        <Button variant="ghost" radius="lg" className="w-20 h-full">
          임시저장
        </Button>
        <Button variant="solid" radius="lg" className="w-20 h-full" onClick={handlePublishButtonClick}>
          발행하기
        </Button>
      </Flex>
    </Flex>
  );
}
