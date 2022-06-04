import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const testcommand: CommandDefinition = {
    name: 'test',
    description: 'Explain the absence of release dates or ETAs',
    category: CommandCategory.GENERAL,
    executor: async (msg) => {
        const testEmbed = makeEmbed({
            title: 'TEST',
            description: 'Contributers to the B78XH are unpaid volunteers who ensure the smooth operation of the B78XH '
                +  'modification for MSFS, thus we cannot enforce deadlines or provide an estimate '
                +  'when new features or updates will be ready.',
        });

        await msg.channel.send({ embeds: [testEmbed] });

    },
};
