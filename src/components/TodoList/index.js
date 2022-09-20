// import { useState} from 'react'

const TodoList = ()=> {

  return(
    <>
      <section className='main'>
          <input id="toggle-all" type="checkbox" className="toggle-all" />
          <label htmlFor="toggle-all"></label>

          <ul className="todo-list">

            <li className='todo'>
              <div className="view">
                <input type="checkbox" className='toggle'/>
                <label htmlFor="">學習 React Template</label>
                <button className="destroy"></button>
              </div>
              <input type="text" className="edit" />
            </li>

            <li className="todo">
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label htmlFor="">學習在 React Template 中進行條件判斷</label>
                <button className="destroy"></button>
              </div>
              <input type="text" className="edit" />
            </li>

            <li className="todo">
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label htmlFor="">學習在 React Template 中使用迴圈 </label>
                <button className="destroy"></button>
              </div>
              <input type="text" className="edit" />
            </li>

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