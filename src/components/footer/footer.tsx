import Navbar from '@/components/footer/navbar';
import { css } from '@/styled-system/css';

export function Footer() {
  return (
    <footer
      className={css({
        display: { base: 'flex', md: 'none' },
        w: 'full',
        position: 'fixed',
        bottom: 0,
        h: 16,
        borderTop: '1px solid token(colors.gray.800)',
        backgroundColor: 'grayGlass.950',
        zIndex: 3,
        px: 2,
        fontSize: 'lg',
        fontWeight: 'bold',

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      })}
    >
      <Navbar />
    </footer>
  );
}
