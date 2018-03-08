import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const CampaignPostTemplate = ({
  helmet,
  title,
  poster,
  vimeoId,
  description,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="columns">
              <div className="column">
                <img
                  style={{ borderRadius: '5px' }}
                  src={poster}
                  alt={title}
                />
              </div>
              <div className="column">
                {vimeoId}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <CampaignPostTemplate
      contentComponent={HTMLContent}
      helmet={<Helmet title={`Campaign | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      poster={post.frontmatter.poster}
      vimeoId={post.frontmatter.vimeoId}
      description={post.frontmatter.description}
      content={post.html}
    />
  )
}

export const pageQuery = graphql`
  query CampaignPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        poster
        vimeoId
        description
      }
    }
  }
`
