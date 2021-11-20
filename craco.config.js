const CracoLessPlugin = require('craco-less');
const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');

module.exports = {
  plugins: [
    { plugin: BabelRcPlugin },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#27ae60',
              '@input-height-lg': '43px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
