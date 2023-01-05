import printTodo from "../utils/printTodo.js"
import read from "../utils/read.js"

const list = () => {
  const { todos } = read()

  todos.forEach(printTodo)
}

export default list
