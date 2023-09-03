import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export function HomeHeader() {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={css({
        h: 16,
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.800',
        position: 'sticky',
        top: 0,
        w: 'full',
        bg: 'gray.950',
        zIndex: 1,
      })}
      gap={2}
      p={2}
    >
      <p className={css({ fontSize: 'lg', fontWeight: 'bold' })}>홈</p>
    </Flex>
  );
}
