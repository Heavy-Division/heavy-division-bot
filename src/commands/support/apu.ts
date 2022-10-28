import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const APU_URL = 'https://cdn.discordapp.com/attachments/1025417231573733386/1035516838701973574/apu.png';

export const apu: CommandDefinition = {
    name: ['apu', 'apubug', 'centerfuel'],
    description: 'Provides the way to avoid the apu bug.',
    category: CommandCategory.SUPPORT,
    executor: (msg) => {
        const apuEmbed = makeEmbed({
            title: 'Heavy Division B78XH | APU Center fuel pump bug',
            description: 'Because of default behavior implemented by Asobo, the fuel logic is implemented incorrectly. Please refrain from turning on the center fuel pumps until both engines are running.',
            image: { url: APU_URL },
        });
        return msg.channel.send({ embeds: [apuEmbed] });
    },
};
