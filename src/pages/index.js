import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Välkommen" keywords={[`gatsby`, `application`, `react`]} />
    <p>Tuva ska ha kalas den <em>1 juni</em> och du är bjuden, vill du komma?</p>
    <nav>
      <Link className = 'nav-button' to="/form/">Ja</Link>
      <Link className = 'nav-button' to="/synd/">Nej</Link>
    </nav> 
  </Layout>
)

export default IndexPage
