import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

// eslint-disable-next-line camelcase
const SB_ReferenceError_URL = 'https://cdn.discordapp.com/attachments/810316915464863774/975182259013439488/unknown.png';

export const sbReferenceError: CommandDefinition = {
    name: ['sbError', 'cau'],
    description: 'Provides solution to SimBrief reference error: Cannot Access Uninitialized',
    category: CommandCategory.SUPPORT,
    executor: (msg) => {
        const sbErrorEmbed = makeEmbed({
            title: 'Heavy Division | SimBrief Reference Error: Cannot Access Uninitialized',
            description: makeLines([
                'This error is caused when the user is attempting to import a flight plan on an outdated version of the Heavy Division Mod. To fix this error, please perform the following steps: ',
                '',
                '1. DELETE the B78XH mod in your community folder.',
                '',
                '2. Download an updated version of the mod available in <#852748629877850143>',
                '',
                '3. Extract the zip to your community folder.',
            ]),
            image: { url: SB_ReferenceError_URL },
        });

        return msg.channel.send({ embeds: [sbErrorEmbed] });
    },
};
