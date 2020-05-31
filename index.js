
const tokenfile = require("./token.json");
const prefix = "-"
const config = require("./config.json");
const pf = ["pile", "face"];

//===================================================//
//Module requis
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const express = require("express");
const app = express();
const bot = new Discord.Client()
bot.commands = new Discord.Collection();
const client = new Discord.Client()


bot.login(tokenfile.token);

//===================================================//
//Je joue à [.help] 
bot.on('ready', () => {
  bot.user.setPresence({ game: { name: 'Je suis le bot a THE CODE', type:2}});
  console.log("==================");
  console.log("Je suis connecté !");
});

//===================================================//
bot.on('message', async message => {
  const logs = message.guild.channels.find(channel => channel.name === "logs");
 
  if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
      message.guild.createChannel('logs', 'text');
    }
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
      console.log('Le salon logs n\'existe pas et j\'ai essayer de le créer mais je n\'ai pas les permissions !')
    }  
//Les mots interdits :   

//Il va chercher les mots
  let foundInText = false;
  for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }

  if (foundInText) { //Contenu du message du bot qui supprime et envoie au salon nommer "logs" le message contenant l'insulte
      message.delete();
      message.channel.send('Attention à ton langage !');
      let embed = new Discord.RichEmbed()
                  .setTitle(`Insulte provenant de : ${message.author.username}`)
                  .setColor("0x6a94f1")
                  .addField("Contenu du message :", `${message.content.toLowerCase()}`)
                  .setFooter("") //Nom du bot ou autre le pied du embed en outre
      logs.send(embed)
  }
});
//===================================================//

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("===============================");
    console.log("Impossible de trouver des commandes.");
    return;
  }
  
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    
  });
});

//=================================================//

// par ça :
bot.on("message", async message => {
    
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  if (message.content.indexOf(prefix) !== 0) return;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = bot.commands.get(command.slice(prefix.length));
  if (commandFile) commandFile.run(bot, message, args);
});
//===================================================//

