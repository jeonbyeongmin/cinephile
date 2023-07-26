import { ThreadCard } from '@/components/ThreadCard';
import type { Thread } from '@/types/thread';

interface Props {
  thread: Thread;
}

function MainThread({ thread }: Props): JSX.Element {
  return (
    <ThreadCard className="pt-5">
      <ThreadCard.Main>
        <ThreadCard.Avatar src={thread.author.avatar} radius="full" width={40} />
        <ThreadCard.Content>
          <ThreadCard.Head
            title={thread.author.id}
            createdAt={thread.createdAt}
            navigateTo={`/channel/${thread.channelID}`}
          />
          <ThreadCard.Body content={thread.content} />
          <ThreadCard.Buttons />
        </ThreadCard.Content>
      </ThreadCard.Main>
    </ThreadCard>
  );
}

export default MainThread;
