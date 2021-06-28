require('dotenv').config()
const fetch = require('node-fetch')
const{ Client } = require('discord.js')
const client = new Client()
const PREFIX = "!"
client.login(process.env.DISCORDJS_BOT_TOKEN) /* If you are viewing this in GitHub, please provide your DiscordBot API Key in a .env file*/
client.on('ready', ()=>{
    console.log(`${client.user.tag} has logged in!`)
})
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
let city_temp = 0
let city_name = ''
let city_humidity = 0
let city_windspeed = 0
let city_description = ''
let weather_error = false
let weather = {
    "apiKey": process.env.WEATHER_API, /* If you are viewing this in GitHub, please provide your OpenWeather API Key in a .env file*/
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid="
            +this.apiKey
        ).then((response)=>response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        try{
        const { name } = data;
        const { description } = data.weather[0]
        const { feels_like, humidity } = data.main
        const { speed } = data.wind
        city_temp = feels_like
        city_name = name
        city_humidity = humidity
        city_windspeed = speed
        city_description = description
        }
        catch(e){
            weather_error = true
        }
    },
}
client.on('message', (message)=>{
    if(message.content.startsWith(PREFIX) && message.author.bot === false){
        const [CMD_NAME, ...args] = message.content
        .toLowerCase()
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/)
        if(CMD_NAME === 'hello' || CMD_NAME ==='hi'){
            if(message.author.username === 'DP'){
                message.reply('*Hello, you are the master of masters!*')
            }
            else if(message.author.username === 'einzeL'){
                message.reply('*Hello **master**, how you doing?*')
            }
            else{
                const randomGreetIdx = Math.floor(Math.random() * greetArr.length) + 0;
                const randomGreetMsg = greetArr[randomGreetIdx]
                message.reply(randomGreetMsg)
            }
        }
        else if(CMD_NAME==='help'){
            const Discord = require('discord.js');
            const embed = new Discord.MessageEmbed()
	        .setColor('#CD113B')
	        .setTitle('LIST OF AVAIABLE COMMANDS:')
	        .addFields(
		        { name: '!hi 👋', value: "returns a greeting message." },
                { name: '!weather (cityname) ⛅', value: "returns the weather of that city." },
                { name: '!about 🤖', value: "shows info about the bot." },
                { name: '!toss 🪙', value: "tosses a coin." },
                { name: '!rolldice 🎲', value: "rolls a dice." },
                { name: '!help 👨‍🔧', value: "shows all available bot commands." },
            ).setFooter('*created by einzeL*')
            message.channel.send(embed);
        }
        else if(CMD_NAME ==='about'){
            message.channel.send('**I am a simple bot created by einzeL, using Discord.js** *Type !help to get list of available commands.*')
        }
        else if(CMD_NAME ==='rolldice' || CMD_NAME === 'rolladice'){
            const diceNum = Math.floor(Math.random() * 6) + 1;
            message.channel.send(`**🎲  Dice Rolled, dice shows *${diceNum}*   🎲**`)
        }
        else if(CMD_NAME ==='flipcoin' || CMD_NAME === 'toss'){
            const coinToss = Math.floor(Math.random() * 2) + 1;
            if(coinToss == 1){
                message.channel.send(`**🪙  Coin Tossed!, *HEADS.*  🪙**`)
            }
            else{
                message.channel.send(`**🪙  Coin Tossed!, *TAILS.*  🪙**`)
            }
        }
        else if(CMD_NAME==='weather'){
            if(args.length===0){
                message.reply('**Please provide a city name.**')
            }
            else{
                weather.fetchWeather(args.toString())
                setTimeout(function(){
                    if(weather_error === false){
                        setTimeout(function(){
                            const Discord = require('discord.js');
                            const embed = new Discord.MessageEmbed()
                            .setColor('#1687A7')
                            .setTitle(`Weather Report For ${city_name}`)
                            .addFields(
                            { name: '🌤️ Temp:', value: `${city_temp} °C` },
                            { name: '💨 WindSpeed:', value: `${city_windspeed} km/h` },
                            { name: '💦 Humidity:', value: `${city_humidity} %` },
                            ).setFooter(`${city_description}`)
                            message.channel.send(embed);
                        },900); 
                    }
                    else{
                        message.channel.send("**Please enter a valid cityname!**")
                        weather_error = false
                    }
                },500)
            }
        }
        else{
            message.reply('**Invalid Command!** *Type !help to get list of available commands.*')
        }   
    }
    if(message.channel.id==='767321712970432522'){
        if(message.author.bot || message.content.startsWith(PREFIX)){
            return
        }
        else{
            message.channel.send('==================================')
        }
    }
})