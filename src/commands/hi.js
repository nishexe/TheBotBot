module.exports = {
    name: "hi",
    async run(bot,message,args){
        const greetArr = [
            'Hello, There!',
            'Hi, hope you doing fine.',
            'Wazzup my G!',
            'Are you gaming my G?',
            'Game On Let\'s GO',
            'Lessss GOOO',
            'Hi,how are you let\'s game!',
            'Hola! ke pasa ese?',
            'Zzzz..hmm...hello!',
            'Did you know, video games >>> sex!'
        ]
        const idx = Math.floor(Math.random()*greetArr.length)
        const greetMsg = greetArr[idx]
        message.reply(`**${greetMsg}**`)
    }
}