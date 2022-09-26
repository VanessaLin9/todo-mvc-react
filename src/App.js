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
  // console.log(state)
  switch(action.type){
    // create new item
    case 'ADD-TODO' : 
      return [newTodo(action.payload), ...state];
    case 'DELE-TODO': {
      const id = action.payload;
      return state.filter((t)=> t.id !== id)
    };
    case 'TOGGLE': {
      const id = action.payload;
      // console.log(state)
      // console.log(id)
      return state.map(t => {
        if(t.id === id) return {
          ...t,
          finished: !t.finished
        }
        return t
      })
    }
    default:
      return state;
  }
}


function App(){
  const[state, dispatch]=useReducer(reducer, initialItems)

  //設定dispatch
  const addTodo = useCallback((label:string)=>{
    dispatch({type: 'ADD-TODO', payload: label})
  }, [dispatch])

  const deleTodo = useCallback((id:string)=>{
    dispatch({type: 'DELE-TODO', payload: id})
  }, [dispatch])

  //TODO toggle finish
  const atToggle = useCallback((id: string)=>{
    dispatch({type: 'TOGGLE', payload: id})
  },[dispatch])

  //TODO 修改todo


  //TODO filter


  //--------------------
  return (
    <HashRouter>
      <React.Fragment>
        <div className='todoapp'>
        <Input onAddTodos={addTodo}/>
        <Routes>
          <Route path="/" element={<TodoList 
            todos={state}
            onToggleTodos={atToggle}
            onDeleTodos={deleTodo}/>}/>
        </Routes>
        </div>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
