import { css } from '@/styled-system/css';

export function Spinner() {
  return (
    <span
      className={css({
        display: 'inline-block',
        w: 8,
        h: 8,
        borderWidth: '4px',
        borderTopColor: 'gray.700',
        borderLeftColor: 'gray.700',
        borderRightColor: 'gray.700',
        borderBottomColor: 'yellow.300',
        borderRadius: 'full',
        boxSizing: 'border-box',
        animation: 'spin 1s linear infinite',
      })}
    />
  );
}
