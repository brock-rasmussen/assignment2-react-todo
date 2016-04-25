'use strict'

import React from 'react'
import AddTodoContainer from '../../containers/AddTodoContainer'
import FilteredTodoList from '../../containers/FilteredTodoList'
import Filters from '../Filters/Filters'
import styles from './App.css'

class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>
				<AddTodoContainer />
				<Filters />
				<FilteredTodoList />
      </div>
    )
  }

}

export default App