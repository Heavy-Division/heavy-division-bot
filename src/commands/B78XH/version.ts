import { CommandDefinition } from '../../lib/command';
import { Channels, CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';
import { TextChannel } from 'discord.js';

export const versions: CommandDefinition = {
    name: ['versions', 'version'],
    description: 'Explains the different B78XH versions',
    category: CommandCategory.B78XH,
    executor: async (msg) => {

        const linksChannel = msg.guild.channels.resolve(Channels.DOWNLOAD_LINKS) as TextChannel | null;
        const versionsEmbed = makeEmbed({
            title: 'B78XH | Versions',
            footer: { text: 'If you are having further problems, let us know in our #support channel.' },
            fields: [
                {
                    name: 'Stable, Development or Experimental?',
                    value: 'Guide to the B78XH versions',
                    inline: false,
                },
                {
                    name: 'Stable',
                    value: `> Stable is the version with features that are the most mature and most tested. We recommend downloading from our discord in ${linksChannel} to obtain the stable version.`,
                    inline: false,
                },
                {
                    name: 'Development',
                    value: '> Development will have the latest features that will eventually end up in the next stable release. '
                        + 'In general this version has the latest fixes and newest features but also a slightly higher risk of containing bugs. '
                        + 'Development updates whenever a change is made to the "main" branch on Github. '
                        + '\n>[download here](https://github.com/Heavy-Division/B78XH/archive/refs/heads/main.zip)',
                    inline: false,
                },
                {
                    name: 'Experimental',
                    value: makeLines([
                        '> The Experimental version is a test version to find problems, issues and to improve functionality based on your feedback. It is not meant to be used for daily use or serious flights with an Online ATC service.\n' +
                        '> Please see our [Experimental Version Support Page] **No support will be offered via Discord.**', // TODO: Add link to discord channel for exp version here
                    ]),
                    inline: false,
                },
            ],
        });

        await msg.channel.send({ embeds: [versionsEmbed] });

    },
};
