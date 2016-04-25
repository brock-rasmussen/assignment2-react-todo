'use strict'

import React from 'react'
import FilterLink from '../../containers/FilterLink'
import styles from './Filters.css'

class Filters extends React.Component {
	
	render() {
		return (
			<div className={styles.filters>
				<FilterLink label="All" filter="ALL" />
				<FilterLink label="Active" filter="ACTIVE" />
				<FilterLink label="Completed" filter="COMPLETED" />
			</div>
		)
	}
	
}

export default Filters