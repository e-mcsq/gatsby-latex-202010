module.exports = {
  siteMetadata: {
    title: 'A minimal gatsby example',
    siteUrl: 'https://test.org',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [
          'gatsby-yaml-full-markdown', // Enable !markdown tags
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        jsxPragma: 'jsx',
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-xxx',
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A minimal gatsby example',
        short_name: '@minimalexample',
        start_url: '/',
        background_color: '#4FC1B7',
        theme_color: '#4FC1B7',
        display: 'standalone',
        icon: 'src/assets/example.png',
        purpose: "maskable",
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline'
  ],
}
