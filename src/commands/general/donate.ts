// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const donate: CommandDefinition = {
    name: 'donate',
    description: 'Provides info on donations.',
    category: CommandCategory.GENERAL,
    executor: async (msg) => {
        const donateEmbed = makeEmbed({
            title: 'Heavy Division | Donations',
            description: 'The Heavy Division Team is grateful for your support. At this time, we are not accepting '
                       + 'donations, but you can still help by boosting the server, '
                       + 'allowing us to provide more features to the community!',
        });

        await msg.channel.send({ embeds: [donateEmbed] });

    },
};
