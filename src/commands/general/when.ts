import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const when: CommandDefinition = {
    name: ['when'],
    description: 'Explain the absence of release dates or ETAs',
    category: CommandCategory.GENERAL,
    executor: (msg) => {
        const whenEmbed = makeEmbed({
            title: 'When is there going to be an update?',
            description: 'Contributors to the B78XH are unpaid volunteers who ensure the smooth operation of the B78XH modification for MSFS, '
                + 'thus we cannot enforce deadlines or provide an estimate when new features or updates will be ready.',
        });

        return msg.channel.send({ embeds: [whenEmbed] });
    },
};
