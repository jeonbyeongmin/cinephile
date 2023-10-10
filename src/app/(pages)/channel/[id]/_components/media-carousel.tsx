'use client';

import { Icon } from '@/components';
import { iconButtonRecipe } from '@/components/icon-button/recipe';
import { Swiper } from '@/components/swiper';
import { css, cx } from '@/styled-system/css';

export function MediaCarousel() {
  return (
    <Swiper className={rootStyles}>
      <Swiper.Content>
        {Array.from({ length: 9 }).map((_, index) => (
          <Swiper.Item key={index} className={itemStyles}>
            {index + 1}
          </Swiper.Item>
        ))}
      </Swiper.Content>
      <Swiper.Button type="prev" className={prevButtonStyles}>
        <Icon name="chevronLeft" size={18} />
      </Swiper.Button>
      <Swiper.Button type="next" className={nextButtonStyles}>
        <Icon name="chevronRight" size={18} />
      </Swiper.Button>
    </Swiper>
  );
}

const rootStyles = css({
  position: 'relative',
  px: 4,
  userSelect: 'none',
});

const itemStyles = css({
  width: 48,
  height: 24,
  bg: 'gray.900',
  rounded: 'md',
  marginLeft: 1,
});

const prevButtonStyles = cx(
  iconButtonRecipe({
    variant: 'outline',
    size: 'sm',
  }),
  css({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 1,
    rounded: 'full',
  })
);

const nextButtonStyles = cx(
  iconButtonRecipe({
    variant: 'outline',
    size: 'sm',
  }),
  css({
    position: 'absolute',
    right: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    rounded: 'full',
  })
);
