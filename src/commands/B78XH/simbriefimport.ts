// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { makeEmbed, makeLines } from '../../lib/embed';
import { CommandCategory } from '../../constants';

// TODO: APPEND A GIF OF THE INSTRUCTIONS TO THE FOLLOWING:
export const simbriefimport: CommandDefinition = {
    name: ['import', 'integration', 'integ'],
    description: 'Shows how to use SimBrief integration',
    category: CommandCategory.B78XH,
    executor: (msg) => {
        const simbriefImportEmbed = makeEmbed({
            title: 'Heavy Division B78XH | simBrief import',
            description: makeLines([
                'The B78XH has simBrief integration. This means you can create a flight plan in simBrief and import it into the FMS. On the captain\'s side FMC, enter the RTE menu and click REQUEST on the left hand side and wait a until the flight plan has been imported before proceeding. '
                + 'Remember to hit the ACTIVATE key then EXEC when green to activate your flight plan!',

            ]),
        });

        return msg.channel.send({ embeds: [simbriefImportEmbed] });
    },
};
