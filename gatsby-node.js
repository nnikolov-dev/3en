const path = require(`path`)
const kcItemTypeIdentifier = `KenticoCloudItem`
const projectReferenceTypeIdentifier = `ProjectReference`
const speakingEngagementTypeIdentifier = `SpeakingEngagement`

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type.match(/KenticoCloudItem/)) {
    let withDetailView = false
    let templateName

    if (node.internal.type === `${kcItemTypeIdentifier}${projectReferenceTypeIdentifier}`) {
      templateName = `project-reference`
      withDetailView = true
    }
    else if (node.internal.type === `${kcItemTypeIdentifier}${speakingEngagementTypeIdentifier}`) {
      templateName = `speaking-engagement`
      withDetailView = true
    }

    if (withDetailView) {
      createNodeField({
        node,
        name: `templateNameStep1`,
        value: templateName
      })

      createNodeField({
        node,
        name: `slugStep1`,
        value: node.url_slug.value
      })
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // console.log(graphql);

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allKenticoCloudItemProjectReference {
        edges {
          node {
            fields {
              templateNameStep1
              slugStep1
            }
          }
        }
      }
      allKenticoCloudItemSpeakingEngagement {
        edges {
          node {
            fields {
              templateNameStep1
              slugStep1
            }
          }
        }
      }
    }
    `).then(result => {
        // console.log(result)

        const union = new Array(...result.data.allKenticoCloudItemProjectReference.edges, ...result.data.allKenticoCloudItemSpeakingEngagement.edges)
        union.forEach(({ node }) => {
          if (node.fields !== undefined && node.fields !== null && node.fields.templateNameStep1 !== undefined && node.fields.templateNameStep1 !== null) {
            createPage({
              path: `${node.fields.templateNameStep1}/${node.fields.slugStep1}`,
              component: path.resolve(`./src/templates/${node.fields.templateNameStep1}.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                templateNameStep2: node.fields.templateNameStep1,
                slugStep2: node.fields.slugStep1
              },
            })
          }
        })
        resolve()
      })
  })
};