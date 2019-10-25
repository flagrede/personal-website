module.exports = {
  siteMetadata: {
    title: `Florent Lagrede`,
    description: `Florent Lagrede personnal website`,
    author: `Florent Lagrede`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/flowlag`
      },
      {
        name: `GitHub`,
        url: `https://github.com/flow11`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        mdx: false
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-style-guide`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `florent-lagrede-website`,
        short_name: `flagrede`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500
            }
          }
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
