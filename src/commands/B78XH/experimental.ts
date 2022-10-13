// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory, Channels } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const experimental: CommandDefinition = {
    name: ['experimental', 'exp'],
    description: 'Explains the current state of the experimental build',
    category: CommandCategory.B78XH,
    executor: (msg) => {
        const experimentalEmbed = makeEmbed({
            title: 'Heavy Division | Experimental Version',
            description: makeLines([
                `Check <#${Channels.DOWNLOAD_LINKS}> to see the current uses of the experimental build. **No support will be offered via Discord.** `,
                '',
                'Read the known issues page first. If your issue is not listed, please use the [bug report form](https://github.com/Heavy-Division/B78XH/issues/new?assignees=&labels=Bug&template=bug_report_beta.yaml) on our github page to report issues and bugs. ',
                '',
                'The Experimental version is a test version to find problems, issues and to improve functionality based on your feedback. It is not meant to be used for daily use or serious flights with an Online ATC service. ',
            ]),
        });

        return msg.channel.send({ embeds: [experimentalEmbed] });
    },
};
