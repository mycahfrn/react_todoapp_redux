import { connect } from 'react-redux'

import { toggleDone, deleteTask } from '../redux/actions/tasks'

const Todo = ({ todo, toggleDone, deleteTask }) => {
    return (
        <div>
            <h2 className={todo.done ? 'isDone' : ''}>{todo.content}</h2>
            <button onClick={() => toggleDone(todo.id)}>Change</button>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = {
    toggleDone,
    deleteTask
}

export default connect(null, mapDispatchToProps)(Todo)