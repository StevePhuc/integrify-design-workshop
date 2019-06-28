import React from "react"
import "./style.css"

import { Link } from "gatsby"

const Header = ({ header }) => {
  const {
    headerTitle,
    headerSubtitle,
    headerPill,
    headerImage,
    headerImageAlt,
  } = header
  return (
    <header>
      <h1> {headerTitle}</h1>
      <h2>{headerSubtitle}</h2>
      <Link to={headerPill.to.slug}>Join TTU!</Link>
      <img src={`https:${headerImage.file.url}`} alt={headerImageAlt} />
    </header>
  )
}

export default Header
