// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory, Roles } from '../../constants';

const FLIGHT_DECK_IMAGE_URL = 'https://media.discordapp.net/attachments/820431837901750282/952035653166719046/unknown.png?width=1618&height=910';

const faqEmbeds = [
    makeEmbed({
        title: 'FAQ',
        fields: [
            {
                name: 'Where can I download the B78XH addon?',
                value: '> You can download the Stable, Development and Experimental builds in <#852748629877850143> You can also download the addon directly from the [GitHub Repository](https://github.com/Heavy-Division/B78XH) to install manually. \n ',
            },
            {
                name: 'When is the Next Update?',
                value: "> We don't know when the next update will be, however you can keep track of development in <#837105238158082099> and <#821078930840354868>. ",
            },
            {
                name: 'How do I join the team?',
                value: "> That depends on which role you are seeking. Most team roles are on an invite-only basis. You can message a member of the team you're seeking to join for more info. \n",
            },
            {
                name: 'Is it payware?',
                value: '> No, it is completely free and open-source.\n ',
            },
            {
                name: 'Where do we report bugs?',
                value: '> Report it in <#811459130313015328> for one of our developers to see.\n ',
            },
            {
                name: 'Where is the plane in-sim?',
                value: '> The B78XH is a modification of the default premium deluxe aircraft, you need to own the premium deluxe version of MSFS to use the Heavy Division Mod. \n ',
            },
            {
                name: 'I am a real life Aero Engineer, GA, B787-8/9/10 Pilot, or Cabin Crew. Where do I get my role?',
                value: `> Simply DM one of the <@&${Roles.ADMIN}> or <@&${Roles.MODERATOR}> with proof of your job!\n `,
            },

        ],
    }),
];

export const faq: CommandDefinition = {
    name: 'faq',
    description: 'Sends the FAQ',
    requiredPermissions: ['BanMembers'],
    category: CommandCategory.MODERATION,
    executor: async (msg) => {
        await msg.channel.send({ files: [FLIGHT_DECK_IMAGE_URL] });
        await Promise.all(faqEmbeds.map(async (faqEmbed) => {
            await msg.channel.send({ embeds: [faqEmbed] });
        }));
    },
};
