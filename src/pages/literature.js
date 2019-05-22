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
    <div className={litStyles.body}>
      <Header />
      <h1 className={litStyles.title}>Literature</h1>
      <div>
        <ul className={litStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={litStyles.post}>
                <Link className={litStyles.link}>
                  <p>{edge.node.frontmatter.title}</p>
                  <p>{edge.node.frontmatter.author}</p>
                  <p>{edge.node.frontmatter.date}</p>
                  <img
                    alt="clown"
                    className={litStyles.image}
                    src={edge.node.frontmatter.image.childImageSharp.resize.src}
                  />
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
