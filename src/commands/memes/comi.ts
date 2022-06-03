import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

const COMI_URL = 'https://tenor.com/view/cookie-monster-waiting-tapping-gif-5331578';

export const comi: CommandDefinition = {
    name: 'comi',
    description: 'Stop with these sh*ts last chance...',
    category: CommandCategory.MEMES,
    executor: async (msg) => {
        await msg.channel.send(COMI_URL);
    },
};