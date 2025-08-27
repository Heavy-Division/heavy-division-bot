import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

const COMI_URL =
	"https://tenor.com/view/cookie-monster-waiting-tapping-gif-5331578";

export const comi: CommandDefinition = {
	name: "comi",
	description: "Stop with these sh*ts last chance...",
	category: CommandCategory.MEMES,
	executor: async (msg) => {
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		msg.channel.send(COMI_URL);
	},
};
