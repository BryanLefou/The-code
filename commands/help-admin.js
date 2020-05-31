const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
	
            var aide_embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle(`⛏️ Voici les commandes des Modération  !`)
            .setThumbnail(message.author.avatarURL)
            .addField(" \n-kick\n-ban\n-warn\n-mute\n-clear\n-addrole", "🔒🔒 ")
            .setFooter("Creer par BryanLeFou")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }
	
module.exports.help = {
  name:"help-admin"
}