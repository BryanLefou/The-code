const Discord = require("discord.js");
var prefix = "-";
var prefix = "-";

module.exports.run = async (bot, message, args) => {


            var aide_embed = new Discord.RichEmbed()
            .setColor('#37FF00')
            .setTitle(`🖥️ Voici mes commandes disponible !`)
            .setThumbnail(message.author.avatarURL)
            .addField("\nz!dev\nz!stats\nz!serverinfo\nz!report\nz!version\nz!créateur\nz!poll\nz!8ball\nz!cat\nz!dog\nz!online\nz!meme\nz!twitter\nz!discord\nz!help-info \nz!ticket\nz!close C'est pour fermer le ticket","✅")
            .setFooter("Creer par BryanLeFou")
            .setTimestamp()
            message.channel.send(aide_embed);
			message.delete().catch();
        }
	
module.exports.help = {
  name:"help"
}
