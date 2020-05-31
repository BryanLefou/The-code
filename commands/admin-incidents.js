const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
        message.channel.send("@everyone  toutes les personnes qui ont et __**warn et kick et ban**__ seront ici 🚨")
        console.log("Une personne a demandé pour aller sur admin-incidents.")
        message.delete().catch();  
}

module.exports.help = {
  name:"admin-incidents"
}
