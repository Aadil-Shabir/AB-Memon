// config-overrides.js
import {override} from 'customize-cra';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const supportMjs = () => (webpackConfig: any) => {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });
  return webpackConfig;
};

module.exports = override(supportMjs());
