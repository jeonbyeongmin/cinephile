import { ThreadCard } from '@/components/ThreadCard';
import { Flex } from '@/components/base';
import { AspectRatioImage } from '@/components/base/AspectRatioImage';
import type { Thread } from '@/types/thread';

interface Props {
  threads: Thread[];
}

export function ReplyThreadList({ threads }: Props) {
  return (
    <Flex as="ol" direction="col" gap={5} className="pt-5">
      {threads.map(thread => (
        <li key={thread.id}>
          <ThreadCard>
            <ThreadCard.Main>
              <ThreadCard.Avatar src={thread.author.avatar} radius="full" width={40} />
              <ThreadCard.Content>
                <ThreadCard.Head
                  title={thread.author.id}
                  createdAt={thread.createdAt}
                  navigateTo={`/channel/${thread.channelID}`}
                />
                <Flex direction="row" gap={3}>
                  <ThreadCard.Body content={thread.content} navigateTo={`/thread/${thread.id}`} />
                  <AspectRatioImage src={thread.repImage} width={80} />
                </Flex>
                <ThreadCard.Buttons />
              </ThreadCard.Content>
            </ThreadCard.Main>
          </ThreadCard>
        </li>
      ))}
    </Flex>
  );
}
