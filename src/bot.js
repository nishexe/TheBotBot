require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = "!"
const { readdirSync } = require('fs')
const { join } = require('path')
bot.commands = new Discord.Collection()
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for(const file of commandFiles){
  const command = require(join(__dirname, "commands", `${file}`))
  bot.commands.set(command.name, command)
}
bot.on('ready', ()=>{
    console.log(`${bot.user.tag} has logged in!`)
    bot.user.setActivity("with depression", {
        type: "PLAYING",
    })
})
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(PREFIX)) {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(!bot.commands.has(command)){
      message.reply('**Invalid Command!** *Type !help to get list of available commands.*')
    }
    else{
      try {
        bot.commands.get(command).run(bot, message, args);
      }catch (error){
        console.error(error);
      }
    }  
  }
  if(message.channel.id==='767321712970432522'){
    message.channel.send('=======================================')
  }
})
bot.login(process.env.DISCORDJS_BOT_TOKEN)