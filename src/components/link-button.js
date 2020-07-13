import React from "react"
import { Link } from "gatsby"

const LinkButton = ({ to, children }) => (
  <Link className="btn" to={to}>
    {children}
  </Link>
)

export default LinkButton
