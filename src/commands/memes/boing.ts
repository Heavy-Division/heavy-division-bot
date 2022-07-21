import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const BOING_URL = 'https://media.discordapp.net/attachments/810316915464863774/953475797157568582/unknown.png?width=399&height=452';

export const boing: CommandDefinition = {
    name: 'boing',
    description: 'Uploads image of a bouncy 747',
    category: CommandCategory.MEMES,
    executor: async (msg) => {
        const boingEmbed = makeEmbed({image: {url: BOING_URL}});
        await msg.channel.send({ embeds: [boingEmbed] });
    },
};
