import React from "react"

import { Link } from "gatsby"

import homeStyles from "./index.module.scss"

const homePage = () => {
  return (
    <div>
      <div className={homeStyles.container}>
        <h2 className={homeStyles.mainTitle}>BLOG</h2>
        <h3 className={homeStyles.secondaryTitle}>HARRY CANDLISH</h3>
      </div>
      <div>
        <ol className={homeStyles.titles}>
          <Link className={homeStyles.title}>
            <li className={homeStyles.list}>
              <h2>PHILOSOPHY</h2>
            </li>
          </Link>
          <Link className={homeStyles.title}>
            <li className={homeStyles.list}>
              <h2>TECHNOLOGY</h2>
            </li>
          </Link>
        </ol>
      </div>
    </div>
  )
}

export default homePage
