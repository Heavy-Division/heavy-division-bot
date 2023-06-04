import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const willItHave: CommandDefinition = {
    name: ['thumb', 'willItHave', 'willithave'],
    description: 'Answers the big question, will it have FEATURE?',
    category: CommandCategory.GENERAL,
    executor: (msg) => {
        const willItHaveEmbed = makeEmbed({
            title: 'Will the Aircraft have [X]?',
            description: 'If it\'s in the real Aircraft, it will be ours.',
        });

        return msg.channel.send({ embeds: [willItHaveEmbed] });
    },
};
