const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], allowedMentions:{ parse: ["users"]}})


const prefix = `.`;

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./src/commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('HeavyBot is online!');
});

const ownerID = "396422714690240515"

client.on('messageCreate', async message =>{
    console.log()
    if (message.author.bot) return false;

    if(message.content.includes(ownerId)) {
        if (message.author.id === '198174874479362048', '208058146273361921', '402403275799920641', '198918390163701761', '601162068611301377', '746781061232721921', '302614302899175424', '508343288453922828') {
         return false;
        
    } else 
         return message.reply('```Do not ping Comi, Please```');

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
