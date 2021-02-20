const Commando = require('discord.js-commando')
module.exports = class MeowCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'meow2',
			group: 'misc',
			memberName: 'meow2',
            description: 'Replies with a meow, kitty cat.',
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['MANAGE_MESSAGES'],
            ownerOnly: true,
            throttling: {
                usages: 2,
                duration: 10,
            }
		});
	}

	run(message) {
		return message.say('Meow!');
	};
};