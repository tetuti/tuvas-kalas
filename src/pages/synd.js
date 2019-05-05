import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SyndPage = () => (
  <Layout>
    <SEO title="Sad face"/>
    <div className = 'container '>
		<h2>Vad synd</h2>
		<p>
		Ångrar du dig kan du ladda om sidan genom att trycka på tårtan och trycka Ja!
		</p>
		
	</div>
  </Layout>
)

export default SyndPage
