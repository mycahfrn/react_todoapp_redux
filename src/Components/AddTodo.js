import { useState } from 'react'
import { connect } from 'react-redux'

import { addTask } from '../redux/actions/tasks'

const AddTodo = ({ addTask }) => {
    const [inputTask, setinputTask] = useState('');

    const SendTask = () => {
        addTask(inputTask)
        setinputTask('')
    }

    return (
        <div>
            <input
                type="text"
                value={inputTask}
                onChange={e => setinputTask(e.target.value)}
            />
            <button onClick={SendTask}>
                Save
            </button>
        </div>
    );
}

const mapDispatchToProps = {
    addTask
}

export default connect(null, mapDispatchToProps)(AddTodo);