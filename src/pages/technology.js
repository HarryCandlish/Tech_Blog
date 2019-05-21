import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import techStyles from "./technology.module.scss"
import Header from "../components/header"

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
            }
          }
        }
      }
    }
  `)
  return (
    <div className={techStyles.body}>
      <Header />
      <h1 className={techStyles.title}>Technology</h1>
      <div>
        <ol className={techStyles.posts}>
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

export default Technology
