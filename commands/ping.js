const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete();
    message.channel.send("Pong!");
  };
  
  module.exports.help = {
    name: "ping",
    category: "fun",
    description: "Envoie un pong répondre avec la latence du bot",
    usage: "-ping"
  };
  