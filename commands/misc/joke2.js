const Commando = require('discord.js-commando')
const axios = require('axios')
const { Channel } = require('discord.js')

module.exports = class Joke extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'joke2',
      group: 'misc',
      memberName: 'joke2',
      description: 'sends a random joke',
    })
  }

  run = async (message) => {

    axios
      .get("https://official-joke-api.appspot.com/random_joke", )
      .then((res) => {
        message.channel.send(res.data.setup)
        message.channel.send(res.data.punchline)

      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }
}