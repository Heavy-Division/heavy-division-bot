import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

const WEBSITE_URL = 'https://hdsimulations.com';

export const website: CommandDefinition = {
    name: ['website', 'site', 'web'],
    description: 'Link to the Heavy Division Website',
    category: CommandCategory.GENERAL,
    executor: (msg) => msg.channel.send(WEBSITE_URL),
};
