import React from "react"

import { graphql, useStaticQuery } from "gatsby"

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
            }
          }
        }
      }
    }
  `)
  return (
    <div className={philosophyStyles.body}>
      <Header />
      <h1 className={philosophyStyles.title}>Philosophy</h1>
      <div>
        <ol className={philosophyStyles.posts}>
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

export default Philosophy
