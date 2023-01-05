import getTodoIdFromOptions from "../utils/getTodoIdFromOptions.js"
import printTodo from "../utils/printTodo.js"
import read from "../utils/read.js"
import write from "../utils/write.js"

const done = (options) => {
  const idToBeUpdated = getTodoIdFromOptions(options)
  const { lastId, todos } = read()
  const updatedTodo = {
    ...todos.find(({ id }) => idToBeUpdated === id),
    done: true,
  }

  write({
    lastId,
    todos: todos.map((todo) =>
      todo.id === idToBeUpdated ? updatedTodo : todo
    ),
  })

  printTodo(updatedTodo)
}

export default done
