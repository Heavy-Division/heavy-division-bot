// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

const P3D_URL = 'https://tenor.com/view/monkey-pissed-mad-angry-furious-gif-4720563';

export const p3d: CommandDefinition = {
    name: 'p3d',
    description: 'No!',
    category: CommandCategory.MEMES,
    executor: async (msg) => {
        await msg.channel.send(P3D_URL);
    },
};