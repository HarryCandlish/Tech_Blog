import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

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
    <div className={techStyles.body}>
      <Header />
      <h1 className={techStyles.title}>Technology</h1>
      <div>
        <ol className={techStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={techStyles.post}>
                <Link className={techStyles.link}>
                  <p>{edge.node.frontmatter.title}</p>
                  <p>{edge.node.frontmatter.author}</p>
                  <p>{edge.node.frontmatter.date}</p>
                  <img
                    alt="technology"
                    className={techStyles.image}
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

export default Technology
