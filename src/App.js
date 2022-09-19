import "todomvc-app-css/index.css";
import Input from './conponents/Input'
import TodoList from './conponents/TodoList'



function App() {
  return (
    <div id='app'>
      <section className='todoapp'>
        <Input />
        <TodoList/>
      </section>
    </div>
  );
}

export default App;
