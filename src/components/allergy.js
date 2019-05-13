import React from 'react'
import checkedImage from '../images/checked.png'
import './allergy.css'

const allergy = ({id, label, backgroundImage, checked, onClick}) => {
	return (
		<>
			<input
				type = 'checkbox'
				name = {id}
				id = {id}
			/>
			<label 
				htmlFor = {id}
				style = {checked ? {
					backgroundImage: `url(${checkedImage})`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center'
				}: {}}
				onClick = { onClick }
			>
				{label}
				<img src= {backgroundImage} alt = {label}/>
			</label>
		</>	
	)
}

export default allergy