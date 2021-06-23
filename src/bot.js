require('dotenv').config()

const{ Client } = require('discord.js')
const client = new Client()
const PREFIX = "!"

client.on('ready', ()=>{
    console.log(`${client.user.tag} has logged in!`)
})

client.on('message', (message)=>{
    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/)
        /*----------------------------------------*/
        if(CMD_NAME.toLowerCase() === 'hello'){
            if(message.author.username === ''){
                message.reply('Hello, you are the master of masters!')
            }
            else if(message.author.username === ''){
                message.reply('Hello creator, how you doing?')
            }
            else{
                message.reply('Hello, there!')
            }
        } 
    }
})
client.login(process.env.DISCORDJS_BOT_TOKEN)
