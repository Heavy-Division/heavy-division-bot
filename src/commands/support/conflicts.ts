import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const conflict: CommandDefinition = {
    name: ['conflict', 'conflicts'],
    description: 'Describes process for narrowing down bugs and issues to the B78XH mod.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const conflictEmbed = makeEmbed({
            title: 'Heavy Division | Conflicts',
            description: 'Before attributing major issues to the mod, ensure that no conflicts are occuring by removing other addons from the community folder and testing each one individually in the sim. '
        });

        await msg.channel.send({ embeds: [conflictEmbed] });

    },
};
