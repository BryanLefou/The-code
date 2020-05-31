const Discord = require("discord.js");
var prefix = "-";



module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu ne peux pas faire ça :/");
  if(!args[0]) return message.channel.send("mettre un nombre pour supprimer des messages");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`à supprimer ${args[0]} messages.`).then(msg => msg.delete(2000));
  console.log("==================");
  console.log("Une personne a demandé pour aller sur clear.");
});
 
}
 
module.exports.help = {
  name: "clear"
}