const commander = require('./infrastructure/commander')
require('dotenv/config')

async function main() {
    await commander.init()
}

main()