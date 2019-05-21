import React from "react"

import { Link } from "gatsby"

import homeStyles from "./index.module.scss"
import Header from "../components/header"

const homePage = () => {
  return (
    <div>
      <Header />
      <div className={homeStyles.container}>
        <h2 className={homeStyles.mainTitle}>BLOG</h2>
        <h3 className={homeStyles.secondaryTitle}>HARRY CANDLISH</h3>
      </div>
      <div>
        <ol className={homeStyles.titles}>
          <Link to="philosophy" className={homeStyles.title}>
            <li className={homeStyles.list}>
              <h2>PHILOSOPHY</h2>
            </li>
          </Link>
          <Link to="technology" className={homeStyles.title}>
            <li className={homeStyles.list}>
              <h2>TECHNOLOGY</h2>
            </li>
          </Link>
          <Link to="literature" className={homeStyles.title}>
            <li className={homeStyles.list}>
              <h2>LITERATURE</h2>
            </li>
          </Link>
          <Link to="fiction" className={homeStyles.title}>
            <li className={homeStyles.list}>
              <h2>FICTION</h2>
            </li>
          </Link>
        </ol>
      </div>
    </div>
  )
}

export default homePage
