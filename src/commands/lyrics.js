const lyricsFinder = require('lyrics-finder')
const Discord = require('discord.js')
module.exports = {
    name: "lyrics",
    async run(bot, message, args){
        const parameter = args.join(' ').trim().toLowerCase()
        if(parameter.includes("|")){
            const argument = args.join(' ').split("|")
            const artist = argument[0].trim().toLowerCase()
            const title = argument[1].trim().toLowerCase()
            let lyrics = await lyricsFinder(artist, title) || "Not Found!";
            const embed = new Discord.MessageEmbed()
            .setColor('#3C5186')
            .setTitle(`Lyrics for ${title.toUpperCase()} by ${artist.toUpperCase()}`)
            .setDescription(lyrics)
            message.channel.send(embed);

        }
        else{
            message.reply("**Invalid Format!**")
        }
    }
}