/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulEvent {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: node.id,
        },
      })
    })
    result.data.allContentfulEvent.edges.forEach(({ node }) => {
      createPage({
        path: `/events/${node.slug}`,
        component: path.resolve(`./src/templates/event.js`),
        context: {
          slug: node.id,
        },
      })
    })
  })
}
