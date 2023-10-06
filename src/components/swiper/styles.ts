import type { RecipeVariantProps } from '@/styled-system/css';

import { css, cva, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export const rootStyles = cx(
  flex({ direction: 'row', align: 'center', justify: 'center', wrap: 'nowrap' }),
  css({ position: 'relative', w: 'full', overflow: 'hidden', touchAction: 'none', userSelect: 'none' })
);

export const contentRecipe = cva({
  base: {
    display: 'flex',
    flex: 1,
  },

  variants: {
    itemsPerPage: {
      1: {
        '& > *': { flex: '1 0 100%' },
      },
      2: {
        '& > *': { flex: '1 0 50%' },
      },
      3: {
        '& > *': { flex: '1 0 33.3333%' },
      },
      4: {
        '& > *': { flex: '1 0 25%' },
      },
      5: {
        '& > *': { flex: '1 0 20%' },
      },
    },
  },

  defaultVariants: {
    itemsPerPage: 2,
  },
});

export type ContentVariants = RecipeVariantProps<typeof contentRecipe>;

export const itemStyels = cx(
  flex({ align: 'center', justify: 'center' }),
  css({
    bg: 'gray.800',
    rounded: 'md',
    marginLeft: '10px',

    '&:first-child': {
      marginLeft: 0,
    },
  })
);
