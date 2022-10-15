import guid from '../utils'


export const initialItems = () => JSON.parse(localStorage.getItem("todos")) || []
 
export const newTodo = (label) => ({
  id: guid(),
  finished: false,
  text: label
})


// export const newTodo = (label) => ({
//   id: guid(),
//   finished: false,
//   text: label
// })



export default function todoss(){
  console.log('')
}

