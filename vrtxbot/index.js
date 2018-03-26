const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = '/';
var mention = 'бот, ';

client.on('message', (message) =>{
    if(message.content == prefix + "бот") {
        message.channel.send("я тут");
    }
});
client.on('message', (message) =>{
    if(message.content == mention + "как дела?") {
        message.channel.send("отлично");
    }
});

client.login("NDI3ODIwNDU1NzYwNDk0NjEz.DZqGXg.l8l1CFfA2WYFRKfw6EZ5PvojhL0");