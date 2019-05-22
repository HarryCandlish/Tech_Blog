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
              image {
                childImageSharp {
                  resize(width: 250, height: 250) {
                    src
                  }
                }
              }
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
                <Link className={philosophyStyles.link}>
                  <p>{edge.node.frontmatter.title}</p>
                  <p>{edge.node.frontmatter.author}</p>
                  <p>{edge.node.frontmatter.date}</p>
                  <img
                    alt="philosophy"
                    className={philosophyStyles.image}
                    src={edge.node.frontmatter.image.childImageSharp.resize.src}
                  />
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

export default Philosophy
