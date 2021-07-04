const Discord = require('discord.js')
module.exports = {
    name: "roll",
    async run(bot, message, args){
        const diceNum = Math.floor(Math.random() * 6) + 1;
        let string = `**🎲  Dice Rolled, dice shows *${diceNum}*   🎲**`
        const embed = new Discord.MessageEmbed()
	    .setColor('#CD113B')
	    .setTitle(string)
        message.channel.send(embed);
    }
}