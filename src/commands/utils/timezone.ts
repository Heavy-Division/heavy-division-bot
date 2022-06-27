import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

export const timezone: CommandDefinition = {
    name: ['Timezone', 'utc', 'gmt', 'zulu'],
    description: 'Returns the time at a given timezone',
    category: CommandCategory.UTILS,
    // eslint-disable-next-line consistent-return
    executor: async (msg) => {
        const text = msg.content;

        const currentDate = new Date();

        /**
         * Is end of command number or negative number
         */
        const regex = /-?[0-9]+$/;
        const result = text.match(regex);
        // Result is null if end of command is not number
        if (result !== null) {
            const convertedResult = Number(result);
            // Is the number from command valid offset
            if (convertedResult < -12 || convertedResult > 14) {
                return msg.channel.send('Non valid offset');
            }

            // Add offset to hours
            currentDate.setUTCHours(currentDate.getUTCHours() + convertedResult);
            // convert values to string
            const hours = currentDate.getUTCHours().toString();
            const minutes = currentDate.getUTCMinutes().toString();
            // print; padStart -> make the value length 2 chars and fill the empty chars with '0';
            return msg.channel.send(`The time is ${hours.padStart(2, '0')}:${minutes.padStart(2, '0')} there.`);
        }
    },
};
