import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

// eslint-disable-next-line camelcase
const cycleURL = 'https://cdn.discordapp.com/attachments/984255062010396702/1045974216299778098/Screen_Shot_2022-11-26_at_5.09.28_PM.png';

export const cycleWarning: CommandDefinition = {
    name: ['cycle', 'oldcycle', 'navdatawarning'],
    description: 'Provides solution for issues with navdata cycle warnings.',
    category: CommandCategory.SUPPORT,
    executor: (msg) => {
        const navdataCycleEmbed = makeEmbed({
            title: 'Heavy Division | Navdata Warning Message',
            description: makeLines([
                'Users will occasionally see "end date of data base has passed select new cycle on ident page."',
				"",
				'There are a couple of reasons why this message may appear: ',
                '- MSFS navdata is out of date.',
                '- Your navdata is out of date.',
				'',
				'If you own a navigraph subscription, close the sim and update your navdata using their installer. If you do not own a navigraph subscription, and are facing no issues with flight plan imports, this message can be safely ignored. If you face flight plan import issues when seeing this message, check that you are using the correct AIRAC cycle from your simBrief dispatch.',
            ]),
            image: { url: cycleURL },
        });

        return msg.channel.send({ embeds: [navdataCycleEmbed] });
    },
};