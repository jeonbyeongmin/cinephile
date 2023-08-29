import { defineConfig, defineGlobalStyles, defineTokens } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  'html, body': {
    backgroundColor: 'gray.950',
    color: 'gray.50',
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
      tokens,
    },
  },

  // JSX Options
  jsxFramework: 'react',
});
