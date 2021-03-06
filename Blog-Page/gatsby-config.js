module.exports = {  
    siteMetadata: {
      title: `Web Development`,
      author: `Sarah Mendez`
    },
    plugins: [
      "gatsby-plugin-catch-links",
      "gatsby-plugin-react-helmet",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: "pages"
        }
      },
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [] // just in case those previously mentioned remark plugins sound cool :)
        }
      }
  ]
}