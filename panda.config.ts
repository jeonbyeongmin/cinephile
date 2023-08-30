import { defineConfig, defineGlobalStyles, defineRecipe, defineTextStyles, defineTokens } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  'html, body': {
    backgroundColor: 'gray.950',
    color: 'gray.50',
    listStyleType: 'none',
  },
});

const textStyles = defineTextStyles({
  body: {
    description: 'The body text style - used in paragraphs',
    value: {
      fontWeight: '500',
      fontSize: '16',
      lineHeight: '24',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
});

const tokens = defineTokens({
  colors: {
    gray: {
      50: { value: '#FAFAFA' },
      100: { value: '#F4F4F5' },
      200: { value: '#E4E4E7' },
      300: { value: '#D4D4D8' },
      400: { value: '#A1A1AA' },
      500: { value: '#71717A' },
      600: { value: '#52525B' },
      700: { value: '#3F3F46' },
      800: { value: '#27272A' },
      900: { value: '#18181B' },
      950: { value: '#0F0F12' },
    },
  },
});

const menuItem = defineRecipe({
  className: 'menu-item',
  base: {
    display: 'flex',
    gap: 4,
    w: 'full',
    alignItems: 'center',
    p: 3,
    rounded: 'md',
    bg: { base: 'gray.800', _hover: 'gray.700' },
  },
  variants: {
    active: {
      true: { bg: { base: 'gray.800', _hover: 'gray.700' } },
      false: { bg: { base: 'transparent', _hover: 'gray.800' } },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export default defineConfig({
  // Output css options
  prefix: 'cp',
  preflight: true,
  minify: true,
  // hash: true,

  // File system options
  outdir: 'src/styled-system',
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],

  // Design token options
  globalCss,
  theme: {
    extend: {
      recipes: {
        menuItem,
      },
      tokens,
      textStyles,
    },
  },

  // JSX Options
  jsxFramework: 'react',
});
