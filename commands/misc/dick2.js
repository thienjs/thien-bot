const Commando = require('discord.js-commando')
const axios = require('axios')
const { Channel } = require('discord.js')

module.exports = class Joke extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'dick2',
      group: 'misc',
      memberName: 'dick2',
      description: 'dirty jokes',
    })
  }

  run = async (message) => {

    axios
      .get("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?type=single", )
      .then((res) => {
        message.channel.send(res.data.joke)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }
}