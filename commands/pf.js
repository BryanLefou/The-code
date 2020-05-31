const Discord = require("discord.js");

const pf = ["pile", "face"];

module.exports.run = (client, message, args) => {

    if(!pf.includes(args[0].toLowerCase())) { return message.channel.send("594522816364150795"); };

    if(pf[Math.floor(Math.random() * pf.length)] === args[0]) { 
        return message.channel.send("Tu as gagné !")
    } else {
        return message.channel.send("L'ordinateur a gagné !")
    }
}

module.exports.help = {
    name: "pf"
}