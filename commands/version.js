const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
	
            var aide_embed = new Discord.RichEmbed()
            .setColor('#0BF7BE')
            .setTitle(`✏️   Voici les nouvelles mise a jour !`)
            .setDescription(`Voici les nouvelles commande du bot  :`)
            .setThumbnail(message.author.avatarURL)
            .addField(" Affiche les commande utilisateur ! ", "Version")
            .setFooter("Creer par BryanLeFou")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }
	
module.exports.help = {
  name:"version"
}