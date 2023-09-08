import { Header } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className={css({ flex: 1, w: 'full', h: 'full' })}>
      <div className={css({ flex: 1, w: 'full', h: 'full' })}>
        <Flex direction="column">
          <Header>홈</Header>
          {children}
        </Flex>
      </div>
      <div
        className={css({
          minW: 360,
          h: 'full',
          display: 'none',
          lg: {
            display: 'block',
          },
        })}
      ></div>
    </Flex>
  );
}
