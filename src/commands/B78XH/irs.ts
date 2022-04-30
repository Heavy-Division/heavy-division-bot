import { CommandDefinition } from '../../lib/command';
import { makeEmbed, makeLines } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const IRS_IMAGE_URL = 'https://cdn.discordapp.com/attachments/429734269838032898/957887521931530250/irs.PNG'; //TODO: Add a more professional looking photo (square view of overhead panel), clean red box

export const irs: CommandDefinition = {
    name: 'irs',
    description: 'Display help with IRS alignment',
    category: CommandCategory.B78XH,
    executor: async (msg) => {
        const irsEmbed = makeEmbed({
            title: 'Heavy Division | IRS',
            description: makeLines([
                'On the overhead panel you will see the two switches under \'IRS\'. Turn these two to the \'NAV\' position. **It takes several minutes for the ADIRUs to align.** ',
                'You can check how long you have to wait by looking at the align time on your Upper Ecam.',
                'On the overhead panel you will see two switches under \'IRS\'. Turn these to the \'NAV\' position.',
                '',
                ' **It takes several minutes for the IRS to align.**',
                '',
                'You can check how long you have to wait by looking at the align time on the UPPER ECAM.',
                '',
                'To align the IRS instantly (not realistic) in the CDU select: ',
                '\'HEAVY\' -> \'IRS CONFIGURATION\' -> \'FORCE ALIGN\' ',
            ]),
            image: { url: IRS_IMAGE_URL },
        });

        await msg.channel.send({ embeds: [irsEmbed] });

    },
};
