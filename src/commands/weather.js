const Discord = require('discord.js')
const weather = require('weather-js');
module.exports = {
    name: "weather",
    async run(bot,message,args){
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
            if(err) console.log(err);
            if(!args[0]){
                message.channel.send('**Please provide a location!**')    
            }
            else if(result === undefined || result.length === 0){
            message.channel.send("**Invalid Location!**")
            }
            else{
                const location = result[0].location.name
                const temperature = result[0].current.temperature
                const humidity = result[0].current.humidity
                const windspeed = result[0].current.windspeed
                const description = result[0].current.skytext
                const Discord = require('discord.js');
                const embed = new Discord.MessageEmbed()
                .setColor('#1687A7')
                .setTitle(`Weather Report For ${location}`)
                .addFields(
                { name: '🌤️ Temp:', value: `${temperature} °C` },
                { name: '💨 WindSpeed:', value: `${windspeed}` },
                { name: '💦 Humidity:', value: `${humidity} %` },
                ).setFooter(`${description}`)
                message.channel.send(embed);
            }   
        })
    }
}