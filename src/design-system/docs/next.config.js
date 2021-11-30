const path = require('path');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withPlugins = require('next-compose-plugins');

const withVanillaExtract = createVanillaExtractPlugin();

const withTM = require('next-transpile-modules')([
  'react-native-reanimated',
  'react-native-markdown-display',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  babelConfigFile: path.resolve('./babel.config.js'),
  experimental: {
    externalDir: true, // https://github.com/vercel/next.js/pull/22867
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPlugins(
  [withVanillaExtract, withReactNativeWeb, withTM],
  nextConfig
);

///////////////////////////////////////////////////////////////////////////

function withReactNativeWeb(nextConfig) {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      };
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ];

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  };
}
