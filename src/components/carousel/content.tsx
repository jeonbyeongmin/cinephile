import { useCarousel } from '@/components/carousel/root';
import { RecipeVariantProps, cva, cx } from '@/styled-system/css';
import { motion } from 'framer-motion';

/***************************** Content **********************************/

type CarouselProps = ContentVariants & {
  children: React.ReactNode;
  className?: string;
};

export function CarouselContent({ children, className, itemsPerPage = 3 }: CarouselProps) {
  const { contentRef, minXOffset, maxXOffset, currentXOffset, controls, paginate } = useCarousel();

  return (
    <motion.ul
      style={{ x: currentXOffset }}
      dragControls={controls}
      drag={isMobile() ? 'x' : false}
      dragConstraints={{ left: minXOffset, right: maxXOffset }}
      ref={contentRef}
      className={cx(contentRecipe({ itemsPerPage: isMobile() ? 1 : 3 }), className)}
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

const contentRecipe = cva({
  base: {
    display: 'flex',
    flex: 1,
  },

  variants: {
    itemsPerPage: {
      1: {
        '& > *': {
          flex: '1 0 100%',
        },
      },
      2: {
        '& > *': {
          flex: '1 0 calc(50% - 10px)',
        },
      },
      3: {
        '& > *': {
          flex: '1 0 calc(33.3333% - 10px)',
        },
      },
      4: {
        '& > *': {
          flex: '1 0 25%',
        },
      },
      5: {
        '& > *': {
          flex: '1 0 20%',
        },
      },
    },
  },

  defaultVariants: {
    itemsPerPage: 2,
  },
});

export type ContentVariants = RecipeVariantProps<typeof contentRecipe>;
