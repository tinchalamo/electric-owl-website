import React from 'react'
import Link from 'gatsby-link'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'

export default class IndexPage extends React.Component {
  constructor () {
    super();

    this.state = {
      modal: {
        open: false,
        videoId: null
      }
    };
  }

  openModal = videoId => {
    this.setState({
      modal: {
        open: true,
        videoId
      }
    });
  };

  closeModal = () => {
    this.setState({
      modal: {
        open: false,
        videoId: null
      }
    });
  };

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
                  <ModalVideo
                    channel="vimeo"
                    isOpen={this.state.modal.open}
                    videoId={post.frontmatter.vimeoId}
                    onClose={this.closeModal}
                  />
                  
                  <a onClick={this.openModal}>
                    <img
                      style={{ borderRadius: '5px' }}
                      src={post.frontmatter.poster}
                      alt={post.frontmatter.title}
                    />
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
            vimeoId
            description
          }
        }
      }
    }
  }
`
