const Discord = require("discord.js");

var prefix = "-";

module.exports.run = async (bot, message, args) => {


            var aide_embed = new Discord.RichEmbed()
            .setColor('#37FF00')
            .setTitle(`💻 Voici mes mise a jours  !`)
            .setDescription(`Voici les commandes mi dans le bot :`)
            .setThumbnail(message.author.avatarURL)
            .addField(" Affiche les Infos du bot   \n message bienvenue\n Ticket", "commandes")
            .setFooter("Creer par BryanLeFou")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }
	
module.exports.help = {
  name:"help-info"
}