import "todomvc-app-css/index.css";
import {HashRouter,Routes, Route} from "react-router-dom";
import React from 'react'

import Input from './components/Input'
import TodoList from './components/TodoList/index'



function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <div className='todoapp'>
        <Input />
        <Routes>
          <Route path="/" element={<TodoList/>}/>
        </Routes>
        </div>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
