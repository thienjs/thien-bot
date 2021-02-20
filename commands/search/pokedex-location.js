const Command = require('../../structures/Command');
const { MessageEmbed } = require('discord.js');
const versions = require('../../assets/json/pokedex-location');

module.exports = class PokedexLocationCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pokedex-location',
			aliases: [
				'pokemon-location',
				'pokémon-location',
				'pokédex-location',
				'pkmn-location',
				'pokedex-locate',
				'pokémon-locate',
				'pokemon-locate',
				'pokédex-locate',
				'pkmn-locate'
			],
			group: 'search',
			memberName: 'pokedex-location',
			description: 'Responds with the location data for a Pokémon.',
			clientPermissions: ['EMBED_LINKS'],
			credit: [
				{
					name: 'Pokémon',
					url: 'https://www.pokemon.com/us/',
					reason: 'Images, Original Game'
				},
				{
					name: 'PokéAPI',
					url: 'https://pokeapi.co/',
					reason: 'API'
				},
				{
					name: 'Serebii.net',
					url: 'https://www.serebii.net/index2.shtml',
					reason: 'Images'
				}
			],
			args: [
				{
					key: 'pokemon',
					prompt: 'What Pokémon would you like to get information on?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, { pokemon }) {
		try {
			const data = await this.client.pokemon.fetch(pokemon);
			if (!data) return msg.say('Could not find any results.');
			if (!data.gameDataCached) await data.fetchGameData();
			if (!data.encounters) await data.fetchEncounters();
			const desc = data.encounters.length
				? data.encounters
					.map(location => `${location.name} (${location.versions.map(v => versions[v]).join('/')})`)
					.join('\n')
				: 'Location Unknown';
			const embed = new MessageEmbed()
				.setColor(0xED1C24)
				.setAuthor(`#${data.displayID} - ${data.name}`, data.boxImageURL, data.serebiiURL)
				.setDescription(desc)
				.setThumbnail(data.spriteImageURL);
			return msg.embed(embed);
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
