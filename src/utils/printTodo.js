const printTodo = ({ id, done, description }) => {
  console.log(`[${id}] [${done ? "X" : " "}] ${description}`)
}

export default printTodo
