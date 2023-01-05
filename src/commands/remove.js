import getTodoIdFromOptions from "../utils/getTodoIdFromOptions.js"
import printTodo from "../utils/printTodo.js"
import read from "../utils/read.js"
import write from "../utils/write.js"

const remove = (options) => {
  const idToBeRemoved = getTodoIdFromOptions(options)
  const { lastId, todos } = read()

  write({
    lastId,
    todos: todos.filter(({ id }) => id !== idToBeRemoved),
  })

  printTodo(todos.find(({ id }) => id === idToBeRemoved))
}

export default remove
