import TodoItem from '../TodoItem'
import {memo} from 'react'

const TodoList = memo((props)=> {
  const {todos, onDeleTodos, onToggleTodos} = props
  return(
    <>
      <section className='main'>
          <input id="toggle-all" type="checkbox" className="toggle-all" />
          <label htmlFor="toggle-all"></label>

          <ul className="todo-list">

            {todos.map((todo) => (
              <TodoItem 
              key={todo.id}
              todo={todo}
              onToggleTodos={onToggleTodos}
              onDeleTodos={onDeleTodos}/>
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
})

export default TodoList