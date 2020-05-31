const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
	
            var aide_embed = new Discord.RichEmbed()
            .setColor('#19F1F5')
            .setTitle(`👑 Fondateur & Patron de la Team !`)
            .setDescription(`Créateur de la hypery est HP. Shadoww :`)                                                                                                                                                                                     
            .setFooter("Creer par BryanLeFou")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }

module.exports.help = {              
  name:"créateur"
}












