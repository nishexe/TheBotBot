module.exports = {
    name: "cuss",
    async run(bot, message, args){
        const cussArr = [
            'STFU',
            'F OFF',
            'A HOLE',
            'GTFO',
            'SUCK A POPSICLE'   
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