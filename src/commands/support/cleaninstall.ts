import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const ci: CommandDefinition = {
    name: ['cleaninstall', 'ci', 'order66'],
    description: 'Last-resort option for people with major bugs/issues that can\'t be fixed by normal means.',
    category: CommandCategory.SUPPORT,
    executor: (msg) => {
        const ciEmbed = makeEmbed({
            title: 'Heavy Division | Clean Install',
            description: 'If an issue can\'t be resolved through normal means, attempt a clean install by deleting the B78XH mod from your community folder, and downloading the latest version from <#852748629877850143> or github. ',
        });

        return msg.channel.send({ embeds: [ciEmbed] });
    },
};
