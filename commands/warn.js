const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
var prefix = "-";

module.exports.run = async (bot, message, args) => {
 
  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Non, je ne peux pas faire ça!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Impossible de les trouver");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("il est administrateur");
  let reason = args.join(" ").slice(22);
 
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
 
  warns[wUser.id].warns++;
 
  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
 
  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);
 
  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Impossible de trouver le canal logs");
 
  warnchannel.send(warnEmbed);
 
  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Vous devriez créer ce rôle muted.");
 
    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> a été temporairement mis en muted 30m`);
 
    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}>il n'est plus mute`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Vous devriez créer ce rôle muted.");
 
    let mutetime = "1h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> a été temporairement mis en muted 1h`);
  }
 
}
 
module.exports.help = {
  name: "warn"
}