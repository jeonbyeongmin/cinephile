import { css } from '@/styled-system/css';

export const editorStyles = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minH: 0,
  fontSize: 'md',
  lineHeight: '1.6',

  '& .ProseMirror': {
    position: 'relative',
    flex: 1,
    h: 'full',
    outline: 'none',

    '& p.is-editor-empty:first-child::before': {
      color: 'gray.400',
      content: 'attr(data-placeholder)',
      float: 'left',
      height: 0,
      pointerEvents: 'none',
    },
  },

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

  '& blockquote': {
    borderLeftWidth: '4px',
    borderColor: 'gray.600',
    bg: 'gray.800',
    px: 4,
    py: 2,
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
