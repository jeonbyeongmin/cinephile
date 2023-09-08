import { css } from '@/styled-system/css';

export default function Footer() {
  return (
    <footer
      className={css({
        display: { base: 'flex', md: 'none' },
        alignItems: 'center',
        gap: 1,
        w: 'full',
        position: 'fixed',
        bottom: 0,
        minH: 16,
        maxH: 16,
        borderTopWidth: '1px',
        borderTopColor: 'gray.800',
        backgroundColor: 'grayGlass.950',
        zIndex: 1,
        px: 2,
        fontSize: 'lg',
        fontWeight: 'bold',

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      })}
    ></footer>
  );
}
