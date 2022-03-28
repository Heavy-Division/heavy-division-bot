import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

//TODO: Append an image of the simbrief default airframe to this message
export const airframe: CommandDefinition = {
    name: ['airframe', 'simbrief'],
    description: 'If someone asks for a custom B78XH airframe',
    category: CommandCategory.B78XH,
    executor: async (msg) => {
        const airframeEmbed = makeEmbed({
            title: 'B78XH | SimBrief Airframe',
            description: 'As of now the B78XH does not have a custom simbrief airframe. We recommend using the default B78X frame on the website.'
        });

        await msg.channel.send({ embeds: [airframeEmbed] });

    },
};