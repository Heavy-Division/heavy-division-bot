import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

const WEBSITE_URL = "https://hdsimulations.com";

export const website: CommandDefinition = {
	name: ["website", "site", "web"],
	description: "Link to the Heavy Division Website",
	category: CommandCategory.GENERAL,
	executor: async (msg) => {
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}

		msg.channel.send(WEBSITE_URL);
	},
};
