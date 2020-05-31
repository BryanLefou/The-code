const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {

            var aide_embed = new Discord.RichEmbed()
            .setColor('#37FF00')
            .setTitle(`:robot: Voici la commandes de modérateur !`)
            .setDescription(`Voici la commandes -admin :`)
            .setThumbnail(message.author.avatarURL)
            .addField("*fait la commande __**-help-admin**__  pour avoir toutes les commandes de modérateur*", "Version 2.0 ")
			.setFooter("Creer par BryanLeFou ")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }


module.exports.help = {
  name:"admin"
}
