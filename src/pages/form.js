import React from "react"

import Allergy from '../components/allergy'
import Layout from "../components/layout"
import SEO from "../components/seo"

import nuts from '../images/nuts.png'
import milk from '../images/milk.png'
import egg from '../images/egg.png'
import soy from '../images/soy.png'
import wheat from '../images/wheat.png'

const FormPage = () => {
	const allergies = [
		{ id: 'nuts', label: 'Nötter', backgroundImage: nuts },
		{ id: 'milk', label: 'Mjölk', backgroundImage: milk },
		{ id: 'egg', label: 'Ägg', backgroundImage: egg },
		{ id: 'soy', label: 'Soja', backgroundImage: soy },
		{ id: 'gluten', label: 'Gluten', backgroundImage: wheat },
	]

	return (
		<Layout>
			<SEO title="Vem är du" keywords={[`gatsby`, `application`, `react`]} />
			<form name = 'contact'>
				<input type="hidden" name='form-name' value="contact" />
				<input name="name" type = 'text' placeholder="Jag heter..." />
				<input name="phone" type = 'text' placeholder="Mamma/Pappas mobilnummer är..." />
				<strong>Jag äter inte</strong>
				<div className= 'allergies'>
				{allergies.map((allergy, index) => <Allergy key = { index } {...allergy}/>)}
				</div>
				<button type="submit">SKICKA</button>
			</form> 
		</Layout>
	)
}

export default FormPage
