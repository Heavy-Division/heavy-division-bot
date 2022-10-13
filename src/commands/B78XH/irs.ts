import { CommandDefinition } from '../../lib/command';
import { makeEmbed, makeLines } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const IRS_IMAGE_URL = 'https://media.discordapp.net/attachments/984255062010396702/990392133825490994/IRS_Switch_POS.png'; //TODO: Add a more professional looking photo (square view of overhead panel), clean red box

export const irs: CommandDefinition = {
    name: 'irs',
    description: 'Display help with IRS alignment',
    category: CommandCategory.B78XH,
    executor: (msg) => {
        const irsEmbed = makeEmbed({
            title: 'Heavy Division | IRS',
            description: makeLines([
                'On the overhead panel you will see the two knobs labelled \'IRS\' left and right. Turn these two to the \'ON\' position. ',
                '',
                'You can check how long you have to wait by looking at the align time on the upper MFD. ',
                '',
                ' **It takes several minutes for the IRS to align.**',
                '',
                'To align the IRS instantly (not realistic) in the CDU select: ',
                '\'HEAVY\' -> \'IRS CONFIGURATION\' -> \'FORCE ALIGN\' ',
            ]),
            image: { url: IRS_IMAGE_URL },
        });

        return msg.channel.send({ embeds: [irsEmbed] });
    },
};
