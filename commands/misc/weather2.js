const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'weather2',
      group: 'misc',
      memberName: 'weather2',
      description: 'get weather',
    })
  }

  run = async (message) => {
    var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
        q: 'New York, USA',
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: '"metric" or "imperial"',
        mode: 'xml, html'
    },
    headers: {
        'x-rapidapi-key': 'ea13172534msh217a15b02428969p1ea255jsne276b97567a2',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
    };

axios.request(options).then(function (response) {
    console.log(response.data);
    message.channel.send(response.data.main)
}).catch(function (error) {
	console.error(error);
});
  }
}
