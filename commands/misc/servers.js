const Commando = require('discord.js-commando')

module.exports = class ServerCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'servers',
        group: 'misc',
        memberName: 'servers',
        description: 'test ping',
      })
    };
    
  
    

  
    
  }