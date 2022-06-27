import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

const B78XH_URL = 'https://cdn.discordapp.com/attachments/927293618295824415/978762846961795132/donatorimage.png';

export const donator: CommandDefinition = {
    name: ['newdonor', 'dintro'],
    description: 'Provides info on donations.',
    category: CommandCategory.GENERAL,
    executor: async (msg) => {
        const donatorEmbed = makeEmbed({
            title: 'Heavy Division | Thank you for your support!',
            description: makeLines([
                'Thank you for supporting the Heavy Division Project for Microsoft Flight Simulator! ',
                '',
                'You can check donator-exclusive updates in this channel by viewing the pinned messages. '
                + 'Please do not share donator-exclusive updates outside this channel, it will result in donator updates being less frequent or halted.',
            ]),
            image: { url: B78XH_URL },
        });

        await msg.channel.send({ embeds: [donatorEmbed] });
    },
};
