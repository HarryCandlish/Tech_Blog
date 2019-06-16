import React from "react"
import { graphql } from "gatsby"

import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <body className={blogStyles.body}>
      <Header />
      <div className={blogStyles.container}>
        <h1 className={blogStyles.title}>
          {props.data.markdownRemark.frontmatter.title}
        </h1>
        <div
          className={blogStyles.content}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
    </body>
  )
}

export default Blog
