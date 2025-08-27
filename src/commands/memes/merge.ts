// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

const MERGE_URL = "https://tenor.com/view/git-merge-gitmerge-gif-18010083";

export const merge: CommandDefinition = {
	name: "merge",
	description: "GIT MERGE!",
	category: CommandCategory.MEMES,
	executor: async (msg) => {
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		msg.channel.send(MERGE_URL);
	},
};
