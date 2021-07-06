const Discord = require('discord.js')
module.exports = {
    name: "help",
    async run(bot, message, args){
        const embed = new Discord.MessageEmbed()
	    .setColor('#ca7322')
	    .setTitle('LIST OF AVAIABLE COMMANDS:')
	    .addFields(
		    { name: '!hi 👋', value: "returns a greeting message." },
            { name: '!roll 🎲', value: "rolls a dice." },
            { name: '!toss 🪙', value: "tosses a coin." },
            { name: '!cuss 🤬', value: "cusses the tagged user." },
            { name: '!about 🤖', value: "shows info about the bot." },
            { name: '!weather (cityname) ⛅', value: "returns the weather of that city." },
            { name: '!rps (rock/paper/scissors) 🪨 📃✂️', value: "plays rock paper scissors!" },
            { name: '!lyrics (artist) | (song) 🎵', value: "fetches lyrics of the song. *(only if availble through google)*" },
            { name: '!help 👨‍🔧', value: "shows all available bot commands." },
        ).setFooter('*created by einzeL*')
        message.channel.send(embed);
    }
}