const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    let ticketname = `ticket-${message.author.discriminator}`
    if (message.guild.channels.exists('name', ticketname)) {
        message.reply(`Vous avez deja ouvert un ticket `).catch(console.error);
        return;
    }
    else {
        message.guild.createChannel(`ticket-${message.author.discriminator}`, { type: 'text' }).then(async channel => {
            let category = message.guild.channels.find(c => c.name == "┃🧩┃ticket" && c.type == "category");
            await channel.setParent(category);
            await channel.setTopic(channel.id);
            message.channel.send(`Le support a bien reçu ton message, tu peux y accéder depuis ce lien : <#${channel.id}>`).catch(err => {
                message.channel.send(`Le support a bien reçu ton message, tu peux y accéder depuis ce lien : <#${channel.id}>`)
            })
            let embed = new Discord.RichEmbed()
            .setTitle(`Ticket provenant de : ${message.author.tag}`)
            .setColor("#0C29FA")
            .addField("Contenu du ticket :", `${message.content.toLowerCase()}`)
            .addField("Ticket Ouvert", `${message.author} with ID: ${message.author.id}`)
            .setTitle(`⚠️⛏️ Bienvenue  Comment notre équipe peut vous aider ? Posez-votre problème dans le salon, ne mentionnez PAS les 🗄️ 𝗹 Techniciens , ils vous répondront dès que possible !`)
            .setFooter("✅Bonjour nous sommes dsl de votre problème")
            channel.send(embed)
            channel.overwritePermissions(message.author, {
                "READ_MESSAGE_HISTORY": true,
                "SEND_MESSAGES": true,
                "VIEW_CHANNEL": true,
                "EMBED_LINKS": true
            });
            channel.overwritePermissions(message.guild.id, {
                "READ_MESSAGE_HISTORY": false,
                "SEND_MESSAGES": false,
                "VIEW_CHANNEL": false
            }).catch((err) => {
                if (err) return msg.channel.send(`❌ Une erreur est survenue ! ${err}`)
                if (!category) console.log("La catégorie Ticket n'existe pas");
                channel.setParent(category.id);
            }).catch(console.error);
           
        })
    }  
}
module.exports.help = {
    name: 'ticket',
};
