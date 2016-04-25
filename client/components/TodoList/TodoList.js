'use strict'

import React from 'react'
import Todo from '../Todo/Todo'
import styles from './TodoList.css'

const TodoList extends React.Component {
	
	componentWillMount() {
		this.props.init()
	}
	
	render() {
		if (!this.props.todos.length) return null
		
		return (
			<ul className={styles.list}>
				{
					this.props.todos.map((todo) => {
						return (
							<li key={todo.id} className={styles.listItem}>
								<Todo
									name={todo.name}
									completed={todo.completed}
									onClick={() => this.props.onTodoClick(todo)}
									onDeleteClick={() => this.props.onTodoDeleteClick(todo)}
								/>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

export default TodoList;