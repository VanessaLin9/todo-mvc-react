import {memo, useState} from 'react'
import useDBclick from '../../hooks/useDBclick'
import useOnEnter from '../../hooks/useOnEnter'

const TodoItem = memo((props) => {
  const {todo, onDeleTodos, onToggleTodos} = props
  const [editing, setEditing] = useState(false)
  const [newInput, setNewInput] = useState(todo.text)

  // TODO finish editing
  const onEnter = useOnEnter()
  const handleViewClick = useDBclick(null, ()=> setEditing(true))

  return (
    <li className={`${editing?'editing':''} ${todo.finished?'completed':''}`} key={todo.id} onClick={handleViewClick}>
      <div className="view">
        <input type="checkbox" className='toggle' onClick={()=> onToggleTodos(todo.id)}/>
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => onDeleTodos(todo.id)}></button>
      </div>
      {editing && (
       <input 
        type="text" 
        value ={newInput} 
        className="edit"
        onChange={(e)=> setNewInput(e.target.value)} />
      )}
    </li>
  )
})

export default TodoItem