import React from "react"

import techStyles from "./technology.module.scss"
import Header from "../components/header"

const Technology = () => {
  return (
    <div className={techStyles.body}>
      <Header />
      <h1 className={techStyles.title}>TECHNOLOGY</h1>
    </div>
  )
}

export default Technology
