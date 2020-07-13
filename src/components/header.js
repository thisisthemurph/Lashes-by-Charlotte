import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"

import "../styles/header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query InfoQuery {
      site {
        siteMetadata {
          contact_info {
            telephone_number
          }
        }
      }
    }
  `)

  const number = data.site.siteMetadata.contact_info.telephone_number

  return (
    <header className="header">
      <Nav />
      <div className="hero">
        <h1 className="hero__heading">Lashes</h1>
        <p className="hero__subheading">By Charlotte</p>
      </div>
      <a className="header__cta btn" href={`tel:${number}`}>
        Call Charlotte
      </a>
    </header>
  )
}

export default Header
