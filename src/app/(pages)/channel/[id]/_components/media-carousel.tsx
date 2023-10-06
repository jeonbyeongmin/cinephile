'use client';

import { Swiper } from '@/components/swiper';
import { css } from '@/styled-system/css';

export function MediaCarousel() {
  // currentSlide 와 next, prev 를 외부에서 주입해는 것이 좋을듯
  return (
    <Swiper className={css({ px: 4 })}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
      <Swiper.Item>5</Swiper.Item>
      <Swiper.Item>6</Swiper.Item>
      <Swiper.Item>7</Swiper.Item>
      <Swiper.Item>8</Swiper.Item>
      <Swiper.Item>9</Swiper.Item>
    </Swiper>
  );
}
