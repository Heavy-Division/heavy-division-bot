// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { say } from 'cowsay';
import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import Filter from 'bad-words';

export const cowsay: CommandDefinition = {
    name: ['cowsay', 'cs'],
    description: 'Emulates the famous UNIX program `cowsay`.',
    category: CommandCategory.MEMES,
    executor: async (msg) => {
        
        const filter = new Filter();
        const text = msg.content.replace(/\.(cowsay|cs)\s*/, '').replace(/`/g, '');

        if (filter.isProfane(msg.content.trim())) {
            await msg.channel.send('Watch your tongue!') 
            return;
        }




        if (text) {
            return msg.channel.send(`\`\`\`\n${say(({ text }))}\n\`\`\``);
        }

        return msg.reply('please provide some text.');
    },
};
