import { ThreadCard } from '@/components/ThreadCard';

import { AspectRatioImage } from '@/components/base/AspectRatioImage';
import { Stack } from '@/styled-system/jsx';
import type { Thread } from '@/types/threads';

interface Props {
  threads: Thread[];
}

export function ReplyThreadList({ threads }: Props) {
  return (
    <Stack as="ol" direction="col" gap={5} className="pt-5">
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
                <Stack direction="row" gap={3}>
                  <ThreadCard.Body content={thread.content} navigateTo={`/thread/${thread.id}`} />
                  <AspectRatioImage src={thread.repImage} width={80} />
                </Stack>
                <ThreadCard.Buttons />
              </ThreadCard.Content>
            </ThreadCard.Main>
          </ThreadCard>
        </li>
      ))}
    </Stack>
  );
}
