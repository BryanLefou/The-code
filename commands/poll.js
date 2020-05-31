const Discord = require("discord.js");
var prefix = "-";

module.exports.run = async (bot, message, args) => { 

let question = args.slice(0).join(" ");
  
  if (args.length === 0) 
    return message.reply('**?poll <AskQuestionHere>**')

message.delete()
  const pollEmbed = new Discord.RichEmbed()
      .setTitle("Sondage")
      .setColor("#0C29FA")
      .setDescription(`${question}`)
      .setFooter(`Créer par : ${message.author.username}`, `${message.author.avatarURL}`)
      .setTitle("**__Sondage du jour !__**")
      .setTimestamp()
message.channel.send(pollEmbed)
  .then(message => {
    message.react('✅')
    message.react('❌')
  })
  .catch(() => console.error('Failed to react.'));
};

module.exports.help = {
  name: "sondage"
}