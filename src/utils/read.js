import { readFileSync } from "node:fs"
import { TODOS_PATH } from "../run.js"

const read = () => {
  const content = readFileSync(TODOS_PATH, { flag: "a+", encoding: "utf-8" })

  return content
    ? JSON.parse(content)
    : {
        lastId: 0,
        todos: [],
      }
}

export default read
