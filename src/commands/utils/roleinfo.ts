// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import type { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

export const roleinfo: CommandDefinition = {
	name: "roleinfo",
	description: "Lists the guild's current amount of members",
	category: CommandCategory.UTILS,
	executor: async (msg) => {
		const query = msg.content.replace(/\.roleinfo(\s|$)+/, "").toLowerCase();

		if (query.length < 1) {
			await msg.reply("You did not provide a role to search. (<role>)");
			return Promise.resolve();
		}

		const rolesCache = msg.guild.roles.cache;
		const role = rolesCache.find(
			(role) => role.name.toLowerCase().includes(query) || role.id === query,
		);

		if (!role) {
			await msg.reply("Invalid role");
			return Promise.resolve();
		}

		const roleinfoEmbed = makeEmbed({
			title: `${role.name}`,
			description: `**${role.members.size}** members have that role.`,
		});

		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}

		return msg.channel.send({ embeds: [roleinfoEmbed] });
	},
};
