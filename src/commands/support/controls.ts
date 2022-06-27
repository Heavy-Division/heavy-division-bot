// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const controls: CommandDefinition = {
    name: 'controls',
    description: 'Instructions on how to switch back to legacy controls and how to use new controls',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const controlsEmbed = makeEmbed({
            title: 'MSFS | Cockpit Interaction System ',
            fields: [
                {
                    name: 'Lock or Legacy? ',
                    value: makeLines([
                        'Sim Update 5 introduced a new cockpit interaction system, which changes the way you interact with different buttons and switches. ',
                        '',
                        ' - Open the settings menu.',
                        ' - Select \'General Options\' and then select \'Accessibility\'. ',
                        ' - Find the \'Cockpit Interaction System\' option and set this to Legacy.',
                    ]),
                    inline: false,
                },
            ],
        });

        await msg.channel.send({ embeds: [controlsEmbed] });
    },
};
