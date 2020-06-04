const path = require('path')

const pageTemplate = path.resolve('./src/templates/custom-page.jsx')
const personTemplate = path.resolve('./src/templates/person-page.jsx')

console.log(pageTemplate, personTemplate)

exports.createPages = ({graphql, actions}) => {
	const {createPage} = actions

	return new Promise((resolve) => {
		graphql(`
    query pageQuery {
      allKontentItemPage {
        nodes {
          system {
            codename
            id
          }
          elements {
            slug {
              value
            }
            navigation__navigation {
              value {
                codename
                name
              }
            }
            page_general__background_image {
              value {
                url
              }
            }
            page_general__description {
              value
            }
            page_general__keywords {
              value
            }
            page_general__title {
              value
            }
            richtext__content {
              images {
                description
                height
                image_id
                url
                width
              }
              links {
                codename
                link_id
                type
                url_slug
              }
              value
              type
              name
              modular_content {
                id
                system {
                  codename
                  id
                  language
                  name
                  type
                }
                ... on kontent_item_layout_flex {
                  elements {
                    options {
                      value {
                        codename
                      }
                    }
                    richtext__content {
                      name
                      type
                      value
                      images {
                        description
                        height
                        image_id
                        url
                        width
                      }
                      links {
                        codename
                        link_id
                        url_slug
                        type
                      }
                      modular_content {
                        id
                        system {
                          codename
                          id
                          language
                          name
                          type
                        }
                        ... on kontent_item_carousel {
                          elements {
                            items {
                              value {
                                system {
                                  id
                                }
                                ... on kontent_item_carousel_item {
                                  id
                                  system {
                                    codename
                                    id
                                    language
                                    type
                                    name
                                  }
                                  elements {
                                    richtext__content {
                                      images {
                                        description
                                        height
                                        image_id
                                        url
                                        width
                                      }
                                      links {
                                        codename
                                        link_id
                                        type
                                        url_slug
                                      }
                                      name
                                      type
                                      value
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        ... on kontent_item_graphic_stars {
                          elements {
                            number_of_stars {
                              value
                            }
                          }
                        }
                        ... on kontent_item_service {
                          elements {
                            description {
                              value
                            }
                            image {
                              value {
                                url
                              }
                            }
                            title {
                              value
                            }
                          }
                        }
                        ... on kontent_item_graphic_team {
                          elements {
                            title {
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on kontent_item_carousel {
                  elements {
                    items {
                      value {
                        system {
                          id
                        }
                        ... on kontent_item_carousel_item {
                          id
                          system {
                            codename
                            id
                            language
                            type
                            name
                          }
                          elements {
                            richtext__content {
                              images {
                                description
                                height
                                image_id
                                url
                                width
                              }
                              links {
                                codename
                                link_id
                                type
                                url_slug
                              }
                              name
                              type
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on kontent_item_graphic_stars {
                  elements {
                    number_of_stars {
                      value
                    }
                  }
                }
                ... on kontent_item_service {
                  elements {
                    description {
                      value
                    }
                    image {
                      value {
                        url
                      }
                    }
                    title {
                      value
                    }
                  }
                }
                ... on kontent_item_graphic_team {
                  elements {
                    title {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
      allKontentItemPerson {
        nodes {
          elements {
            areas_of_expertise {
              value {
                ... on kontent_item_service {
                  id
                  elements {
                    title {
                      value
                    }
                  }
                }
              }
            }
            awards {
              value
            }
            direct_access {
              value {
                name
                codename
              }
            }
            education {
              value
            }
            image {
              value {
                url
              }
            }
            name {
              value
            }
            richtext__content {
              images {
                description
                height
                image_id
                url
                width
              }
              links {
                codename
                type
                link_id
                url_slug
              }
              modular_content {
                system {
                  codename
                  id
                  language
                  name
                  type
                }
                ... on kontent_item_carousel {
                  elements {
                    items {
                      value {
                        system {
                          id
                        }
                        ... on kontent_item_carousel_item {
                          id
                          system {
                            codename
                            id
                            language
                            type
                            name
                          }
                          elements {
                            richtext__content {
                              images {
                                description
                                height
                                image_id
                                url
                                width
                              }
                              links {
                                codename
                                link_id
                                type
                                url_slug
                              }
                              name
                              type
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on kontent_item_graphic_stars {
                  elements {
                    number_of_stars {
                      value
                    }
                  }
                }
                ... on kontent_item_service {
                  elements {
                    description {
                      value
                    }
                    image {
                      value {
                        url
                      }
                    }
                    title {
                      value
                    }
                  }
                }
                ... on kontent_item_graphic_team {
                  elements {
                    title {
                      value
                    }
                  }
                }
              }
              value
              type
              name
            }
            year_called {
              value(formatString: "YYYY")
            }
            slug {
              value
            }
          }
        }
      }
    }  
    `).then((result) => {
			const pages = result.data.allKontentItemPage.nodes
			const people = result.data.allKontentItemPerson.nodes

			pages.forEach((page) => {
				createPage({
					path: `page/${page.elements.slug.value}`,
					component: pageTemplate,
					context: page,
				})
				console.log(`created page/${page.elements.slug.value}`)
			})
			people.forEach((person) => {
				createPage({
					path: `person/${person.elements.slug.value}`,
					component: personTemplate,
					context: person,
				})
				console.log(`created person/${person.elements.slug.value}`)
			})
			resolve()
		})
	})
}
