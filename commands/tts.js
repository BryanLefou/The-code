const Discord = require('discord.js');

exports.run = async (client, message) => {

    let args = message.content.split(" ").slice(1);

      message.delete().catch(err => {
          if(err) console.log(`[Erreur] ${err}`);
      });
  
  if(!args) return message.channel.send(`⚠ Pas de message spécifié !`);

  message.channel.send(`que ${message.author.username} a dit ` + args.join(" "), {
    tts: true
   })

}

module.exports.help = {
    name: "Messagevocal"
};