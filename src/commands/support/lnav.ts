import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import {makeEmbed, makeLines} from '../../lib/embed';


// TODO: Implement a GIF guide of the following:

export const lnav: CommandDefinition = {
    name: 'lnav',
    description: 'Explains the plane not following LNAV route due to user error.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const lnavEmbed = makeEmbed({
            title: 'Heavy Division | Engaging LNAV',
            description: makeLines([
                'In order to operate the Boeing autopilot you must do the following after importing a route from simBrief: ',
                '',
                '1. On the RTE page press the \'ACTIVATE\' key following simBrief import. ',
                '',
                '2. Press the \'EXEC\' key once the green indicator appears ',
                '',
                '3. Engage by pressing the \'LNAV\' button on the glareshield.'
            ]),
        });

        await msg.channel.send({ embeds: [lnavEmbed] });

    },
};
