import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div>
      <nav className={headerStyles.nav}>
        <ul>
          <li>
            <img alt="nav" className={headerStyles.image} src="./nav.png" />
            <ul>
              <li>
                <Link to="/#">PHILOPHY </Link>
              </li>
              <li>
                <Link to="/#">TECHNOLOGY</Link>
              </li>
              <li>
                <Link to="/#">FICTION </Link>
              </li>
              <li>
                <Link to="/#">LITERATURE </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
