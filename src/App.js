import './App.css';
import AddTodo from './Components/AddTodo'
import ListTodos from './Components/ListTodos'
import VisibilityFilter from './Components/VisibilityFilter'

function App() {
  return (
    <main>
      <AddTodo />
      <VisibilityFilter/>
      <ListTodos />
    </main>
  );
}

export default App;
