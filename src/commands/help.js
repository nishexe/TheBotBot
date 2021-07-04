const Discord = require('discord.js')
module.exports = {
    name: "help",
    async run(bot, message, args){
        const embed = new Discord.MessageEmbed()
	    .setColor('#CD113B')
	    .setTitle('LIST OF AVAIABLE COMMANDS:')
	    .addFields(
		    { name: '!hi 👋', value: "returns a greeting message." },
            { name: '!weather (cityname) ⛅', value: "returns the weather of that city." },
            { name: '!about 🤖', value: "shows info about the bot." },
            { name: '!toss 🪙', value: "tosses a coin." },
            { name: '!roll 🎲', value: "rolls a dice." },
            { name: '!rps (your choice) 🪨 📃✂️', value: "plays rock paper scissors!" },
            { name: '!help 👨‍🔧', value: "shows all available bot commands." },
        ).setFooter('*created by einzeL*')
        message.channel.send(embed);
    }
}