import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const MOD_URL = 'https://cdn.discordapp.com/attachments/927293618295824415/960651188011958322/Screen_Shot_2022-04-04_at_5.24.48_PM.png';

export const addon: CommandDefinition = {
    name: ['addon', 'mod'],
    description: 'Insert addon not addon meme here.',
    category: CommandCategory.MEMES,
    executor: (msg) => {
        const modEmbed = makeEmbed({ image: { url: MOD_URL } });
        return msg.channel.send({ embeds: [modEmbed] });
    },
};
