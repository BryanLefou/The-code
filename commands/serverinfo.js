const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription ("Informations sur le serveur")
        .setColor ("# 15f153")
        .setThumbnail (sicon)
        .addField ("Nom du serveur", message.guild.name)
        .addField ("Créé le", message.guild.createdAt)
        .addField ("Vous avez rejoint", message.member.joinedAt)
        .addField ("Nombre total de membres", message.guild.memberCount);
        message.channel.send(serverembed);
        console.log("==================");
        console.log("Une personne a demandé pour aller sur serverinfo.");
        message.delete().catch();
}

module.exports.help = {
  name:"serverinfo"
}
