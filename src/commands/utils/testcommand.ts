// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const testcommand: CommandDefinition = {
    name: 'test',
    description: 'Provides links to MSFS support for sim issues',
    category: CommandCategory.UTILS,
    executor: async (msg) => {
        const testEmbed = makeEmbed({
            title: 'Test command',
            description: 'this is a test command for PR workflows.'

        });

        await msg.channel.send({ embeds: [testEmbed] });

    },
};
