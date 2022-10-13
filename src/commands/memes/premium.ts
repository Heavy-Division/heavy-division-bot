import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const PREMIUM_URL = 'https://media.discordapp.net/attachments/810316915464863774/938473429399654451/unknown.png?width=402&height=452';

export const premium: CommandDefinition = {
    name: ['premium', 'prm'],
    description: 'Dangit Bobby you were supposed to buy the Premium Deluxe version of MSFS',
    category: CommandCategory.MEMES,
    executor: (msg) => {
        const premiumEmbed = makeEmbed({ image: { url: PREMIUM_URL } });
        return msg.channel.send({ embeds: [premiumEmbed] });
    },
};
