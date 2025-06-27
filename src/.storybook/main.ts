// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
    };
    return config;
  },
};

export default config;
