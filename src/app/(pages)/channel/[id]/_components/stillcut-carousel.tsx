'use client';

import Image from 'next/image';

import type { PlaiceImage } from '@/utils/image';

import { Icon } from '@/components';
import { iconButtonRecipe } from '@/components/icon-button/recipe';
import { Swiper } from '@/components/swiper';
import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import { useRouter } from 'next/navigation';

interface StillcutCarouselProps {
  stillcuts: PlaiceImage[];
}

export function StillcutCarousel({ stillcuts }: StillcutCarouselProps) {
  const router = useRouter();

  return (
    <Swiper className={rootStyles}>
      <Swiper.Content>
        {stillcuts.map((stillcut, index) => (
          <Swiper.Item
            key={stillcut.img.src}
            className={itemStyles}
            onClick={() =>
              router.push(`photo?src=${stillcut.img.src}&w=${stillcut.img.width}&h=${stillcut.img.height}`)
            }
          >
            <Image
              alt={`스틸컷 ${index + 1}`}
              src={stillcut.img.src}
              placeholder="blur"
              blurDataURL={stillcut.base64}
              sizes="200px"
              className={css({ objectFit: 'cover' })}
              fill
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
  aspectRatio({ ratio: 16 / 9, width: { base: 40, md: 64 } }),
  css({
    position: 'relative',
    bg: 'gray.900',
    rounded: 'md',
    overflow: 'hidden',
    marginLeft: 2,
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
