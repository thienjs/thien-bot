const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'))
const client = new commando.CommandoClient({
    owner: '251889136120758294',
    commandPrefix: '-'
});
const axios = require('axios');

client.login(config.token);

client.registry
	.registerDefaultTypes()
	.registerTypesIn(path.join(__dirname, 'types'))
	.registerGroups([
        ['mod', 'mod commands'],
        ['misc', 'misc commands'],
		['util-public', 'Utility'],
		['util', 'Utility (Owner)'],
		['info', 'Discord Information'],
		['random-res', 'Random Response'],
		['random-img', 'Random Image'],
		['random-seed', 'Seeded Randomizers'],
		['single', 'Single Response'],
		['auto', 'Automatic Response'],
		['events', 'Events'],
		['search', 'Search'],
		['analyze', 'Analyzers'],
		['games-sp', 'Single-Player Games'],
		['games-mp', 'Multi-Player Games'],
		['edit-image', 'Image Manipulation'],
		['edit-avatar', 'Avatar Manipulation'],
		['edit-meme', 'Meme Generators'],
		['edit-text', 'Text Manipulation'],
		['edit-number', 'Number Manipulation'],
		['voice', 'Play Audio'],
		['remind', 'Reminders'],
		['phone', 'Phone'],
		['code', 'Coding Tools'],
		['other', 'Other'],
		['roleplay', 'Roleplay']
	])
	.registerDefaultCommands({
		help: false,
		ping: false,
		prefix: false,
		commandState: false,
		unknownCommand: false
	})
	.registerCommandsIn(path.join(__dirname, 'commands'));


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});


