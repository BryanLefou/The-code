const Discord = require("discord.js");
var prefix = "-";


const answers = [
    "https://twitter.com/HyperyMonsterr?lang=fr", 
    "",
    "lien ect..."
]

module.exports.run = (client, message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(answer);
    message.delete().catch();
};

module.exports.help = {
    name: "twitter"
};