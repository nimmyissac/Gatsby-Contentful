const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPlayer {
          edges {
            node {
              name,
              games,
              gamesPlayed,
              won,
            }
          }
        }
      }
    `
).then(result => {
  result.data.allContentfulPlayer.edges.forEach(({ node }, index) => {
    console.log(node);
   createPage({
     path: `/player${index}/`,
     component: path.resolve(`./src/templates/player.js`),
     context: {
       // Data passed to context is available in page queries as GraphQL variables.
       // slug:`/player${index}/`,
       name: node.name,
     },
   })

 })
  resolve()
    })
  })
}
