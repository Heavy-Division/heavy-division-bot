// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

const P3D_URL =
	"https://tenor.com/view/monkey-pissed-mad-angry-furious-gif-4720563";

export const p3d: CommandDefinition = {
	name: "p3d",
	description: "No!",
	category: CommandCategory.MEMES,
	executor: async (msg) => {
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		msg.channel.send(P3D_URL);
	},
};
