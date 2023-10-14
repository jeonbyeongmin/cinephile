import { useSwiper } from '@/components/swiper/context';
import { motion, useTransform } from 'framer-motion';

interface SwiperButtonProps {
  children?: React.ReactNode;
  className?: string;
  type: 'prev' | 'next';
}

export function SwiperButton({ children, className, type }: SwiperButtonProps) {
  const { paginate, isAnimating, currentX, minX } = useSwiper();

  const visibility = useTransform(currentX, latestX => {
    if (type === 'prev') {
      return latestX >= 0 ? 'hidden' : 'visible';
    } else {
      return latestX <= minX ? 'hidden' : 'visible';
    }
  });

  return (
    <motion.button
      style={{ visibility }}
      onClick={() => paginate(type === 'prev' ? -1 : 1)}
      className={className}
      disabled={isAnimating}
    >
      {children}
    </motion.button>
  );
}
