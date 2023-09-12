import { FooterNavbar } from '@/components/footer/footer-navbar';
import { FooterWriteButton } from '@/components/footer/footer-write-button';
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
        zIndex: 1,
        px: 2,
        fontSize: 'lg',
        fontWeight: 'bold',

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      })}
    >
      <FooterWriteButton />
      <FooterNavbar />
    </footer>
  );
}
