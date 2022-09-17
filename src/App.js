import './App.css';
import "todomvc-app-css/index.css";

function App() {
  return (
    <div id='app'>
      <section className='todoapp'>
        <header>
          <h1>todos</h1>
        </header>
        <input type="text" class="new-todo" autofocus placeholder="需要做什麼？"/>

        <section className='main'>
          <input id="toggle-all" type="checkbox" class="toggle-all" />
          <label for="toggle-all"></label>

          <ul className="todo-list">

            <li className='todo'>
              <div className="view">
                <input type="checkbox" className='toggle'/>
                <label for="">學習 React Template</label>
                <button className="destroy"></button>
              </div>
              <input type="text" className="edit" />
            </li>

            <li className="todo">
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label for="">學習在 React Template 中進行條件判斷</label>
                <button className="destroy"></button>
              </div>
              <input type="text" className="edit" />
            </li>

            <li className="todo">
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label for="">學習在 React Template 中使用迴圈 </label>
                <button className="destroy"></button>
              </div>
              <input type="text" className="edit" />
            </li>

          </ul>
        </section>

        <footer></footer>
      </section>
    </div>
  );
}

export default App;
