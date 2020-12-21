import { connect } from 'react-redux'
import Todo from './Todo'


const ListTodo = ({ todos, filter }) => {
    let filterTodos

    if(filter === 'all') filterTodos = todos

    if(filter === 'completed') filterTodos = todos.filter(todo => todo.done === true)

    if(filter === 'incompleted') filterTodos = todos.filter(todo => todo.done === false)

    return (
        <div>
            {filterTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}

const mapStateToProps = props => {
    return {
        todos: props.tasksReducer.tasks,
        filter: props.visibilityFilterReducer
    }
}

export default connect(mapStateToProps)(ListTodo)