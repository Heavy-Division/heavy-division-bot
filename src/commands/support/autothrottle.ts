import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const autothrottle: CommandDefinition = {
    name: ['at','throttle','autothrottle'],
    description: 'Provides a fix for auto-throttle bug.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const atEmbed = makeEmbed({
            title: 'Heavy Division | AT Issue',
            description: 'Issues with the AT are under investigation. To restore the normal autothrottle function, push forward on the control column while Autopilot is engaged.'
        });

        await msg.channel.send({ embeds: [atEmbed] });

    },
};
