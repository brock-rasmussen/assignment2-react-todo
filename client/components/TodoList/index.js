'use strict'

import React from 'react'
import Todo from '../Todo'
import styles from './TodoList.css'

class TodoList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    // Note the onDeleteClick handler
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

export default TodoList