const discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "596721975850958848";
    
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Veuillez placer cette commande dans un canal de ticket.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name)
        .setDescription(" Votre billet est marqué comme ** complet **. Si vous voulez en créer un nouveau, faites-le!")
        .setFooter("ticket fermé");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "log");
    if (!logChannel) return message.channel.send("vous n'avais pas de ticket ouvert");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Fermer un ticket"
}
