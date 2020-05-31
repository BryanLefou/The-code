const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (client, config, message, args, functions) => {

  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = parseInt(totalSeconds % 60);

  let BotinfoEmbed = new Discord.RichEmbed()
      .setColor("votrecouleur")
      .setAuthor(client.user.username, client.user.displayAvatarURL)
      .setDescription("**• Informations du bot •**")
      .addField("👑 Créateurs →", "- ``A changer``\n- ``A changer``", true)
      .addField("⏲ Uptime →", `__${days}__ j, __${hours}__ h, __${minutes}__ m et __${seconds}__ s`, true)
      .addBlankField()
      .addField("📰 Informations →", `- \`ID\` → ${client.user.id}\n- \`Langage\` → Français | FR | French\n- \`Création\` → à changer\n- \`Préfix(Par Défaut)\` → à changer`, true)
      .addField("📊 Statistiques →", "- `Serveurs` → "+client.guilds.size+"\n"+"- `Utilisateurs` → "+client.users.size+"\n"+"- `Salons` → "+client.channels.size+"\n"+"- `Ping` → "+Math.round(client.ping)+" ms", true)
      .setFooter("Kalaris™", client.user.displayAvatarURL)
      .setTimestamp();

  message.channel.send(BotinfoEmbed);

}

  module.exports.help = {
      name: "botinfo"
  }