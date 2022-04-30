import { CommandDefinition } from '../../lib/command';
import { makeEmbed, makeLines } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const RULES_EMBED =
    makeEmbed({
        title: 'Heavy Division Server Rules',
        description: makeLines([
            'Below are the rules you must follow to participate in this discord server. Failure to abide by these rules could result in a removal from the server. Mute/ban evasions will result in a permanent ban.',
            '',
            'The <@&957506216848941056> reserve the right to action at discretion.',
            '',
            '1. By joining this server you agree to Discord\'s terms of service and guidelines: ',
            '',
            '[Terms of Service](https://discord.com/terms) ',
            '',
            '[Guidelines](https://discord.com/guidelines) ',
            '',
            '2. Please use English as a form of communication at all times in all channels. ',
            '',
            '3. Communicate with others politely. ',
            '',
            '4. Do not harass, disrespect and be toxic towards others. ',
            '',
            '5. Do not spam any of the channels. ',
            '',
            '6. Do not send any sort of NSFW or Illegal content as this is prohibited. Sending content related to this can result in a ban. ',
            '',
            '7. Do not ask for help for, distribute, or encourage downloading pirated pieces of software. This can result in a ban',
            '',
            '8. All decisions made by <@&955273994393780244> amd Heavy Division\'s Team are final. '

        ]),
    });


export const rules: CommandDefinition = {
    name: 'rules',
    description: 'Sends the rules',
    requiredPermissions: ['BAN_MEMBERS'],
    category: CommandCategory.MODERATION,
    executor: async (msg) => {
        await msg.channel.send({ embeds: [RULES_EMBED] });
    },
};
