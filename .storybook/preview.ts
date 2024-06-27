import type { Preview } from '@storybook/react';
import '../app/globals.css';
// import '../.next/static/css/b768301d8b93c5f4.css';
// import '../.next/static/css/bbb59491fd254b63.css';
// import '../app/shared-components/Tooltip/Tooltip.module.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
