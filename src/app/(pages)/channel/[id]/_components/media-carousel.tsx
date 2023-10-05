'use client';

import * as Carousel from '@/components/carousel';
import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import Image from 'next/image';

export function MediaCarousel() {
  return (
    <>
      <Carousel.Root className={css({ px: 4 })}>
        <Carousel.Button type="prev" className={css({ left: 1, rounded: 'full' })}>
          prev
        </Carousel.Button>
        <Carousel.Content>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
          <Carousel.Item
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
          </Carousel.Item>
        </Carousel.Content>
        <Carousel.Button type="next" className={css({ right: 1, rounded: 'full' })}>
          next
        </Carousel.Button>
      </Carousel.Root>
    </>
  );
}
