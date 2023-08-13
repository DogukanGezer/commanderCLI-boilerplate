const createDevice = require('./gateways/createDevice')

module.exports = {
    name: 'createDevice',
    description: 'create a new device',
    command: 'device',
    subCommand: 'create <macAddress>',
    options: [
        {
            command: '-f, --facility <string>',
            description: 'facility name'
        }
    ],
    arguments: [{
        command: 'facility',
        description: 'facility name'
    }],
    handler: handler
}

async function handler(params) {
    const {
        args: macAddress,
        facility
    } = params

    const result = await createDevice(macAddress, facility)
}