// import { useState} from 'react'
import TodoItem from '../TodoItem'

const TodoList = (props)=> {
const {list} = props
  return(
    <>
      <section className='main'>
          <input id="toggle-all" type="checkbox" className="toggle-all" />
          <label htmlFor="toggle-all"></label>

          <ul className="todo-list">

            {list.map((todo) => (
              <TodoItem 
              text={todo.text}
              key={todo.id}
              id={todo.id}/>
            ))}

          </ul>
        </section>

        <footer className='footer'>
          <span className='todo-count'> <strong>3</strong> items left </span>
          <ul className='filters'>
            <li>
              <a href="#/all">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">
            Clear completed
          </button>
        </footer>
    </>
  )
}

export default TodoList