import "todomvc-app-css/index.css";
import Input from './conponents/Input'
import TodoList from './conponents/TodoList'

const onSubmit = (todo) => {
 console.log(todo)
}

function App() {
  return (
    <div id='app'>
      <section className='todoapp'>
        <Input onSubmit={onSubmit}/>
        <TodoList/>
      </section>
    </div>
  );
}

export default App;
