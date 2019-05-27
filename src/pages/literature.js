import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import litStyles from "./literature.module.scss"
import Header from "../components/header"

const Literature = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { genre: { eq: "Literature" } } }
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
    <div className={litStyles.body}>
      <Header />
      <h1 className={litStyles.title}>LITERATURE</h1>
      <div>
        <ul className={litStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={litStyles.post}>
                <Link
                  to={`/literature/${edge.node.fields.slug}`}
                  className={litStyles.link}
                >
                  <h1 className={litStyles.titles}>
                    {edge.node.frontmatter.title}
                  </h1>
                  <hr />
                  <h3>{edge.node.frontmatter.author}</h3>
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

export default Literature
