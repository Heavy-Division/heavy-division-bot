// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import request from 'request';
import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';
import * as JSON from '../../lib/airports.json';

export const metar: CommandDefinition = {
    name: 'metar',
    description: 'Provides the METAR report of the requested airport',
    category: CommandCategory.UTILS,
    executor: async (msg) => {
        const splitUp = msg.content.replace(/\.metar\s+/, ' ').split(' ');

        const metarError = 'please provide an ICAO airport code.';

        if (splitUp.length <= 1) {
            await msg.reply(metarError);
            return Promise.resolve();
        }
        const icaoArg = splitUp[1];

        if (icaoArg.length !== 4) {
            await msg.reply(metarError);
            return Promise.resolve();
        }

        const isValidICAO = JSON.parse(airports.ICAO)

        if (!msg.content.includes(isValidICAO)) {
            await msg.reply (metarError);
            return Promise.resolve();
        } else {
            request({
            method: 'GET',
            url: `https://avwx.rest/api/metar/${icaoArg}`,
            headers: {
                Authorization: process.env.METAR_TOKEN },
        }, async (error, response, body) => {
            const metarReport = JSON.parse(body);
            const metarEmbed = makeEmbed({
                title: `METAR Report | ${metarReport.station}`,
                description: makeLines([
                    '**Raw Report**',
                    metarReport.raw,
                    ,
                    '**Basic Report:**',
                    `**Time Observed:** ${metarReport.time.dt}`,
                    `**Station:** ${metarReport.station}`,
                    `**Wind:** ${metarReport.wind_direction.repr} at ${metarReport.wind_speed.repr}kts`,
                    `**Visibility:** ${metarReport.visibility.repr}${metarReport.units.visibility}`,
                    `**Temperature:** ${metarReport.temperature.repr}C`,
                    `**Dew Point:** ${metarReport.dewpoint.repr}C`,
                    `**Altimeter:** ${metarReport.altimeter.value.toString()} ${metarReport.units.altimeter}`,
                ]),
                fields: [
                    {
                        name: 'Unsure of how to read the raw report?',
                        value: 'Type \`.metarhow\` to learn how to read raw reports.',
                        inline: false
                    },
                ],
                footer: { text: 'This METAR report may not accurately reflect the weather in the simulator. However, it will always be similar to the current conditions present in the sim.' },
            });

            await msg.channel.send({ embeds: [metarEmbed] });

        });
    },
};