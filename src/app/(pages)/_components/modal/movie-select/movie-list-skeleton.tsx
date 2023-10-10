import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';

interface Props {
  length?: number;
}

export function MovieListSkeleton({ length = 8 }: Props) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <li
          key={index}
          className={cx(
            css({
              base: { display: 'grid', gridTemplateColumns: '1fr 4fr', columnGap: 3, alignItems: 'center' },
              md: { display: 'flex', flexDirection: 'column', alignItems: 'initial', gap: 1 },
            }),
            'group'
          )}
        >
          <div
            className={aspectRatio({
              ratio: 11 / 16,
              position: 'relative',
              overflow: 'hidden',
              rounded: 'sm',
              animation: 'pulse 2s infinite',
              bg: 'gray.800',
            })}
          />

          <Flex direction="column" mt={1} gap={1}>
            <div className={css({ w: 'full', animation: 'pulse 2s infinite', bg: 'gray.800', h: 5, rounded: 'sm' })} />
            <div className={css({ w: 'full', animation: 'pulse 2s infinite', bg: 'gray.800', h: 4, rounded: 'sm' })} />
          </Flex>
        </li>
      ))}
    </>
  );
}
