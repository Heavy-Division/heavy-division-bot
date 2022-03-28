import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const PREMIUM_URL = 'https://media.discordapp.net/attachments/810316915464863774/938473429399654451/unknown.png?width=402&height=452';

export const premium: CommandDefinition = {
    name: 'premium',
    description: 'need premium deeeloox durr',
    category: CommandCategory.MEMES,
    executor: async (msg) => {
        const premiumEmbed = makeEmbed({ image: { url: PREMIUM_URL } });
        await msg.channel.send({ embeds: [premiumEmbed] });
    },
};