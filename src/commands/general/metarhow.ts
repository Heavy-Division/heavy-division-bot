import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const METAR_URL = 'https://i0.wp.com/www.dronepilotgroundschool.com/wp-content/uploads/2019/12/How-to-Read-a-METAR.jpg?resize=1536%2C864&ssl=1'; //TODO: Make a Heavy Division themed DARK guide on reading METAR reports

export const metarhow: CommandDefinition = {
    name: 'metarhow',
    description: 'Provides an image guide to reading METAR reports',
    category: CommandCategory.GENERAL,
    executor: (msg) => {
        const metarEmbed = makeEmbed({
            title: 'Heavy Division | Reading the METAR',
            image: { url: METAR_URL },
        });
        return msg.channel.send({ embeds: [metarEmbed] });
    },
};
