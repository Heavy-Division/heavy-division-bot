import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const takeoffPerf: CommandDefinition = {
    name: ['takeoff', 'calculator', 'perf'],
    description: 'Provides an explanation as to why there is no takeoff calculator for V-speeds or FLEX.',
    category: CommandCategory.B78XH,
    executor: (msg) => {
        const takeoffPerfEmbed = makeEmbed({
            title: 'Heavy Division B78XH | Where is the takeoff calculator?',
            description: makeLines(['Currently, Boeing does not publicly release takeoff performance data for the 787-10, which means it is difficult to create an accurate takeoff calculator.',
            ]),
        });

        return msg.channel.send({ embeds: [takeoffPerfEmbed] });
    },
};
