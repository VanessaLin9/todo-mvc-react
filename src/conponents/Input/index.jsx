import { useState } from 'react'
import useOnEnter from '../../hooks/useOnEnter'

const Input = () => {
 
  const [newTodo, setNewTodo] = useState('')
  const onAddTodo = useOnEnter(()=> {
    const todo = newTodo.trim()
    if(todo !== ''){
      console.log(todo)
      setNewTodo('')
    }
  }, [newTodo])

  return (
    <>
      <header>
          <h1>todos</h1>
        </header>
       
        <input 
          type="text"
          value={newTodo}
          onChange={(e)=> setNewTodo(e.target.value)}
          onKeyPress={onAddTodo}
          className="new-todo" 
          placeholder="需要做什麼？"
          autoFocus/>
    </>
  )
}

export default Input