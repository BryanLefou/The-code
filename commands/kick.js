const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Cet utilisateur à été kick de ce serveur!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" n avais pas la permission !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être kick!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);
    message.delete().catch();

    let kickChannel = message.guild.channels.find(`name`, "ban-kick");
    if(!kickChannel) return message.channel.send("Impossible de trouver le canal des logs.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
	message.delete().catch();
}

module.exports.help = {
  name:"kick"
}
