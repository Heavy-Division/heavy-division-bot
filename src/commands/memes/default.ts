// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

const DEFAULT_URL = 'https://c.tenor.com/QWjhCWftI2YAAAAC/airplane-fly.gif';

export const defaultmeme: CommandDefinition = {
    name: 'default',
    description: 'Accurate Description of the default 787-10 for Microsoft Flight Sim',
    category: CommandCategory.MEMES,
    executor: (msg) => {
        const defaultEmbed = makeEmbed({ image: { url: DEFAULT_URL } });
        return msg.channel.send({ embeds: [defaultEmbed] });
    },
};
