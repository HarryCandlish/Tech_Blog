import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import techStyles from "./technology.module.scss"

const Technology = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { genre: { eq: "Technology" } } }
      ) {
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
    <div className={techStyles.body}>
      <h1 className={techStyles.title}>TECHNOLOGY</h1>
      <div>
        <ol className={techStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={techStyles.post}>
                <Link
                  to={`/literature/${edge.node.fields.slug}`}
                  className={techStyles.link}
                >
                  <h2>{edge.node.frontmatter.title}</h2>
                  <hr />

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

export default Technology
