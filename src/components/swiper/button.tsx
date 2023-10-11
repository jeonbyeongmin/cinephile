import { useSwiper } from '@/components/swiper/context';
import { motion, useTransform } from 'framer-motion';

interface SwiperButtonProps {
  children?: React.ReactNode;
  className?: string;
  type: 'prev' | 'next';
}

export function SwiperButton({ children, className, type }: SwiperButtonProps) {
  const { paginate, isAnimating, currentX, minX } = useSwiper();

  const opacity = useTransform(currentX, latestX => {
    if (type === 'prev') {
      return latestX >= 0 ? 0 : 1;
    } else {
      return latestX <= minX ? 0 : 1;
    }
  });

  return (
    <motion.button
      style={{ opacity }}
      onClick={() => paginate(type === 'prev' ? -1 : 1)}
      className={className}
      disabled={isAnimating}
    >
      {children}
    </motion.button>
  );
}
