import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

// TODO: Add red box around the 787-10 in the content manager image, and replace with that. Upload in discord and call link here, do not use a local file.
const OCEAN_FIX_URL = 'http://img89.imageshack.us/img89/8084/yujx.jpg';

export const oceanfix: CommandDefinition = {
    name: ['ocean', 'ofix'],
    description: 'A guide on how to convert latitude and longitude into oceanic fixes on the flight plan.',
    category: CommandCategory.GENERAL,
    executor: async (msg) => {
        const oceanicFixEmbed = makeEmbed({
            title: 'Heavy Division B78XH | Oceanic Fixes',
            image: { url: OCEAN_FIX_URL } });
        await msg.channel.send({ embeds: [oceanicFixEmbed] });
    },
};