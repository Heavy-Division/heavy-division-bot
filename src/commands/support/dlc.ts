import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const dlc: CommandDefinition = {
    name: ['dlc'],
    description: 'Explains the abscence of the 787 in hangar after downloading the addon.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const dlcEmbed = makeEmbed({
            title: 'Premium Deluxe is required to Operate the B78XH',
            description: 'Due to digital rights management features, critical 787 files are hidden behind encryption, thus we cannot upload the aircraft as a separate addon.'
        });

        await msg.channel.send({ embeds: [dlcEmbed] });

    },
};
