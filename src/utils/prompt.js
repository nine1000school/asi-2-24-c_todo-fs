import { createInterface } from "node:readline/promises"

const prompt = async (str) => {
  const rl = createInterface(process.stdin)

  process.stdout.write(str)

  const output = await rl.question("")

  await rl.close()

  return output
}

export default prompt
