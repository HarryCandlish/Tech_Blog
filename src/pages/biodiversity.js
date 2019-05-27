import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import bioStyles from "./bio.module.scss"
import Header from "../components/header"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { genre: { eq: "Biodiversity" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              located
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
    <div className={bioStyles.body}>
      <Header />
      <h1 className={bioStyles.title}>BIODIVERSITY</h1>
      <div>
        <ul className={bioStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={bioStyles.post}>
                <Link
                  to={`/literature/${edge.node.fields.slug}`}
                  className={bioStyles.link}
                >
                  <h1 className={bioStyles.titles}>
                    {edge.node.frontmatter.title}
                  </h1>
                  <hr />
                  <p>{edge.node.frontmatter.located}</p>
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

export default Bio
