import { css, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export const contentStyles = cx(
  flex({ direction: 'row', wrap: 'nowrap' }),
  css({
    '& > *': { flex: '1 0 calc(50% - 5px)' },
  })
);

export const itemStyels = cx(
  flex({ align: 'center', justify: 'center' }),
  css({
    bg: 'gray.800',
    rounded: 'md',
    marginLeft: '10px',
    height: '150px',

    '&:first-child': {
      marginLeft: 0,
    },
  })
);
