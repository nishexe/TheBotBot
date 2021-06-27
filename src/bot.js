require('dotenv').config()
const fetch = require('node-fetch')
const{ Client } = require('discord.js')
const client = new Client()
const PREFIX = "!"
client.login(process.env.DISCORDJS_BOT_TOKEN) /* If you are viewing it in GitHub, please provide your DiscordBot API Key in a .env file*/
client.on('ready', ()=>{
    console.log(`${client.user.tag} has logged in!`)
})
const greetArr = [
    'Hello, There!',
    'Hi, hope you doing fine.',
    'Wassup',
    'Are you gaming my G?',
    'Game On Let\'s GO',
    'Lessss GOOO'
]
let city_temp = 0
let city_name = ''
let city_humidity = 0
let city_windspeed = 0
let city_description = ''
let weather = {
    "apiKey": process.env.WEATHER_API, /* If you are viewing it in GitHub, please provide your OpenWeather API Key in a .env file*/
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
        const { name } = data;
        const { icon, description } = data.weather[0]
        const { feels_like, humidity } = data.main
        const { speed } = data.wind
        city_temp = feels_like
        city_name = name
        city_humidity = humidity
        city_windspeed = speed
        city_description = description
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
                message.reply('Hello, you are the master of masters!')
            }
            else if(message.author.username === 'einzeL'){
                message.reply('Hello **master**, how you doing?')
            }
            else{
                message.reply("Hello my G")
            }
        }
        else if(CMD_NAME==='help'){
            const Discord = require('discord.js');
            const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('#CD113B')
	        .setTitle('LIST OF AVAIABLE COMMANDS:')
	        .addFields(
		        { name: '!hello 👋', value: "returns a greeting message." },
                { name: '!weather (cityname) ⛅', value: "returns the weather of that city." },
                { name: '!about 🤖', value: "shows info about the bot." },
                { name: '!help 👨‍🔧', value: "shows all available bot commands." },
            ).setFooter('*created by einzeL*')
            message.channel.send(exampleEmbed);
        }
        else if(CMD_NAME ==='about'){
            message.channel.send('**I am a simple bot created by einzeL, using Discord.js** *Type !help to get list of available commands.*')
        }
        else if(CMD_NAME==='weather'){
            if(args.length===0){
                message.reply('**Please provide a city name.**')
            }
            else{
                weather.fetchWeather(args.toString())
                setTimeout(function(){
                    const Discord = require('discord.js');
                    const exampleEmbed = new Discord.MessageEmbed()
	                .setColor('#1687A7')
	                .setTitle(`Weather Report For ${city_name}`)
	                .addFields(
		            { name: '🌤️ Temp:', value: `${city_temp} °C` },
                    { name: '💨 WindSpeed:', value: `${city_windspeed} km/h` },
                    { name: '💦 Humidity:', value: `${city_humidity} %` },
                    ).setFooter(`${city_description}`)
                    message.channel.send(exampleEmbed);
                },1000);
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