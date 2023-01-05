import getTodoIdFromOptions from "../utils/getTodoIdFromOptions.js"
import printTodo from "../utils/printTodo.js"
import read from "../utils/read.js"
import write from "../utils/write.js"

const toggle = (options) => {
  const idToBeUpdated = getTodoIdFromOptions(options)
  const { lastId, todos } = read()
  const todo = todos.find(({ id }) => idToBeUpdated === id)
  const updatedTodo = {
    ...todo,
    done: !todo.done,
  }

  write({
    lastId,
    todos: todos.map((todo) =>
      todo.id === idToBeUpdated ? updatedTodo : todo
    ),
  })

  printTodo(updatedTodo)
}

export default toggle
