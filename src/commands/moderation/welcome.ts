// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

// TODO: Replace Url With custom one
const HEADER_IMAGE_URL = 'https://cdn.discordapp.com/attachments/927293618295824415/984448072283222036/hd__banner.png';
const HELP_IMAGE_URL = 'https://cdn.discordapp.com/attachments/970853183037530123/977399291196899398/Microsoft_Flight_Simulator_Screenshot_2022.05.21_-_11.06.19.01.png';

export const helpEmbed = makeEmbed({
    title: 'Heavy Division | Help and Support',
    fields: [
        {
            name: 'Aircraft Support',
            value: 'Be sure to read the <#835982074800373810> if you have a question or issue regarding the B78XH Modification. Check out <#964717019289247754> for any help operating or troubleshooting the B78XH mod. \n',
        },
        {
            name: 'Experimental Build and MSFS features',
            value: 'Please note we do not provide support for the *Experimental build and MSFS features such as the weather engine, or other planes \n',
        },
    ],
});

export const welcome: CommandDefinition = {
    name: 'welcome',
    description: 'Sends a welcome message',
    requiredPermissions: ['BanMembers'],
    category: CommandCategory.MODERATION,
    executor: async (msg) => {
        await msg.channel.send({ files: [HEADER_IMAGE_URL] });

        await msg.channel.send('Welcome to the **Official Discord Server** of Heavy Division!\n\nThe B78XH Project is a community-driven open source modification of the default Premium Deluxe Boeing 787-10 for Microsoft Flight Simulator.\n\nFeel free to download, test, and modify the aircraft. If you are interested in contributing or helping in development, have a look at our github and check out the issues and projects pages:  https://github.com/Heavy-Division/B78XH. \n\nFeel free to reach out to a member of our development team if you have questions about contributing!');

        await msg.channel.send({ files: [HELP_IMAGE_URL] });

        await msg.channel.send({ embeds: [helpEmbed] });
    },
};
