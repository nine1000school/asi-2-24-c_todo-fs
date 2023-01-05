import help from "../commands/help.js"

const getTodoIdFromOptions = (options) => {
  const id = Number.parseInt(options[0], 10)

  if (!id) {
    help()

    process.exit(1)
  }

  return id
}

export default getTodoIdFromOptions
