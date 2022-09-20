import "todomvc-app-css/index.css";
import {HashRouter,Routes, Route} from "react-router-dom";
import React, {useState} from 'react'
import guid from './utils'

import Input from './components/Input'
import TodoList from './components/TodoList/index'

const initialItems = [{
  id: guid(),
  finished: false,
  text: 'yoyo'
}, {
  id: guid(),
  finished: false,
  text: 'Vuuuue'
}]

function App() {
  const [todoList, setTodoList] = useState(initialItems)
  return (
    <HashRouter>
      <React.Fragment>
        <div className='todoapp'>
        <Input />
        <Routes>
          <Route path="/" element={<TodoList list={todoList}/>}/>
        </Routes>
        </div>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
