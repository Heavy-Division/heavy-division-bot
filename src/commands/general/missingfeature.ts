import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const drm: CommandDefinition = {
    name: ['features', 'drm', 'fsarchive'],
    description: 'Explain the absence of certain features in the B78XH mod',
    category: CommandCategory.GENERAL,
    executor: (msg) => {
        const drmEmbed = makeEmbed({
            title: 'Why isn\'t [X] a feature in the B78XH?',
            description: 'Due to various Digital Rights Management protections or encryption of the core 787-10 files '
                + 'we are unable to add/change/remove certain aircraft features. '
                + 'For a detailed list of features we are able to work on, check out the [contributor guide](https://github.com/Heavy-Division/B78XH/blob/main/.github/CONTRIBUTING.md). '
                + 'This list is not set in stone, and we will update it when and if Asobo provides access to various core systems files in the future.',
        });

        return msg.channel.send({ embeds: [drmEmbed] });
    },
};
