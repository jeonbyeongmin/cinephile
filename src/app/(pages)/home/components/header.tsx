import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export function HomeHeader() {
  return (
    <Flex
      align="center"
      justify="space-between"
      gap={2}
      className={css({
        position: 'sticky',
        top: 0,
        h: 16,
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.800',
        backgroundColor: 'grayGlass.950',
        zIndex: 1,
        px: 4,

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      })}
    >
      <p className={css({ fontSize: 'lg', fontWeight: 'bold' })}>홈</p>
    </Flex>
  );
}
