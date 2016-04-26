'use strict'

import React from 'react'
import styles from './ToggleButton.css' // Add this

class ToggleButton extends React.Component {

  render() {
    let { label, onClick, active } = this.props

    // We do the same sore of thing here that we did with our Todo component.
    const classes = [ styles.toggle ]
    if (active) classes.push(styles.active)

    return (
      <button className={classes.join(' ')} onClick={onClick}>{label}</button>
    )
  }

}

export default ToggleButton