import { writeFile } from "node:fs/promises"
import { TODOS_PATH } from "../run.js"

const write = async (data) => {
  await writeFile(TODOS_PATH, JSON.stringify(data), { encoding: "utf-8" })
}

export default write
