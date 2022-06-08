import { CommandDefinition } from '../../lib/command';
import { makeEmbed, makeLines } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const gitEmoji = '<:Interest_programming:984230714851606528>'
const modellingEmoji = '<:Interest_modeling:984230713656246282>'

const ROLES_EMBED =
    makeEmbed({
        title: 'Role Assignment',
        description: makeLines([
            'Please react below to set your role according to your skill set. If you do not have the skills in any of the available roles, please do not react as this will not benefit the development of the mod.',
            '',
            `${gitEmoji}: Interested in Programming`,
            `${modellingEmoji}: Interested in Modelling/Design`
        ]),
    });

const megaEmoji = '<:Server_updates:984230711588438096>'
const planeEmoji = '<:B78XH_Updates:984230712267898911>'
const progressEmoji = '<:progress:984230710615367710>'

const MEDIA_ANNOUNCEMENT_EMBED =
    makeEmbed({
        title: 'Media Announcements',
        description: makeLines([
            'Please react to the corresponding reactions to be pinged for various announcements.',
            '',
            `${megaEmoji}: Server Announcements`,
            `${planeEmoji}: Releases`,
            `${progressEmoji}: Progress`,
        ]),
    });


export const roleassignment: CommandDefinition = {
    name: 'roleassignment',
    description: 'Sends the role assignment messages',
    requiredPermissions: ['BAN_MEMBERS'],
    category: CommandCategory.MODERATION,
    executor: async (msg) => {
        await msg.channel.send({ embeds: [ROLES_EMBED] });
        let messageEmbed = await msg.channel.send({ embeds: [MEDIA_ANNOUNCEMENT_EMBED] });
        messageEmbed.react(gitEmoji);
        messageEmbed.react(modellingEmoji);
        messageEmbed.react(megaEmoji);
        messageEmbed.react(planeEmoji);
        messageEmbed.react(progressEmoji);

        // TODO: Add role handling via Heavy discord bot instead of Zira.

    },
};
