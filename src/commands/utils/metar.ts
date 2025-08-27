import type {CommandDefinition} from "../../lib/command";
import {CommandCategory, Units, Colors} from "../../constants";
import {makeEmbed, makeLines} from "../../lib/embed";
import {METAR_TOKEN} from "../../secrets";
import Logger from "../../lib/logger";
import {MetarResponse} from "../../lib/schemas/avwx/metar";
import {EmbedBuilder} from "discord.js";

export const metar: CommandDefinition = {
    name: "metar",
    description: "Provides the METAR report of the requested airport",
    category: CommandCategory.UTILS,
    // eslint-disable-next-line consistent-return
    executor: async (msg) => {
        const splitUp = msg.content.replace(/\.metar\s+/, " ").split(" ");

        if (splitUp.length <= 1) {
            await msg.reply("please provide an ICAO airport code.");
            return Promise.resolve();
        }
        const icaoArg = splitUp[1];

        try {
            const url = `https://avwx.rest/api/metar/${icaoArg}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: METAR_TOKEN,
                }
            })

            let metarEmbed: EmbedBuilder;

            if (response.ok) {
                const metarReport = await response.json() as MetarResponse;

                const altimeterValue = () => {
                    let altimeterValue = `${metarReport.altimeter.value.toString()} ${metarReport.units.altimeter}`;
                    if (metarReport.units.altimeter === "inHg") {
                        altimeterValue += ` / ${(metarReport.altimeter.value * 33.863886666667).toFixed(0)} hPa`;
                    } else {
                        altimeterValue += ` / ${(metarReport.altimeter.value / 33.863886666667).toFixed(2)} inHg`;
                    }
                    return altimeterValue;
                };
                metarEmbed= makeEmbed({
                    color: Colors.HD_BLUE,
                    title: `METAR Report | ${metarReport.station}`,
                    // eslint-disable-next-line no-sparse-arrays
                    description: makeLines([
                        "**Raw Report**",
                        metarReport.raw,
                        "**Basic Report:**",
                        `**Time Observed:** ${metarReport.time.dt}`,
                        `**Station:** ${metarReport.station}`,
                        `**Wind:** ${metarReport.wind_direction.repr}${metarReport.wind_direction.repr === "VRB" ? "" : Units.DEGREES} at ${metarReport.wind_speed.repr} ${Units.KNOTS}`,
                        `**Visibility:** ${metarReport.visibility.repr} ${Number.isNaN(+metarReport.visibility.repr) ? "" : metarReport.units.visibility}`,
                        `**Temperature:** ${metarReport.temperature.repr} ${Units.CELSIUS}`,
                        `**Dew Point:** ${metarReport.dewpoint.repr} ${Units.CELSIUS}`,
                        `**Altimeter:** ${altimeterValue()}`,
                        `**Flight Rules:** ${metarReport.flight_rules}`,
                    ]),
                    fields: [
                        {
                            name: "Unsure of how to read the raw report?",
                            value: "Type '.metarhow' to learn how to read raw reports.",
                            inline: false,
                        },
                    ],
                    footer: {
                        text: "This METAR report may not accurately reflect the weather in the simulator. However, it will always be similar to the current conditions present in the sim.",
                    },
                });
                // eslint-disable-next-line eqeqeq
            } else if (response.status == 400) {
                // Invalid ICAO/IATA code
                metarEmbed = makeEmbed({
                    color: Colors.HD_BLUE,
                    title: `METAR Error | ${icaoArg.toUpperCase()}`,
                    description: makeLines([
                        `${icaoArg.toUpperCase()} is not a valid station code!`,
                    ]),
                });
            } else {
                // Unknown error
                metarEmbed = makeEmbed({
                    color: Colors.HD_BLUE,
                    title: "METAR Error",
                    description: makeLines([
                        "There was an unknown error with the METAR request!",
                    ]),
                });
            }
            if (!msg.channel.isSendable()) {
                Logger.error("Channel is not sendable");
                return;
            }
            await msg.channel.send({embeds: [metarEmbed]});

        } catch (error) {
            Logger.error("failed to fetch METAR for ICAO:", icaoArg, "error:", error);
            return;
        }
    },
}
