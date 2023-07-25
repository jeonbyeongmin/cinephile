import { Flex } from '@/components/base';
import { ThreadAvatar } from './ThreadAvatar';
import { ThreadBody } from './ThreadBody';
import { ThreadButtons } from './ThreadButtons';
import { ThreadContent } from './ThreadContent';
import { ThreadHead } from './ThreadHead';
import { ThreadMain } from './ThreadMain';
import { ThreadRepReply } from './ThreadRepReply';

interface Props {
  children: React.ReactNode;
}

function ThreadCardWrapper({ children }: Props) {
  return (
    <Flex direction="col" gap={3} className="">
      {children}
    </Flex>
  );
}

export const ThreadCard = Object.assign(ThreadCardWrapper, {
  Avatar: ThreadAvatar,
  Head: ThreadHead,
  Body: ThreadBody,
  Buttons: ThreadButtons,
  RepReply: ThreadRepReply,
  Content: ThreadContent,
  Main: ThreadMain,
});
