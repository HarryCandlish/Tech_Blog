import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import homeStyles from "./index.module.scss"

const homePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { genre: { eq: "tech" } } }) {
        edges {
          node {
            frontmatter {
              title
              author
              date
              genre
              description
            }

            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1 className={homeStyles.title}>Tech Blog</h1>
      <div>
        <ol className={homeStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={homeStyles.post}>
                <Link
                  to={`/literature/${edge.node.fields.slug}`}
                  className={homeStyles.link}
                >
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.description}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default homePage
