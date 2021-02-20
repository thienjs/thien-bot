const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = class DadJoke extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'dadjoke',
      group: 'misc',
      memberName: 'dadjoke',
      description: 'sends a random dad joke',
    })
  }

  run = async (message) => {

    axios
      .get("https://icanhazdadjoke.com/").set("Accept", "application/json"
      )
      .then((res) => {
        console.log('RES:', res.joke)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }
}