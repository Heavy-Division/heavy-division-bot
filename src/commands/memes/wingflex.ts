import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const WING_FLEX_URL = 'https://i.kym-cdn.com/photos/images/original/001/569/360/a5e.jpg';

export const wingflex: CommandDefinition = {
    name: ['wingflex', 'flappy'],
    description: 'Uploads image of flappy plane',
    category: CommandCategory.MEMES,
    executor: async (msg) => {
        const wingFlexEmbed = makeEmbed({ image: { url: WING_FLEX_URL } });
        await msg.channel.send({ embeds: [wingFlexEmbed] });
    },
};