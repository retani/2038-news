const path = require(`path`)
const { GraphQLBoolean } = require("gatsby/graphql")

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  // if the node is a markdown file, add the `published` field
  if ("MarkdownRemark" === type.name) {
    return {
      published: {
        type: GraphQLBoolean,
        resolve: ({ frontmatter }) => {
          /*
          `published` is always true in development
              so both drafts and finished posts are built
          */
          if (process.env.NODE_ENV !== "production") {
            return true
          }
          /*
          return the opposite of the `draft` value,
          i.e. if draft = true : published = false
          */
          return !frontmatter.draft
        },
      },
    }
  }
  return {}
}

exports.onCreateNode = ({
  node,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createNodeField, createParentChildLink } = actions

  // Check for the correct type to only affect this
  if (node.internal.type === `PagesJson`) {
    // transform markdown in blocks[i].content
    if (node.blocks) {
      const markdownHost = {
        id: createNodeId(`${node.id} markdown host`),
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(JSON.stringify(node.blocks)),
          type: `${node.internal.type}MarkdownData`,
        },
      }

      createNode(markdownHost)

      createNodeField({
        node,
        name: `markdownContent___NODE`, // Before the ___NODE: Name of the new fields
        value: markdownHost.id, // Connects both nodes
      })

      node.blocks.forEach((block, i) => {
        if (!block.content) {
          block.content = ""
        }
        const blockNode = {
          id: `${node.id} block ${i} markdown`,
          parent: markdownHost.id,
          internal: {
            content: block.content,
            contentDigest: createContentDigest(block.content),
            type: `${node.internal.type}BlockMarkdown`,
            mediaType: "text/markdown",
          },
        }

        createNode(blockNode)

        createParentChildLink({ parent: node, child: blockNode })
      })
    }

    // transform markdown in node.content
    if (node.content) {
      const textNode = {
        id: createNodeId(`${node.id} markdown field`),
        children: [],
        parent: node.id,
        internal: {
          content: node.content,
          mediaType: `text/markdown`, // Important!
          contentDigest: createContentDigest(node.content),
          type: `${node.internal.type}Markdown`,
        },
      }

      createNode(textNode)

      // Add link to the new node
      createNodeField({
        node,
        name: `markdownContent___NODE`, // Before the ___NODE: Name of the new fields
        value: textNode.id, // Connects both nodes
      })
    }
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      pages: allPagesJson(
        filter: { path: { ne: null } }
      ) {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.pages.edges.forEach(({ node }) => {
    const template = (node.path === "/imprint" ? "imprint" : "page")
    createPage({
      path: node.path,
      component: path.resolve(`src/templates/${template}.js`),
      context: {},
    })
  })

}
