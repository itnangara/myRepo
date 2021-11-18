const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//system uptime in seconds
console.log('system uptime: ' + os.uptime +' seconds')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

const path = require('path')
console.log(path.sep)

//path files
// reading files
const { readFileSync, writeFileSync } = require('fs')
const firstF = readFileSync('./content/firstFile.txt', 'utf8')
const secondF = readFileSync('./content/secondFile.txt', 'utf8')

writeFileSync(
    './content/resultFile.txt',
    `Result: ${firstF}\n${secondF}`
)