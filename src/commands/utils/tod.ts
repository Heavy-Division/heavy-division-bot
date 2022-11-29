import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const rot: CommandDefinition = {
    name: ['ruleofthree', 'rot', 'ro3', 'tod'],
    description: 'Roughly calculates TOD using the rule of 3',
    category: CommandCategory.UTILS,
    // eslint-disable-next-line consistent-return
    executor: (msg) => {
        const text = msg.content.split(' ').slice(1).join('');

        const altitude = parseInt(text.replace(/[^0-9.]/g, ''), 10);

        const error = 'Please specify a valid altitude (1000-10,000ft) or flight level between FL100 and FL550.';

        const flightLevelError = 'Hint: Try using the \'Flight Level\' convention for values above 10,000ft up to 50,000ft'
           + 'E.g. 18000ft = FL180 ';

        const errorEmbed = makeEmbed({
            title: 'Error | Invalid Input',
            description: error,
        });

        const flightLevelerrorEmbed = makeEmbed({
            title: 'Error | Use Flight Level Format',
            description: flightLevelError,
        });

        if (Number.isNaN(altitude) || altitude > 10000) {
            return msg.channel.send({ embeds: [errorEmbed] });
        } if (!text.startsWith('FL') && altitude < 1000) {
            return msg.channel.send({ embeds: [flightLevelerrorEmbed] });
        }
        if (text.startsWith('FL') && altitude > 550) {
            return msg.channel.send({ embeds: [errorEmbed] });
        } if (text.startsWith('FL') && altitude <= 550) {
            const todFL = Math.floor(altitude * (1 / 3) * (11 / 10));

            const todFlightLevelEmbed = makeEmbed({

                title: 'Heavy Division | Descent Approximation',
                description: makeLines([
                    `Begin a -3.0° descent ${todFL} nm from touchdown.`,
                ]),

                fields: [
                    {
                        name: 'This is an **approximation** of your TOD',
                        value: '*Values are an estimate, not exact calculation',
                        inline: false,
                    },
                ],
            });

            return msg.channel.send({ embeds: [todFlightLevelEmbed] });
        } if (altitude >= 1000) {
            const topOfDescent = Math.floor(altitude * (1 / 100) * (1 / 3) * (11 / 10));

            const todEmbed = makeEmbed({

                title: 'Heavy Division | Descent Approximation',
                description: makeLines([
                    `Begin a -3.0° descent ${topOfDescent} nm from touchdown.`,
                ]),

                fields: [
                    {
                        name: 'This is an **approximation** of your TOD',
                        value: '*Values may not be entirely accurate',
                        inline: false,
                    },
                ],
            });

            return msg.channel.send({ embeds: [todEmbed] });
        }
    },
};
