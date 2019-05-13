import React, {useState} from "react"

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

	const [checkedAllergies, setCheckedAllergies] = useState([])

	return (
		<Layout>
			<SEO title="Vem är du" keywords={[`gatsby`, `application`, `react`]} />
			<form 
			name = 'contact' 
			method='post' 
			action='/tack/' 
			data-netlify="true"
			>
					<input type="hidden" name="form-name" value="contact" />
					<input name="name" type = 'text' placeholder="Jag heter..." required/>
					<input name="phone" type = 'number' placeholder="Mamma/Pappas mobilnummer är..." required/>
					<strong>Jag äter inte</strong>
					<div className= 'allergies'>
					{allergies.map((allergy, index) => <Allergy 
					key = { index } {...allergy} 
					checked = {checkedAllergies.includes(allergy.id)}
					onClick = {() => checkedAllergies.includes(allergy.id) ?
						setCheckedAllergies(checkedAllergies.filter(a => a !== allergy.id)):
						setCheckedAllergies([...checkedAllergies, allergy.id])
						}/>)}
					</div>
					<button type="submit">Skicka</button>
					
			</form> 
		</Layout>
	)
}

export default FormPage
