import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../src/*.stories.@(tsx|mdx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};

module.exports = config;
