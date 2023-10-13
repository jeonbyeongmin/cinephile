'use client';

import Image from 'next/image';

import type { Trailer } from '@/types/movies';

import { Icon } from '@/components';
import { iconButtonRecipe } from '@/components/icon-button/recipe';
import { Swiper } from '@/components/swiper';
import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import { useRouter } from 'next/navigation';

interface TrailerCarouselProps {
  trailers: Trailer[];
}

export function TrailerCarousel({ trailers }: TrailerCarouselProps) {
  const router = useRouter();

  return (
    <Swiper className={rootStyles}>
      <Swiper.Content>
        {trailers.map((trailer, index) => (
          <Swiper.Item
            key={trailer.key}
            className={css({ position: 'relative', cursor: 'pointer', marginLeft: 2 })}
            onClick={() => router.push(`video?src=${trailer.url}`)}
          >
            <div className={itemStyles}>
              <Image
                alt={`트레일러 ${index + 1}`}
                src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                sizes="(min-width: 768px) 20vw, 40vw"
                fill
              />
            </div>
            <Icon
              name="play"
              size={30}
              className={css({
                position: 'absolute',
                inset: 0,
                margin: 'auto',
              })}
            />
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

const itemStyles = cx(
  aspectRatio({ ratio: 16 / 9, width: { base: 36, md: 56 } }),
  css({
    bg: 'gray.900',
    rounded: 'md',
    overflow: 'hidden',
  })
);

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
    visibility: { base: 'hidden', md: 'visible' },
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
    visibility: { base: 'hidden', md: 'visible' },
  })
);
