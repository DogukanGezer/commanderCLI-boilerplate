const { Command, Option } = require('commander');
const program = new Command();
const fs = require('fs');

//reaad all usecases
async function init() {
    let version = JSON.parse(fs.readFileSync(`./package.json`)).version
    program.version(version)

    for (let file of fs.readdirSync('./usecases')) {
        const index = require(`../../usecases/${file}/handler.js`)

        let command = new Command(index.command)
        let subCommand = command.command(index.subCommand)

        if (index.options && index.options.length > 0) {
            index.options.forEach(x => {
                subCommand.option(x.command, x.description)
            })
        }
        subCommand.action(async (arg, options) => {
            index.handler({ args: arg, ...options })
        })

        program.addCommand(command)
    }

    program.parse(process.argv)
}

module.exports = {
    init
}