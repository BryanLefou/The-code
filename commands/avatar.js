const Discord = require("discord.js");
const client = new Discord.Client()

module.exports.run = (client, message, args) => {

    message.channel.send(message.author.avatarURL);
}

module.exports.help = {
    name: "avatar"
}