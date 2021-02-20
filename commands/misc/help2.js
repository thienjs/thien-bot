const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class HelpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'help2',
      group: 'misc',
      memberName: 'help2',
      description: 'here to help',
    })
  }

  async run(message, args) {
    const embed = new MessageEmbed()
      .addFields(
        {
          name: `${message.guild.name} commands`,
          value: 'add, cat, dog, joke, ping, help, user-info'
        }
      )

    message.channel.send(embed)

  }
}