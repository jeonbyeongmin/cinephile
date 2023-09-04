import { Icon } from '@/components';
import { css } from '@/styled-system/css';
import { center } from '@/styled-system/patterns';

export default function SearchContentNoResult() {
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
      })}
    >
      <Icon name="alert" size={50} className={css({ color: 'gray.700' })} />
      <p className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'gray.700' })}>검색 결과가 없습니다.</p>
    </div>
  );
}
