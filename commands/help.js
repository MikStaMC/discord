module.exports = {
    name: 'help',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "see all commands",
    async execute(client, message, cmd, args, Discord) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#2ECC71')
                    .setTitle("Help Information")
                    .setDescription(`This is the list of all commands that the bot can handle.`)
                    .addFields(
                        { name: 'Moderation Commands', value: '`!clear` `!kick` `!ban` `!mute` `!unmute`' },
                        { name: 'Shop Commands', value: '`!ss (amount)` `!stock` `!paypal (amount)`' },
                        { name: 'Bot Related Commands', value: '`!ping` `!info` '})
                    .setFooter("Provided by Mik+#4517 | Bot Version 1.0.0", "https://media.discordapp.net/attachments/827688182471852076/828026850902802432/yj1UwM7.png")
                    message.channel.send(embed)
              return;
        }
    }