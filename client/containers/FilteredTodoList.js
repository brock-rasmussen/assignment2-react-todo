import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { updateTodo, deleteTodo, listTodos } from '../actions'
	
const mapStateToProps = (state) => {
	let todos = state.todos.items
	
	switch (state.filter) {
		case 'ACTIVE':
			todos = todos.filter((todo) => !todo.completed)
			break
		case 'COMPLETED':
			todos = todos.filter((todo) => todo.completed)
			break
	}
	
	return { todos }
}

const mapDispatchToProps = (dispatch) => ({
	init() {
		dispatch(listTodos())
	},
	onTodoClick(todo) {
		dispatch(updateTodo(todo.id, { completed: !todo.completed }))
	},
	onTodoDeleteClick(todo) {
		dispatch(deleteTodo(todo.id))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)