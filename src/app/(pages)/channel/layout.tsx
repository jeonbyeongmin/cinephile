import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

interface ChannelLayoutProps {
  children: React.ReactNode;
}

export default function ChannelLayout({ children }: ChannelLayoutProps) {
  return (
    <Flex direction="column" className={css({ pb: 28 })}>
      {children}
    </Flex>
  );
}
