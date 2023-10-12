import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

interface ChannelLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function ChannelLayout({ children, modal }: ChannelLayoutProps) {
  return (
    <Flex direction="column" className={css({ pb: 28 })}>
      {children}
      {modal}
    </Flex>
  );
}
