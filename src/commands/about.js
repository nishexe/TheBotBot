const Discord = require('discord.js')
module.exports = {
    name: "about",
    async run(bot, message, args){
        message.channel.send('**I am a simple bot created by einzeL, using Discord.js** *Type !help to get list of available commands.*')
    }
}