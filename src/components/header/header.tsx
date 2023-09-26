import { cva, cx } from '@/styled-system/css';
import { Back } from './back';
import { Content } from './content';

const headerRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    w: 'full',
    position: 'sticky',
    top: 0,
    minH: 14,
    maxH: 14,
    borderBottom: '1px solid token(colors.gray.700)',
    backgroundColor: 'grayGlass.950',
    zIndex: 1,
    px: 1,

    '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
      backdropFilter: 'blur(8px)',
    },
  },
});

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

function Header({ children, className }: HeaderProps) {
  return <header className={cx(headerRecipe(), className)}>{children}</header>;
}

Header.Back = Back;
Header.Content = Content;

export { Header };
