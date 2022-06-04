import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const testcommand2: CommandDefinition = {
    name: 'test2',
    description: 'Explain the absence of certain features in the B78XH mod',
    category: CommandCategory.GENERAL,
    executor: async (msg) => {
        const test2embed = makeEmbed({
            title: 'test command 2',
            description: 'Due to various Digital Rights Management protections or encryption of the core 787-10 files '
                +  'we are unable to add/change/remove certain aircraft features. '
                +  'For a detailed list of features we are able to work on, check out the [contributor guide](https://github.com/Heavy-Division/B78XH/blob/main/.github/CONTRIBUTING.md). '
                +  'This list is not set in stone, and we will update it when and if Asobo provides access to various core systems files in the future.'
        });

        await msg.channel.send({ embeds: [test2embed] });

    },
};
