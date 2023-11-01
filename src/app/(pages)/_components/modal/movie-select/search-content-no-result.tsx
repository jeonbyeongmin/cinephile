import { Icon } from '@/components/primitive';
import { css } from '@/styled-system/css';
import { center } from '@/styled-system/patterns';

export function SearchContentNoResult() {
  return (
    <div
      className={center({
        bg: 'gray.900',
        w: 'full',
        h: 'xs',
        rounded: 'md',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        color: 'gray.700',
      })}
    >
      <Icon name="alert" size={50} />
      <p className={css({ fontSize: 'lg', fontWeight: 'bold' })}>검색 결과가 없습니다.</p>
    </div>
  );
}
