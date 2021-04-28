const db = require('quick.db')

module.exports = {
    name: 'stock',
    description: "current stock",
    async execute(client, message, cmd, args, Discord){
        let user = message.author
        let avatar = user.avatarURL
        let stock = db.fetch(`stockdb_${message.guild.id}`, args[0])
        const embed = new Discord.MessageEmbed()
        .setAuthor("Stock Update", "https://media.discordapp.net/attachments/827688182471852076/828026850902802432/yj1UwM7.png")
        .setDescription(`${user}, We currently have ${stock}m in stock!`)
        .setFooter("Provided by Mik+#0999 | Bot Version 1.0.0", "https://media.discordapp.net/attachments/827688182471852076/828026850902802432/yj1UwM7.png")
        
            return message.channel.send(embed)
        }
    } 
