import React, { useState } from "react"
import { Link } from "gatsby"

import "../styles/nav.scss"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  let navListClasses = "nav__list"
  let burgerClasses = "burger"

  if (isOpen) {
    navListClasses = "nav__list nav__list--open"
    burgerClasses = "burger burger--cross"
  }

  const handleNavToggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <nav className="nav">
      <a className={burgerClasses} href="/" onClick={handleNavToggle}>
        <span className="burger__bar"></span>
        <span className="burger__bar"></span>
        <span className="burger__bar"></span>
      </a>
      <ul className={navListClasses}>
        <li className="nav__list-item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/about">
            About
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
