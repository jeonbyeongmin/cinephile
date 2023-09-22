import type { Preview } from '@storybook/react';

import '@/styles/global.css';
import { themes } from '@storybook/theming';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  loaders: [mswLoader],
};

export default preview;
