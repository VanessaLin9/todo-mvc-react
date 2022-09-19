import { useState } from 'react'

const Input = (props) => {
  const {onSubmit} = props
  const [newTodo, setNewTodo] = useState('')
  const atSubmit = () => {
   
  }

  return (
    <>
      <header>
          <h1>todos</h1>
        </header>
       
        <input 
          type="text"
          value={newTodo}
          onChange={(e)=> setNewTodo(e.target.value)}
          
          className="new-todo" 
          placeholder="需要做什麼？"
          autoFocus/>
    </>
  )
}

export default Input