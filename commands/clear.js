module.exports = {
    name: 'clear',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "clear messages",
    async execute(client, message, cmd, args, Discord) {
        const amount = args.join(" ");
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            message.channel.send("You can not use this command!");
            return;
          }
            if(!amount) return message.reply("Please provide a number of messages to delete.")
            if(amount > 100) return message.reply("Cannot clear more than 100 messages.")
          if(amount < 1) return message.reply("You have to delete at least one message.")
            await message.channel.messages.fetch({limit: amount}).then(messages => {
                message.channel.bulkDelete(messages, true)
                const embedCleared = new Discord.MessageEmbed()
                    .setTitle("Clear")
                    .setDescription(`**${amount} messages cleared by ${message.author} in ${message.channel}.**`)
                    .setFooter("Provided by Mik+#4517 | Bot Version 1.0.0", "https://media.discordapp.net/attachments/827688182471852076/828026850902802432/yj1UwM7.png")
                    message.channel.send(embedCleared).then(msg => msg.delete({ timeout: 3000 }));
              return;
          });
        }
    }