import printTodo from "../utils/printTodo.js"
import read from "../utils/read.js"

const list = async () => {
  const { todos } = await read()

  todos.forEach(printTodo)
}

export default list
