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
        zIndex: 1,
        backgroundColor: 'grayGlass.950',

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      })}
      gap={2}
      px={4}
    >
      <p className={css({ fontSize: 'lg', fontWeight: 'bold' })}>홈</p>
    </Flex>
  );
}
