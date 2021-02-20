const Commando = require('discord.js-commando')

module.exports = class PingCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ping2',
      group: 'misc',
      memberName: 'ping2',
      description: 'test ping',
    })
  }

  async run(message, args) {
    message.channel.send('pong')

  }
}