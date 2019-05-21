import React from "react"

import { graphql, useStaticQuery } from "gatsby"

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
            }
          }
        }
      }
    }
  `)
  return (
    <div className={litStyles.body}>
      <Header />
      <h1 className={litStyles.title}>Literature</h1>
      <div>
        <ol className={litStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <p>{edge.node.frontmatter.title}</p>
                <p>{edge.node.frontmatter.author}</p>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Literature
