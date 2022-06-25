// TODO: Implement Option between link redirect or DM'd list.
import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const help: CommandDefinition = {
    name: ['help'],
    description: 'Explains the abscence of the 787 in hangar after downloading the addon.',
    category: CommandCategory.UTILS,
    executor: async (msg) => {
        const helpEmbed = makeEmbed({
            title: 'Heavy Division | Bot Commands',
            description: 'Check out the [Discord Bot Repository](https://github.com/Heavy-Division/heavy-division-bot/blob/main/.github/COMMANDS.md) for a list of availible commands. '
        });

        await msg.channel.send({ embeds: [helpEmbed] });

    },
};

