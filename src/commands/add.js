import printTodo from "../utils/printTodo.js"
import read from "../utils/read.js"
import write from "../utils/write.js"
import help from "./help.js"

const add = (options) => {
  const [description] = options

  if (!description) {
    help()

    process.exit(1)
  }

  const { lastId, todos } = read()
  const newId = lastId + 1
  const todo = {
    id: newId,
    description,
    done: false,
  }

  write({
    lastId: newId,
    todos: [...todos, todo],
  })
  printTodo(todo)
}

export default add
