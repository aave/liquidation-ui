const { useBabelRc, addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addBabelPlugin(['styled-jsx/babel', { plugins: ['styled-jsx-plugin-sass'] }]),
  addBabelPlugin([
    'module-resolver',
    {
      alias: {
        components: './src/components',
        private: './src/Private',
        libs: './src/libs',
        helpers: './src/helpers',
        utils: './src/utils',
      },
    },
  ])
);
