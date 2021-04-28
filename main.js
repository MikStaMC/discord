const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.on('ready',() =>{
        client.user.setActivity("!help | Necron's Bank", {
            type: 'PLAYING'
        })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
        require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);

