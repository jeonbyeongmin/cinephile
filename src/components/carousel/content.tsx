import { cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselContent({ children, className }: CarouselProps) {
  return <ul className={cx(flex({ flex: '1 1 500px' }), className)}>{children}</ul>;
}
