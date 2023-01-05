const printTodo = ({ id, done, description }) => {
  console.log(`[${done ? "X" : " "}] #${id} ${description}`)
}

export default printTodo
