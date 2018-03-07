import React from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Campaigns</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'campaign-post')
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <a href={post.frontmatter.vimeo}>
                  <img
                    style={{ borderRadius: '5px' }}
                    src={post.frontmatter.poster}
                    alt={post.frontmatter.title}
                  />
                  </a>
                  <a className="has-text-primary" href={post.frontmatter.vimeo}>
                    {post.frontmatter.title}
                  </a>
                </p>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            date(formatString: "MMMM DD, YYYY")
            poster
            vimeo
            description
          }
        }
      }
    }
  }
`
