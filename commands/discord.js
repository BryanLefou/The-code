const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {
  var prefix = "-";

  var invite = new Discord.RichEmbed()

          .addField("__**" + "Invite une personne sur le serveur :)  " + "**__", "https://discord.gg/BaJeJqM", true)


          .setColor("0x#FF0000")

  message.channel.send({embed: invite});
}

module.exports.help = {
    name: "discord"
}