const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
        message.channel.send("@everyone tous les utilisateurs peuvent signaler quelqu'un en faisant __**-report **__ 🚨")
        console.log("Une personne a demandé pour aller sur admin-rapports-utilisateurs.")  
        message.delete().catch();
}

module.exports.help = {
  name:"admin-rapports-utilisateurs"
}
