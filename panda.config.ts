import { defineConfig, defineGlobalStyles, defineKeyframes, defineTextStyles, defineTokens } from '@pandacss/dev';

const isProduction = process.env.NODE_ENV === 'production';

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

  borders: {
    danger: { value: '1px solid {colors.red.400}' },
    warning: { value: '1px solid {colors.yellow.400}' },
    success: { value: '1px solid {colors.green.400}' },
    info: { value: '1px solid {colors.blue.400}' },
    focus: { value: '1px solid {colors.blue.400}' },
  },
});

const keyframes = defineKeyframes({
  overlay: {
    from: { background: 'rgba(155 155 155 / 0)' },
    to: { background: 'rgba(155 155 155 / 0.1)' },
  },
  contentShow: {
    from: { opacity: '0', transform: 'translate(0%, 5%)' },
    to: { opacity: '1', transform: 'translate(0%, 0%)' },
  },
  slideUpAndFade: {
    from: { opacity: '0', transform: 'translateY(2px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  slideRightAndFade: {
    from: { opacity: '0', transform: 'translateX(-2px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  slideDownAndFade: {
    from: { opacity: '0', transform: 'translateY(-2px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  slideLeftAndFade: {
    from: { opacity: '0', transform: 'translateX(2px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
});

export default defineConfig({
  // Output css options
  prefix: 'cp',
  preflight: true,
  minify: true,
  hash: isProduction,

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
      textStyles,
      keyframes,
    },
  },

  // JSX Options
  jsxFramework: 'react',
});
