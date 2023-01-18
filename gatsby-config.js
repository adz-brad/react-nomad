module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/assets/images`
      },
      __key: "images"
    }, 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 100,
          breakpoints: [600, 768, 992, 1280, 1536],
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
  ],
}
