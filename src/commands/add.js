import printTodo from "../utils/printTodo.js"
import prompt from "../utils/prompt.js"
import read from "../utils/read.js"
import write from "../utils/write.js"

const add = async (options) => {
  const description = options[0] || (await prompt("Description: "))

  const { lastId, todos } = await read()
  const newId = lastId + 1
  const todo = {
    id: newId,
    description,
    done: false,
  }

  await write({
    lastId: newId,
    todos: [...todos, todo],
  })
  printTodo(todo)
}

export default add
