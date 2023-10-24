const fs = require('node:fs')
const path = require('node:path')
const readline = require('node:readline')
const { once } = require('node:events')

const source = process.argv[2]
const sourceFilePath = path.resolve(__dirname, source)
const fileName = path.basename(sourceFilePath)
const fileNameWithoutUnderscorePrefix = fileName.replace(/^_/, '')
const sourceDirName = path.dirname(sourceFilePath)
const targetFilePath = path.resolve(sourceDirName, `_cp-${fileNameWithoutUnderscorePrefix}`)

console.log(sourceFilePath)

const cssCustomProperties = []
const emptyLineMatcher = new RegExp(/(?:^\s*$)/)
const scssVariableMatcher = new RegExp(/(?:^\$)([a-z][a-zA-Z0-9-_]+)(?:\:)(?:(?!.*default;).*;$)/)
const commentLineMatcher = new RegExp(/(?:^\s*)((?:\/\/)|(?:\/\*).*)/)

async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(sourceFilePath),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      const emptyLineMatch = line.match(emptyLineMatcher)
      const scssVariableMatch = line.match(scssVariableMatcher)
      const commentLineMatch = line.match(commentLineMatcher)

      if (emptyLineMatch != null && emptyLineMatch.length > 0 && cssCustomProperties[cssCustomProperties.length - 1] !== '') {
        cssCustomProperties.push('')
      } else if (scssVariableMatch != null && scssVariableMatch.length > 0) {
        cssCustomProperties.push(`  --${scssVariableMatch[1]}: #{$${scssVariableMatch[1]}};`)
      } else if (commentLineMatch != null && commentLineMatch.length > 0) {
        cssCustomProperties.push(`  ${commentLineMatch[1]}`)
      }
    })

    await once(rl, 'close');

    console.log('File processed.');
    console.log(cssCustomProperties);

    const fileContent = `:root {\n${cssCustomProperties.join('\n')}\n}`;

    fs.writeFile(targetFilePath, fileContent, (err) => {
      if (err) throw err
      console.log('File saved.');
    })
  } catch (err) {
    console.error(err);
  }
}

processLineByLine()

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })