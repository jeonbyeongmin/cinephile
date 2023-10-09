'use client';

import { Icon } from '@/components';
import { Swiper } from '@/components/swiper';
import { swiperButtonRecipe } from '@/components/swiper/button';
import { css, cx } from '@/styled-system/css';

export function MediaCarousel() {
  return (
    <Swiper className={cx(css({ position: 'relative', px: 4, userSelect: 'none' }))}>
      <Swiper.Content>
        {Array.from({ length: 9 }).map((_, index) => (
          <Swiper.Item key={index}>{index + 1}</Swiper.Item>
        ))}
      </Swiper.Content>
      <Swiper.Button type="prev" className={swiperButtonRecipe({ type: 'prev' })}>
        <Icon name="chevronLeft" />
      </Swiper.Button>
      <Swiper.Button type="next" className={swiperButtonRecipe({ type: 'next' })}>
        <Icon name="chevronRight" />
      </Swiper.Button>
    </Swiper>
  );
}
