// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import type { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

export const membercount: CommandDefinition = {
	name: "membercount",
	description: "Lists the guild's current amount of members",
	category: CommandCategory.UTILS,
	executor: (msg) => {
		const { memberCount } = msg.guild;
		const membercountEmbed = makeEmbed({
			title: "Members",
			description: `${memberCount}`,
		});
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		return msg.channel.send({ embeds: [membercountEmbed] });
	},
};
