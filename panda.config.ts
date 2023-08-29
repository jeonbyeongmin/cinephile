import { defineConfig, defineGlobalStyles, defineTokens } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  'html, body': {
    backgroundColor: 'gray.950',
    color: 'gray.50',
  },
});

const tokens = defineTokens({
  colors: {
    'gray.50': { value: '#FAFAFA' },
    'gray.100': { value: '#F4F4F5' },
    'gray.200': { value: '#E4E4E7' },
    'gray.300': { value: '#D4D4D8' },
    'gray.400': { value: '#A1A1AA' },
    'gray.500': { value: '#71717A' },
    'gray.600': { value: '#52525B' },
    'gray.700': { value: '#3F3F46' },
    'gray.800': { value: '#27272A' },
    'gray.900': { value: '#18181B' },
    'gray.950': { value: '#0F0F12' },
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
