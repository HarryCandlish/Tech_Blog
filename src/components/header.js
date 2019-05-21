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
                <Link to="/philosophy">PHILOSOPHY </Link>
              </li>
              <li>
                <Link to="/technology">TECHNOLOGY</Link>
              </li>
              <li>
                <Link to="/fiction">FICTION </Link>
              </li>
              <li>
                <Link to="/literature">LITERATURE </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
