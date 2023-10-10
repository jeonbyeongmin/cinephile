import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default function WriteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className={css({ flex: 1, h: 'full' })}>
      <div className={css({ flex: 1, h: 'full' })}>{children}</div>
    </Flex>
  );
}
