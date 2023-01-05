import { resolve } from "node:path"
import add from "./commands/add.js"
import help from "./commands/help.js"
import list from "./commands/list.js"
import remove from "./commands/remove.js"
import toggle from "./commands/toggle.js"

export const TODOS_PATH = resolve(process.env.HOME, ".todos.json")

const commands = {
  add,
  help,
  list,
  remove,
  toggle,
}

const run = async (args) => {
  const [commandName, ...options] = args
  const command = commands[commandName]

  if (!command) {
    help()

    process.exit(1)
  }

  await command(options)
}

export default run
