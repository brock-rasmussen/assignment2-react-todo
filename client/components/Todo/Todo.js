import React from 'react'
import styles from './Todo.css'

const Todo = (props) => {
	const todoClass = [ styles.todo ]
	if (props.completed) todoClasses.push(styles.completed)
	
  return (
		<div className={todoClasses.join(' ')}>
    	<span className={styles.todoText} onClick={() => props.onClick()}>{props.name}</span>
			&nbsp
		</div>
  )
}

export default Todo