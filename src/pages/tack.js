import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TackPage = () => (
  <Layout>
    <SEO title="Då ses vi"/>
    <div className = 'container '>
		<h2>Vad kul</h2>
		<p>
			Då syns vi på <em>1 Juni</em> på <a target = '_blank' rel="noopener noreferrer" href = "https://www.google.com/maps/place/Konstrukt%C3%B6rsgatan+70,+587+37+Link%C3%B6ping">Konstruktörsgatan 70</a>
		</p>
		<p>
			Om ni har några frågor kan ni nå Tuvas mamma eller pappa på mobilnummer: 
		</p>
		<p>
		<code><em>0722 291 577</em></code> (Lars)
		</p>
		<p>
		<code><em>0737 320 760</em></code> (Anna)
		</p>
		
	</div>
  </Layout>
)

export default TackPage
