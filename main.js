const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Bot is running!");
})

const prefix = `.`;

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('HeavyBot is online!');
});

client.on('messageCreate', message =>{

      if(message.content.includes("Comi#0755")) {
        message.reply('```Do not ping Comi, Please```');
    } 

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'restart'){
        client.commands.get('restart').run(client, message, args);
    
    }

    if(command === 'prm'){
        client.commands.get('prm').execute(message, args, Discord);
    } 

    if(command === 'wx'){
        client.commands.get('wx').execute(message, args, Discord);
    } 
    
    if(command === 'dz'){
        client.commands.get('dz').execute(message, args, Discord);
    } 

});
    


client.login(process.env.DISCORD_TOKEN);
