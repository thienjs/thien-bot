
const Command = require('../../structures/Command');

module.exports = class MathCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'gipdate',
			group: 'misc',
			memberName: 'gipdate',
			description: 'Evaluates a math expression.'
		});
	}

	run(msg) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var gipdate = new Date('8/01/2021')
        today = new Date(`${mm}/${dd}/${yyyy}`)
        const diffTime = Math.abs(gipdate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
			return msg.reply(`${diffDays} days until gip comes back`);
		}
	}
