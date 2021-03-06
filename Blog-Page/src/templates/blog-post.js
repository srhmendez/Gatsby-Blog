import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
      <Layout>
        <div className="blog-post-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <div className="blog-post">
            <h4><a href="/">Back to Homepage </a></h4>
            <h1>{post.frontmatter.title}</h1>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </div>
        </div>
      </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`