const Discord = require("discord.js");
const superagent = require("superagent");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
let { body } = await superagent.get(`http://aws.random.cat//meow`);

let catEmbed = new Discord.RichEmbed()
   .setColor('#dci43c')
   .setTitle('Chat')
   .setImage(body.file);
   message.delete().catch();
message.channel.send(catEmbed);
}

module.exports.help = {
  name:"cat"
}
