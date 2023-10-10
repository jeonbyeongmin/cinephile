import { cva } from '@/styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'flex',
    rounded: 'md',
    flex: 1,
    alignItems: 'center',
    p: '12px',
    cursor: 'pointer',
    _hover: {
      opacity: 0.9,
    },
    boxSizing: 'content-box',
  },
  variants: {
    provider: {
      kakao: {
        bg: '#FEE500',
        color: 'rgba(0, 0, 0, 0.85)',
        border: '1px solid #FEE500',
      },
      google: {
        bg: '#FFFFFF',
        color: 'rgba(0, 0, 0, 0.85)',
        border: '1px solid #E0E0E0',
      },
    },
  },
});
