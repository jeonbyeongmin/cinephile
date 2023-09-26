import { headerRecipe } from '@/components/header/recipe';
import { cx } from '@/styled-system/css';
import { Back } from './back';
import { Content } from './content';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'transparent' | 'glass';
}

function Header({ children, className, variant }: HeaderProps) {
  return <header className={cx(headerRecipe({ variant }), className)}>{children}</header>;
}

Header.Back = Back;
Header.Content = Content;

export { Header };
