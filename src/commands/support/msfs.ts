// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import { makeEmbed } from "../../lib/embed";
import Logger from "../../lib/logger";

export const msfs: CommandDefinition = {
	name: ["msfs"],
	description: "Provides links to MSFS support for sim issues",
	category: CommandCategory.SUPPORT,
	executor: (msg) => {
		const msfsEmbed = makeEmbed({
			title: "MSFS | Sim issues",
			description:
				"This is the Heavy Division Discord server, and we're only able to help with issues with our aircraft. For any core Microsoft Flight Simulator related issues please ask on [Microsoft Flight Simulator's Discord](https://discord.gg/msfs) or in the official [Microsoft Flight Simulator Forum](https://forums.flightsimulator.com/c/community/140).",
		});
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		return msg.channel.send({ embeds: [msfsEmbed] });
	},
};
