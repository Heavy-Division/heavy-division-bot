import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

// TODO: Add red box around the 787-10 in the content manager image, and replace with that. Upload in discord and call link here, do not use a local file.
const CONTENT_MANAGER_URL = 'https://media.discordapp.net/attachments/810316915464863774/870703249508950026/unknown.png?width=1618&height=910';

export const contentManager: CommandDefinition = {
    name: ['content','cm'],
    description: 'For initial troubleshooting, to make sure the base plane is up to date.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const contentManagerEmbed = makeEmbed({
            title: 'Heavy Division B78XH | Content Manager',
            description: 'The B78X Heavy is a modification of the default 787-10 for MSFS. Please ensure the base plane is updated by checking for updates in the content manager.',
            image: { url: CONTENT_MANAGER_URL } });
        await msg.channel.send({ embeds: [contentManagerEmbed] });
    },
};