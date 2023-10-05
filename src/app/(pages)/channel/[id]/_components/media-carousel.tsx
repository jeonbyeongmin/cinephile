'use client';

import * as Carousel from '@/components/carousel';
import { css } from '@/styled-system/css';

export function MediaCarousel() {
  return (
    <>
      <Carousel.Root className={css({ px: 3 })}>
        <Carousel.Button type="prev" className={css({ left: 1, rounded: 'full' })}>
          prev
        </Carousel.Button>
        <Carousel.Content>
          <Carousel.Item>1</Carousel.Item>
          <Carousel.Item>2</Carousel.Item>
          <Carousel.Item>3</Carousel.Item>
          <Carousel.Item>4</Carousel.Item>
          <Carousel.Item>5</Carousel.Item>
          <Carousel.Item>6</Carousel.Item>
          <Carousel.Item>7</Carousel.Item>
          <Carousel.Item>8</Carousel.Item>
          <Carousel.Item>9</Carousel.Item>
          <Carousel.Item>10</Carousel.Item>
          <Carousel.Item>11</Carousel.Item>
          <Carousel.Item>12</Carousel.Item>
        </Carousel.Content>
        <Carousel.Button type="next" className={css({ right: 1, rounded: 'full' })}>
          next
        </Carousel.Button>
      </Carousel.Root>
    </>
  );
}
