import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const HUD_URL = 'https://media.discordapp.net/attachments/810316915464863774/948055227960004688/unknown.png';

export const hud: CommandDefinition = {
    name: 'hud',
    description: 'For issues with the HUD',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const hudEmbed = makeEmbed({
            title: 'Heavy Division B78XH | HUD Alignment Issue',
            description: 'The HUD misalignment is a known issue for the default 787 for MSFS. Open \'General\' settings then \'Camera\' to adjust the HUD camera until it is aligned.',
            image: { url: HUD_URL } });
        await msg.channel.send({ embeds: [hudEmbed] });
    },
};