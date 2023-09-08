import { css } from '@/styled-system/css';

export const threadBodyStyles = css({
  color: 'gray.200',

  '& hr': {
    border: 0,
    borderTop: '1px solid',
    borderColor: 'gray.700',
    my: 10,
    mx: 2,
  },

  '& strong': {
    fontWeight: 'black',
  },

  '& em': {
    fontStyle: 'italic',
  },

  '& p': {
    mb: 3,
    _last: { mb: 0 },
  },

  '& blockquote': {
    borderLeftWidth: '4px',
    borderColor: 'gray.600',
    bg: 'gray.800',
    px: 4,
    py: 2,
    my: 5,

    '& p': {
      mb: 0,
    },

    _first: {
      mt: 0,
    },
  },

  '& ol, & ul': {
    listStylePosition: 'outside',
    px: 7,
    pb: 5,
  },

  '& ol': {
    listStyleType: 'decimal',
  },

  '& ul': {
    listStyleType: 'disc',
  },

  '& li': {
    mb: 1,
  },

  '& a': {
    color: 'blue.500',
    _hover: { color: 'blue.700' },
  },
});
