const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = class DogCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'dog2',
      group: 'misc',
      memberName: 'dog2',
      description: 'Displays a random picture of a dog',
    })
  }

  run = async (message) => {
    axios
      .get('https://random.dog/woof.json')
      .then((res) => {
        console.log('RES:', res.data.url)
        message.reply(res.data.url)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }
}
