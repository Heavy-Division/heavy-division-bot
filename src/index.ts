// import { start } from 'elastic-apm-node';
import Discord from 'discord.js';
import dotenv from 'dotenv';
import commands from './commands';
import express from 'express';
import { readdirSync } from 'fs';
import Logger from './lib/logger';
import { makeEmbed } from './lib/embed';

// TODO: Implement performance metrics server with elastic-apm node

dotenv.config();


export const DEBUG_MODE = process.env.DEBUG_MODE === 'true';

const intents = new Discord.Intents(32767);
const client = new Discord.Client({
    partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
    intents,
});

let healthy = false;

client.on('ready', () => {
    Logger.info(`Logged in as ${client.user.tag}!`);
    healthy = true;
});

client.on('disconnect', () => {
    Logger.warn('Client disconnected');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    healthy = false;
});

client.on('messageCreate', async (msg) => {
    const isDm = msg.channel.type === 'DM';
    const guildId = !isDm ? msg.guild.id : 'DM';

    Logger.debug(`Processing message ${msg.id} from user ${msg.author.id} in channel ${msg.channel.id} of server ${guildId}.`);

    if (msg.author.bot === true) {
        Logger.debug('Bailing because message author is a bot.');
        return;
    }

    if(isDm) {
        Logger.debug('Bailing because message is a DM.');
        return;
    }

    if (msg.content.startsWith('.')) {
        Logger.debug('Message starts with dot.');

        const usedCommand = msg.content.substring(1, msg.content.includes(' ') ? msg.content.indexOf(' ') : msg.content.length).toLowerCase();
        Logger.info(`Running command '${usedCommand}'`);

        const command = commands[usedCommand];

        if (command) {
            const { executor, name, requiredPermissions } = command;

            const commandsArray = Array.isArray(name) ? name : [name];

            const member = await msg.guild.members.fetch(msg.author);

            if (!requiredPermissions || requiredPermissions.every((permission) => member.permissions.has(permission))) {
                if (commandsArray.includes(usedCommand)) {
                    try {
                        await executor(msg, client);

                    } catch ({ name, message, stack }) {
                        Logger.error({ name, message, stack });
                        // eslint-disable-next-line camelcase
                        const error_embed = makeEmbed({
                            color: 'RED',
                            title: 'Error while Executing Command',
                            description: DEBUG_MODE ? `\`\`\`D\n${stack}\`\`\`` : `\`\`\`\n${name}: ${message}\n\`\`\``,
                        });

                        await msg.channel.send({ embeds: [error_embed] });


                    }

                    Logger.debug('Command executor done.');
                }
            } else {
                await msg.reply(`you do not have sufficient permissions to use this command. (missing: ${requiredPermissions.join(', ')})`);
            }
        } else {
            Logger.info('Command doesn\'t exist');

        }

    }
});

client.once('ready', () => {
    console.log('The bot is online!');

    client.user.setPresence({
        status: "online",  //You can show online, idle....
        activities: [{
            name: ".help",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }]
    });

});

client.login(process.env.DISCORD_TOKEN)
    .then()
    .catch((e) => {
        Logger.error(e);
        process.exit(1);
    });

const app = express();


app.listen(3000, () => {
    Logger.info('Server is running at http://localhost:3000');
});

