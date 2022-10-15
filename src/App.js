import "todomvc-app-css/index.css";
import {HashRouter,Routes, Route} from "react-router-dom";
import React, {useReducer, useCallback, useEffect} from 'react'
import Input from './components/Input'
import TodoList from './components/TodoList/index'
import { initialItems, newTodo } from './reducer/useTodo'


function reducer(state, action){

  switch(action.type){
    // create new item
    case 'ADD-TODO' : 
      return [newTodo(action.payload), ...state]
    ;
    case 'DELE-TODO': {
      const id = action.payload;
      return state.filter((t)=> t.id !== id)
    };
    case 'TOGGLE': {
      const id = action.payload;
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
  const[state, dispatch] = useReducer(reducer, [], initialItems)

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


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state))
  },[state])

  //--------------------
  return (
    <HashRouter>
      <>
        <div className='todoapp'>
        <Input onAddTodos={addTodo}/>
        <Routes>
          <Route path="/" element={<TodoList 
            todos={state}
            onToggleTodos={atToggle}
            onDeleTodos={deleTodo}/>}/>
        </Routes>
        </div>
      </>
    </HashRouter>
  );
}

export default App;
