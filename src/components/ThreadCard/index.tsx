import { ThreadAvatar } from './ThreadAvatar';
import { ThreadHead } from './ThreadHead';
import { ThreadBody } from './ThreadBody';
import { ThreadButtons } from './ThreadButtons';
import { ThreadRepReply } from './ThreadRepReply';
import { ThreadContent } from './ThreadContent';
import { ThreadMain } from './ThreadMain';

interface Props {
  children: React.ReactNode;
}

function ThreadCardWrapper({ children }: Props) {
  return <div>{children}</div>;
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
