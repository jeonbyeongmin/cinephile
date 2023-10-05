import { useCarousel } from '@/components/carousel/root';
import { cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { motion } from 'framer-motion';

/***************************** Content **********************************/

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselContent({ children, className }: CarouselProps) {
  const { contentRef, minXOffset, maxXOffset, currentXOffset, controls, paginate } = useCarousel();

  return (
    <motion.ul
      style={{ x: currentXOffset }}
      dragControls={controls}
      drag={isMobile() ? 'x' : false}
      dragConstraints={{ left: minXOffset, right: maxXOffset }}
      ref={contentRef}
      className={cx(contentStyles, className)}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      {children}
    </motion.ul>
  );
}

/***************************** Helpers **********************************/

function isMobile() {
  return window.innerWidth <= 768;
}

const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

/***************************** Base Styles **********************************/

const contentStyles = flex({
  flex: '1 1 500px',
});
