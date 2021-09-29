const Discord = require('discord.js');
const token = require('./token.json');
const client = new Discord.Client();
const prefix = 'uthar!';

client.on("message", function(message){
    if (message.author.bot) return;
    if (!!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Ce message a une latence de ${timeTaken}ms.`);
    }

    
});

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!')
});
client.login(token.token);