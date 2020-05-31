const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
	
            var aide_embed = new Discord.RichEmbed()
            .setColor('#37FF00')
            .setTitle(` 🔒 Voici le créateur de ce bot !`)
            .setDescription(`Voici la commandes -dev :`)
            .setThumbnail(message.author.avatarURL)
            .addField("Le créateur de ce bot est BryanLeFou !", "on est en devloppement ")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }

module.exports.help = {
  name:"dev"
}