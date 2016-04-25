'use strict'

import React from 'react'
import styles from './ToggleButton.css'
	
class ToggleButton extends React.Component {
	
	render() {
		let { label, onClick, active } = this.props
		
		const classes = [ styles.toggle ]
		if (active) classes.push(styles.active)
		
		return (
			<button className={classes.join(' ')} onClick={onClick}>{label}</button>
		)
	}
}

export default ToggleButton