'use strict'

import { connect } from 'react-redux'
import ToggleButton from '../components/ToggleButton'
import { setVisibilityFilter } from '../actions'
	
const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick() {
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToggleButton)