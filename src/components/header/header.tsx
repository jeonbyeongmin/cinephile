import { cva } from '@/styled-system/css';
import { cp } from '@/styled-system/jsx';

const headerRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    position: 'sticky',
    top: 0,
    minH: 16,
    maxH: 16,
    borderBottomWidth: '1px',
    borderBottomColor: 'gray.800',
    backgroundColor: 'grayGlass.950',
    zIndex: 1,
    px: 2,
    fontSize: 'lg',
    fontWeight: 'bold',

    '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
      backdropFilter: 'blur(8px)',
    },
  },
});

export const Header = cp('header', headerRecipe);
