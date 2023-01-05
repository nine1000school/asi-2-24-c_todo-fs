import printTodo from "../utils/printTodo.js"
import read from "../utils/read.js"
import write from "../utils/write.js"
import help from "./help.js"

const remove = (options) => {
  const idToBeRemoved = Number.parseInt(options[0], 10)

  if (!idToBeRemoved) {
    help()

    process.exit(1)
  }

  const { lastId, todos } = read()

  write({
    lastId,
    todos: todos.filter(({ id }) => id !== idToBeRemoved),
  })

  printTodo(todos.find(({ id }) => id === idToBeRemoved))
}

export default remove
