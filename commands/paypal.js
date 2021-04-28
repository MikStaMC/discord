module.exports = {
    name: 'paypal',
    description: "send a paypal",
    async execute(client, message, cmd, args, Discord){
        let content = args.join(" ")
        var input = args.join(" ")
        const numRegex = new RegExp(/\d+/)
        let milamount = input.match(numRegex) // if input is, for example, asd234jkl45, this will be 23445. i'm sure the regex can be improved
        let x = parseFloat(milamount)
        let calc_price
        if (x >= 0 && x <= 49) calc_price = x * 0.5
        else if (x > 49 && x <= 251) calc_price = x * 0.4
        else if (x > 251 && x <= 501) calc_price = x * 0.35
        else if (x > 501) calc_price = x * 0.3
        let answer1 = calc_price.toFixed(2)

        if(!content) return message.channel.send("You have to specify a number!")

        if(content) {
            message.delete()
            const embed = new Discord.MessageEmbed()
            .setAuthor("Payment Information with Paypal.", "https://media.discordapp.net/attachments/827688182471852076/828026850902802432/yj1UwM7.png")
            .setDescription("Here you will find all useful information on how to correctly send the funds.")
            .setFooter("Provided by Mik+#4517 | Bot Version 1.0.0", "https://media.discordapp.net/attachments/827688182471852076/828026850902802432/yj1UwM7.png")
            .addFields(
                { name: 'Amount of the transaction', value: `1: Send **$${answer1} USD** the the following Paypal adress.\n\n  \`Coinparadise.shop@gmail.com\``},
                { name: 'Make sure you\'re sending funds in USD$ and Friends and Family', value: `If you send as Goods & Services your payment will be refunded \n If you do not see the option to send as Friends & Family please contact us, do not send.`}
                )
                return message.channel.send(embed)
        }
    }
}