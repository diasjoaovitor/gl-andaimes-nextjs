import path from 'path'

const buildCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f))
  return [
    `npx prettier --write ${files.join(' --file ')}`,
    `npx prettier --check .`,
    `npx next lint --fix --file ${files.join(' --file ')}`
  ]
}

const config = {
  '*.{js,jsx,ts,tsx}': [buildCommand]
}

export default config
