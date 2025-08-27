// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import { makeEmbed, makeLines } from "../../lib/embed";
import { STATION_TOKEN } from "../../secrets";
import Logger from "../../lib/logger";
import { EmbedBuilder } from "discord.js";
import { Station } from "../../lib/schemas/avwx/station";

export const station: CommandDefinition = {
	name: "station",
	description: "Provides station information",
	category: CommandCategory.UTILS,
	// eslint-disable-next-line consistent-return
	executor: async (msg) => {
		const splitUp = msg.content.replace(/\.station\s+/, " ").split(" ");

		if (splitUp.length <= 1) {
			await msg.reply("please provide an ICAO airport code.");
			return Promise.resolve();
		}
		const icaoArg = splitUp[1];

		const url = `https://avwx.rest/api/station/${icaoArg}`;

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Authorization: STATION_TOKEN,
				},
			});

			let stationEmbed: EmbedBuilder;

			// eslint-disable-next-line eqeqeq
			if (response.status == 200) {
				const stationReport = (await response.json()) as Station;
				const runwayIdents = stationReport.runways.map(
					(runways) =>
						`**${runways.ident1}/${runways.ident2}:** ` +
						`${runways.length_ft} ft x ${runways.width_ft} ft / ` +
						`${Math.round(runways.length_ft * 0.3048)} m x ${Math.round(runways.width_ft * 0.3048)} m`,
				);

				stationEmbed = makeEmbed({
					title: `Station Info | ${stationReport.icao}`,
					// eslint-disable-next-line no-sparse-arrays
					description: makeLines([
						"**Station Information:**",
						`**Name:** ${stationReport.name}`,
						`**Country:** ${stationReport.country}`,
						`**City:** ${stationReport.city}`,
						`**Latitude:** ${stationReport.latitude}°`,
						`**Longitude:** ${stationReport.longitude}°`,
						`**Elevation:** ${stationReport.elevation_m} m/${stationReport.elevation_ft} ft`,
						"",
						"**Runways (Ident1/Ident2: Length x Width):**",
						`${runwayIdents.toString().replace(/,/g, "\n")}`,
						,
						`**Type:** ${stationReport.type.replace(/_/g, " ")}`,
						`**Website:** ${stationReport.website}`,
						`**Wiki:** ${stationReport.wiki}`,
					]),
					footer: {
						text: "Due to limitations of the API, not all links may be up to date at all times.",
					},
				});
				// eslint-disable-next-line eqeqeq
			} else if (response.status == 400) {
				// Invalid ICAO/IATA code
				stationEmbed = makeEmbed({
					title: `Station Error | ${icaoArg.toUpperCase()}`,
					description: makeLines([
						`${icaoArg.toUpperCase()} is not a valid station code!`,
					]),
				});
			} else {
				// Unknown error
				stationEmbed = makeEmbed({
					title: "Station Error",
					description: makeLines([
						"There was an unknown error with the station request!",
					]),
				});
			}
			if (!msg.channel.isSendable()) {
				Logger.error("Channel is not sendable");
				return;
			}

			await msg.channel.send({ embeds: [stationEmbed] });
		} catch (error) {
			Logger.error(
				"failed to perform station request for ICAO",
				icaoArg,
				"error",
				error,
			);
		}
	},
};
