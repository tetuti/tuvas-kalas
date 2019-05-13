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
	const [step, setStep] = useState(0)
	const allergies = [
		{ id: 'nuts', label: 'Nötter', backgroundImage: nuts },
		{ id: 'milk', label: 'Mjölk', backgroundImage: milk },
		{ id: 'egg', label: 'Ägg', backgroundImage: egg },
		{ id: 'soy', label: 'Soja', backgroundImage: soy },
		{ id: 'gluten', label: 'Gluten', backgroundImage: wheat },
	]
	const forward = <button onClick = {() => setStep(step + 1)}>Nästa</button>
	const backward = <button onClick = {() => setStep(step - 1)} style = {{marginRight:'1rem'}}>Tillbaka</button>

	return (
		<Layout>
			<SEO title="Vem är du" keywords={[`gatsby`, `application`, `react`]} />
			<form name = 'contact' method='post' action='/tack/' data-netlify="true" onSubmit = {(e) => console.log(e.target)}>
				{step === 0 && 
				(<>
					<input type="hidden" name="form-name" value="contact" />
					<input name="name" type = 'text' placeholder="Jag heter..." required/>
					<input name="phone" type = 'number' placeholder="Mamma/Pappas mobilnummer är..." required/>
					{forward}
				</>)}
				{step === 1 && 
				(<>
					<strong>Jag äter inte</strong>
					<div className= 'allergies'>
					{allergies.map((allergy, index) => <Allergy key = { index } {...allergy}/>)}
					</div>
					{backward}
					<button type="submit">Skicka</button>
				</>)}
			</form> 
		</Layout>
	)
}

export default FormPage
