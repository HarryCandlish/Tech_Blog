import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import philosophyStyles from "./philosophy.module.scss"
import Header from "../components/header"

const Philosophy = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { genre: { eq: "Philosophy" } } }
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
    <div className={philosophyStyles.body}>
      <Header />
      <h1 className={philosophyStyles.title}>PHILOSOPHY</h1>
      <div>
        <ul className={philosophyStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={philosophyStyles.post}>
                <Link
                  to={`/literature/${edge.node.fields.slug}`}
                  className={philosophyStyles.link}
                >
                  <h1 className={philosophyStyles.titles}>
                    {edge.node.frontmatter.title}
                  </h1>
                  <hr />
                  <p>{edge.node.frontmatter.description}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Philosophy
