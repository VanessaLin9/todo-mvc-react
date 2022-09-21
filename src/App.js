import "todomvc-app-css/index.css";
import {HashRouter,Routes, Route} from "react-router-dom";
import React, {useReducer, useCallback}from 'react'

import Input from './components/Input'
import TodoList from './components/TodoList/index'
import { initialItems } from './reducer/useTodo'
import guid from './utils'

const newTodo = (label) => ({
  id: guid(),
  finished: false,
  text: label
})

function reducer(state, action){
  console.log(state)
  switch(action.type){
    // create new item
    case 'ADD-TODO' : 
      return [newTodo(action.payload), ...state];
    case 'DELE-TODO': {
      const id = action.payload;
      return state.filter((t)=> t.id !== id)
    }
    default:
      return state;
  }
}


function App() {
  const[state, dispatch]=useReducer(reducer, initialItems)

  //設定dispatch
  const addTodo = useCallback((label:string)=>{
    dispatch({type: 'ADD-TODO', payload: label})
  }, [dispatch])

  const deleTodo = useCallback((id:string)=>{
    dispatch({type: 'DELE-TODO', payload: id})
  }, [dispatch])


  //--------------------
  return (
    <HashRouter>
      <React.Fragment>
        <div className='todoapp'>
        <Input onAddTodos={addTodo}/>
        <Routes>
          <Route path="/" element={<TodoList 
            todos={state}
            onDeleTodos={deleTodo}/>}/>
        </Routes>
        </div>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
