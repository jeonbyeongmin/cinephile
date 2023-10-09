import { motion } from 'framer-motion';

import { useResizeEffect } from '@/hooks';
import { cx } from '@/styled-system/css';

import { useSwiper } from './context';
import { contentStyles } from './styles';

interface SwiperContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SwiperContent(props: SwiperContentProps) {
  const { children, className } = props;
  const { contentRef, currentX, updateMinX } = useSwiper();

  useResizeEffect(contentRef, () => updateMinX());

  return (
    <motion.ul ref={contentRef} style={{ x: currentX }} className={cx(contentStyles, className)}>
      {children}
    </motion.ul>
  );
}
