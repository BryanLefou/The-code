const Discord = require("discord.js");
const superagent = require("superagent");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
let { body } = await superagent.get(`https://random.dog/woof.json`);

let dogEmbed = new Discord.RichEmbed()
   .setColor('#dci43c')
   .setTitle('Chien')
   .setImage(body.url);
   message.delete().catch();
message.channel.send(dogEmbed);
}

module.exports.help = {
  name:"dog"
}
