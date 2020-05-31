
const Discord = require("discord.js");
var prefix = "-";

module.exports.run = (bot, message, args) => {

    message.channel.send(`Je suis actuelement dans ${bot.guilds.array().length} serveurs. Je connais ${bot.users.array().length} utilisateurs, et ${bot.channels.array().length} salons.`)
  }
  
  module.exports.help = {
    name: "serverlist"
  } 