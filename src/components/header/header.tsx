import { cva } from '@/styled-system/css';
import { cp } from '@/styled-system/jsx';

const headerRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    w: 'full',
    gap: 2,
    position: 'sticky',
    top: 0,
    minH: 14,
    maxH: 14,
    borderBottom: '1px solid token(colors.gray.700)',
    backgroundColor: 'grayGlass.950',
    zIndex: 1,
    px: 3,
    fontSize: 'lg',
    fontWeight: 'bold',

    '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
      backdropFilter: 'blur(8px)',
    },
  },
});

export const Header = cp('header', headerRecipe);
