import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';

export default function SearchContentTopMovies() {
  return (
    <>
      <p className={css({ fontSize: 'lg', mt: 5, mb: 3, fontWeight: 'bold' })}>인기 영화</p>
      <ul
        className={css({
          w: 'full',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          columnGap: 3,
          rowGap: 5,
        })}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index} className="group">
            <div
              className={aspectRatio({
                ratio: 11 / 16,
                position: 'relative',
                overflow: 'hidden',
                rounded: 'sm',
                bg: 'gray.800',
              })}
            />

            <Flex direction="column" mt={1} gap={1}>
              <div className={css({ w: 'full', bg: 'gray.800', h: 5, rounded: 'sm' })} />
              <div className={css({ w: 'full', bg: 'gray.800', h: 4, rounded: 'sm' })} />
            </Flex>
          </li>
        ))}
      </ul>
    </>
  );
}
