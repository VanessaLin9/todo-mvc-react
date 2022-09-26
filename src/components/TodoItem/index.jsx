import {memo} from 'react'

const TodoItem = memo((props) => {
  const {id, text, onDeleTodos, onToggleTodos} = props
  return (
    <li className='todo' key={id}>
      <div className="view">
        <input type="checkbox" className='toggle' onClick={()=> onToggleTodos(id)}/>
        <label htmlFor="">{text}</label>
        <button className="destroy" onClick={() => onDeleTodos(id)}></button>
      </div>
      <input type="text" className="edit" />
    </li>
  )
})

export default TodoItem