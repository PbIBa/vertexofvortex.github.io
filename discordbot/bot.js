const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '/'

client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'test')) {
        message.channel.sendMessage('мотвей чушка ебаная');
     }
});

client.login('NDI3Nzc4MzI2NTgxNjA4NDU4.DZpnsg.7w-0RfK03d4eoi37t2QQp464E9o');