import React, { useState } from 'react'
import checkedImage from '../images/checked.png'
import './allergy.css'

const allergy = ({id, label, backgroundImage}) => {
	const [checked, setChecked] = useState(null)
	return (
		<>
			<input
				type = 'checkbox'
				name = {id}
				id = {id}
			/>
			<label 
				htmlFor = {id}
				style = {checked === 'on' ? {
					backgroundImage: `url(${checkedImage})`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat'
				}: {}}
				onClick = { () => setChecked(checked !== 'on' ? 'on' : 'off')}
			>
				<img src= {backgroundImage} alt = {label}/>
				{label}
			</label>
		</>	
	)
}

export default allergy