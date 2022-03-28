import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const experimental: CommandDefinition = {
    name: ['experimental', 'exp'],
    description: 'Explains the current state of the experimental build',
    category: CommandCategory.B78XH,
    executor: async (msg) => {
        const experimentalEmbed = makeEmbed({
            title: 'Heavy Division | Experimental Version',
            description: makeLines([
                'Currently experimental is geared toward testing the FPS drops over long haul flights. **No support will be offered via Discord.** ',
                '',
                'Please use the appropriate discord thread to discuss any issues: ',
                '- <#811459130313015328> ',
                '',
                'The Experimental version is a test version to find problems, issues and to improve functionality based on your feedback. It is not meant to be used for daily use or serious flights with an Online ATC service. ',
            ]),
        });

        await msg.channel.send({ embeds: [experimentalEmbed] });

    },
};