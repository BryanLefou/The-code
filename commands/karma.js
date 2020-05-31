const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete().catch(err => {
        if(err) console.log(`[Erreur] ${err}`);
    });

    const membre = message.mentions.members.first() || message.member;

    message.channel.send(`Aller tout le monde un max de karma pour **${membre.user.username}** ! 🤣`);

};

module.exports.help = {
    name: "karma"
}