import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const conflict: CommandDefinition = {
    name: ['conflict', 'conflicts'],
    description: 'Provides a fix for auto-throttle bug.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const conflictEmbed = makeEmbed({
            title: 'Heavy Division | Conflicts',
            description: 'Before attributing major issues to the mod, ensure that no conflicts are occuring by removing other addons from the community folder and testing each one individually in the sim. '
            + 'We are currently aware of an issue causing a display conflict between the pms50-instrument-gtn750 mod and B78XH, and we recommend disabling one or the other when loading the sim. '
        });

        await msg.channel.send({ embeds: [conflictEmbed] });

    },
};
