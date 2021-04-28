const db = require('quick.db')

module.exports = {
    name: 'ss',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "set stock",
    async execute(client, message, cmd, args, Discord){
        let user = message.author

        let content = args.join(" ")

        if(!content) return message.channel.send("You have to specify the stock!")

        if(content) {
        db.set(`stockdb_${message.guild.id}`, content)
        const embed = new Discord.MessageEmbed()
        .setDescription(`**${user}, set the current stock to : ${content}**`)
        .setFooter("Provided by Mik+#4517 | Bot Version 1.0.0", "https://media.discordapp.net/attachments/827688182471852076/828026850902802432/yj1UwM7.png")
            return message.channel.send(embed)
        }
    } 
}