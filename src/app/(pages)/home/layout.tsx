import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" className={css({ pb: 28 })}>
      {children}
    </Flex>
  );
}
