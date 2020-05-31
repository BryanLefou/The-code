const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {

            var aide_embed = new Discord.RichEmbed()
            .setColor('#37FF00')
            .setTitle(`:robot: Voici la commandes de modérateur !`)
            .setDescription(`Voici la commandes -admin-logs :`)
            .setThumbnail(message.author.avatarURL)
            .addField("@everyone  toutes les personnes qui ont et __**warn et kick **__ seront ici 🚨", "Version 2.0 ")
			.setFooter("Creer par BryanLeFou")
            .setTimestamp()
			console.log("Une personne a demandé pour aller sur admin-logs.")
            message.channel.send(aide_embed);
			message.delete().catch();
        }


module.exports.help = {
  name:"admin-logs"
}
