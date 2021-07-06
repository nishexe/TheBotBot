const Discord = require('discord.js')
module.exports = {
    name: "rps",
    async run(bot, message, args){
        if(!args[0]){
            message.channel.send('**Please provide your choice!**')    
        }
        else{
            let userInput = args.join(" ").toString().toLowerCase()
            if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
                let userChoice = args.join(" ").toString().substr(0,1)
                const rps = ['r','p','s']
                const idx = Math.floor(Math.random()* 3)
                const botChoice = rps[idx]
                let winStatus = ""
                let userChoiceEmoji
                let botChoiceEmoji
                if(userChoice === botChoice){
                    if(userChoice === 'r'){
                        userChoiceEmoji = "🪨"
                        botChoiceEmoji = userChoiceEmoji
                    }
                    if(userChoice === 'p'){
                        userChoiceEmoji = "📃"
                        botChoiceEmoji = userChoiceEmoji
                    }
                    if(userChoice === 'r'){
                        userChoiceEmoji = "✂️"
                        botChoiceEmoji = userChoiceEmoji
                    }
                    winStatus = "**Its a draw!!**"
                }
                else if(userChoice === 'r'){
                    userChoiceEmoji = "🪨"
                    if(botChoice === 'p'){
                        winStatus = "**Bot Wins!**"
                        botChoiceEmoji = "📃"
                    }
                    else{
                        botChoiceEmoji = "✂️"
                        winStatus = "**You Win!**"
                    }
                }
                else if(userChoice === 'p'){
                    userChoiceEmoji = "📃"
                    if(botChoice === 's'){
                        botChoiceEmoji = "✂️"
                        winStatus = "**Bot Wins!**"
                    }
                    else{
                        botChoiceEmoji = "🪨"
                        winStatus = "**You Win!**"
                    }
                }
                else if(userChoice === 's'){
                    userChoiceEmoji = "✂️"
                    if(botChoice === 'r'){
                        botChoiceEmoji = "🪨"
                        winStatus = "**Bot Wins!**"
                    }
                    else{
                        botChoiceEmoji = "📃"
                        winStatus = "**You Win!**"
                    }
                }
                message.channel.send(userChoiceEmoji)
                message.channel.send('**   ** *🆚*')
                message.channel.send(botChoiceEmoji)
                message.reply(winStatus) 
            }
            else{
                message.channel.send("**Please enter a valid choice!**")
            } 
        }   
    }
}