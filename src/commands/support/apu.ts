import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

const APU_URL = 'https://cdn.discordapp.com/attachments/961018234470010881/1008229081424334878/apu.png';

export const ctd: CommandDefinition = {
    name: ['ctd', 'crash'],
    description: 'Provides direction for addressing CTD issues.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const ctdEmbed = makeEmbed({
            title: 'Heavy Division | APU Fuel Pump',
            description: makeLines([
                'Please see the official MSFS forums for support addressing CTD issues.',
                '**No support will be offered via Discord.** ',
                '',
                '1. [Basic Troubleshooting](https://flightsimulator.zendesk.com/hc/en-us/articles/4406280399250-All-versions-Crashing-CTDs-issues-Basic-Troubleshooting) ',
                '',
                '2. [Crashing/CTD issues Checklist](https://flightsimulator.zendesk.com/hc/en-us/articles/360015893879-All-versions-Crashing-CTDs-issues-Checklist) ',
                '',
                '3. [Crashing/CTD Advanced Troubleshooting](https://flightsimulator.zendesk.com/hc/en-us/articles/4406280653202-All-versions-Crashing-CTDs-issues-Advanced-Troubleshooting) ',
            ]),
        });

        await msg.channel.send({ embeds: [ctdEmbed] });
    },
};
