const c = require('json-schema-to-typescript')
const w = require('fs')

async function generate() {
  const schemataDirectory = `${__dirname}/json/`
  w.writeFileSync(`${__dirname}/../__generated__/json-schemata.d.ts`, await c.compileFromFile(`${schemataDirectory}__www_example-2020-08.schema.json`, {cwd: schemataDirectory}))
}

generate()
