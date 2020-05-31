



const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
	
            var aide_embed = new Discord.RichEmbed()
            .setColor('#58FA0C')
            .setTitle(`🟢 Bot en Ligne Le bot est de nouveau fonctionnel`)                                                                                                                                                                                 
            .setFooter("©esport")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }

module.exports.help = {              
  name:"allumer"
}












