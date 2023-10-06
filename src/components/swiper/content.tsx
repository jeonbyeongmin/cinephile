import { useSwiper } from '@/components/swiper/context';
import { contentRecipe, type ContentVariants } from '@/components/swiper/styles';
import { cx } from '@/styled-system/css';
import { motion } from 'framer-motion';

type SwiperProps = ContentVariants & {
  children: React.ReactNode;
  className?: string;
};

export function SwiperContent(props: SwiperProps) {
  const { children, className, itemsPerPage = 3 } = props;

  const { contentRef, minXOffset, maxXOffset, currentXOffset, controls, paginate } = useSwiper();

  return (
    <motion.ul
      style={{ x: currentXOffset }}
      dragControls={controls}
      drag="x"
      dragConstraints={{ left: minXOffset, right: maxXOffset }}
      ref={contentRef}
      className={cx(contentRecipe({ itemsPerPage }), className)}
    >
      {children}
    </motion.ul>
  );
}
