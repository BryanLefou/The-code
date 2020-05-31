const answers = [
    "https://tenor.com/view/bye-memes-dead-wow-incredible-gif-12520076",
    "https://tenor.com/view/belly-face-fat-funny-gif-3433814",
    "https://tenor.com/view/belly-face-fat-funny-gif-3433814",
    "https://tenor.com/view/couldyounot-chloe-meme-gif-4947557",
    "https://tenor.com/view/mlg-kid-noscopers-gif-4757100",
    "https://www.youtube.com/watch?v=FOWg2vSheHg"
]

module.exports.run = (client, message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(answer);
};

module.exports.help = {
    name: "meme"
};