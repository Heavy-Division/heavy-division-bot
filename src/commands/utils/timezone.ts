import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

export const timezone: CommandDefinition = {
    name: ['Timezone', 'utc', 'gmt', 'zulu'],
    description: 'Returns the time at a given timezone',
    category: CommandCategory.UTILS,
    executor: async (msg) => {
        const currentDate = new Date();

        const utc = currentDate.getUTCHours();

        const minute = currentDate.getUTCMinutes();

        const args = msg.content.split(' ').slice(1);

        const parseTime = parseInt(args.join('')) + utc;

        if (args.length > 1 || args.length === 0) {
            return msg.channel.send('No timezone was provided.');
        } else if (parseTime >= 24) {
            const overTime = parseTime - 24;
            return msg.channel.send(`The time is ${overTime}:${minute} there.`);
        }
        if (minute < 10) {
            return msg.channel.send(`The time is ${parseTime}:0${minute} there.`);
        }
        return msg.channel.send(`The time is ${parseTime}:${minute} there.`);

    },
};
