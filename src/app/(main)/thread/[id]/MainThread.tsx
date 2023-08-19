import { ThreadCard } from '@/components/ThreadCard';
import type { Thread } from '@/types/threads';

interface Props {
  thread: Thread;
}

async function MainThread({ thread }: Props): Promise<JSX.Element> {
  return (
    <ThreadCard className="pt-5">
      <ThreadCard.Main>
        <ThreadCard.Avatar src={thread.author.image} radius="full" width={40} />
        <ThreadCard.Content>
          <ThreadCard.Head
            title={thread.author.name}
            createdAt={thread.createdAt}
            navigateTo={`/channel/${thread.channel.id}`}
          />
          <ThreadCard.Body content={thread.content} />
          <ThreadCard.Buttons />
        </ThreadCard.Content>
      </ThreadCard.Main>
    </ThreadCard>
  );
}

export default MainThread;
