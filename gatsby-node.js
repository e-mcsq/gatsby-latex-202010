exports.onCreateWebpackConfig = function({stage, actions, plugins, getConfig}) {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      plugins.provide({
        React: 'react',
      }),
    ],
  })

  /* Prevent warnings in the following form…
   warn chunk styles [mini-css-extract-plugin]
   Conflicting order. Following module has been added:
   ...
   - couldn't fulfill desired order of chunk group(s) component---src-pages-impressum-tsx
   */
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
