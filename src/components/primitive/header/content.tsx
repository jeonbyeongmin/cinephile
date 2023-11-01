import { HeaderContentVariants, headerContentRecipe } from '@/components/primitive/header/header.styles';
import { cx } from '@/styled-system/css';

type ContentProps = HeaderContentVariants & {
  children: React.ReactNode;
  className?: string;
};

export function Content({ children, className, show }: ContentProps) {
  return <div className={cx(headerContentRecipe({ show }), className)}>{children}</div>;
}
