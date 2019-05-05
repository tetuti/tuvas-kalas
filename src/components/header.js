import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Header = ({ image }) => (
  <header>
    <div className = 'container'>
      <Link to = '/'>
        <Img className = 'logo wobbler' fluid={image}/>
      </Link>
      <h1>Välkommen på kalas!</h1>
    </div>
  </header>
)

export default Header