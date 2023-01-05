import { writeFileSync } from "node:fs"
import { TODOS_PATH } from "../run.js"

const write = (data) => {
  writeFileSync(TODOS_PATH, JSON.stringify(data), { encoding: "utf-8" })
}

export default write
