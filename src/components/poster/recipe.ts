import { cva } from '@/styled-system/css';

export const posterRecipe = cva({
  base: {
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      display: 'block',
      paddingTop: '100%',
    },

    '& > *': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
    },

    '& > img, & > video': {
      objectFit: 'cover',
    },
  },
});
