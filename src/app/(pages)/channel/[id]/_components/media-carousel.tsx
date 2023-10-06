'use client';

import * as Swiper from '@/components/swiper';
import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import Image from 'next/image';

export function MediaCarousel() {
  // currentSlide 와 next, prev 를 외부에서 주입해는 것이 좋을듯
  return (
    <>
      <Swiper.Root className={css({ px: 4 })}>
        <Swiper.Button type="prev" className={css({ left: 1, rounded: 'full' })}>
          prev
        </Swiper.Button>
        <Swiper.Content>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
          <Swiper.Item
            className={cx(
              aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
              css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
            )}
          >
            <Image
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
              alt="스틸 컷"
              className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }))}
              sizes="300px"
              fill
            />
          </Swiper.Item>
        </Swiper.Content>
        <Swiper.Button type="next" className={css({ right: 1, rounded: 'full' })}>
          next
        </Swiper.Button>
      </Swiper.Root>
    </>
  );
}
