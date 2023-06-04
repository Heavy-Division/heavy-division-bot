import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const willItHave: CommandDefinition = {
    name: ['willithave', 'thumb'],
    description: 'Answers the big question, will it have FEATURE?',
    category: CommandCategory.GENERAL,
    executor: (msg) => {
        const willItHaveEmbed = makeEmbed({
            title: 'Will the Aircraft have [X]?',
            description: 'If it\'s in the real aircraft, it will be in ours.',
        });

        return msg.channel.send({ embeds: [willItHaveEmbed] });
    },
};
