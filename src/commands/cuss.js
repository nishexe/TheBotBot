module.exports = {
    name: "cuss",
    async run(bot, message, args){
        const cussArr = [
            'Are you dumb?',
            'Man! Get out of here..!',
            'I hate you.',
            'Shut Upppp!',
            'Boohooo!!',
            'Oh piss off.!',
            'lololololololl'  
        ]
        const idx = Math.floor(Math.random()* cussArr.length)
        const cussString = cussArr[idx]
        const taggedUser = message.mentions.members.first()
        if(!args[0]){
            message.channel.send('**Please tag a user!**')    
        }
        else if(taggedUser === undefined){
            message.channel.send(`**User doesn't exist!**`)
        }
        else{
            message.channel.send(`${taggedUser}`+ ` 🤬 **${cussString}**`)
        }
    }  
}