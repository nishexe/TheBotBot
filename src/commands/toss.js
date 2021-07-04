const Discord = require('discord.js')
module.exports = {
    name: "toss",
    async run(bot, message, args){
        const coinToss = Math.floor(Math.random() * 2) + 1;
        let string = ""
        if(coinToss == 1){
            string = (`**🪙  Coin Tossed!, *HEADS.*  🪙**`)
        }
        else{
            string = (`**🪙  Coin Tossed!, *TAILS.*  🪙**`)
        }
        const embed = new Discord.MessageEmbed()
	    .setColor('#CD113B')
	    .setTitle(string)
        message.channel.send(embed);
    }
}