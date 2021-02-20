const Commando = require('discord.js-commando')
module.exports = class ClearCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'clear',
			group: 'misc',
			memberName: 'clear',
            description: 'this clears messages',
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['MANAGE_MESSAGES'],
            ownerOnly: true,
		});
	}

    run = async (message, args) => {
        if(!args[0]) return message.reply("please enter the amount of messages that you want to clear");
        if(isNaN(args[0])) return message.reply("please type a number");

        if(args[0] > 100) return message.reply("you cannot delete more than 100 messages");
        if(args[0] < 1) return message.reply("you must delete at least 1 message")

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });


    }
};