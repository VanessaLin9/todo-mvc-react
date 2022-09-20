const TodoItem = (props) => {
  const {id, text} = props
  return (
    <li className='todo' key={id}>
      <div className="view">
        <input type="checkbox" className='toggle'/>
        <label htmlFor="">{text}</label>
        <button className="destroy"></button>
      </div>
      <input type="text" className="edit" />
    </li>
  )
}

export default TodoItem