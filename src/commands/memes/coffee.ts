// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

const COFFEE_URL = "https://www.youtube.com/watch?v=QPfIeVnkZ4Q";

export const coffee: CommandDefinition = {
	name: "coffee",
	description: "Would you like some coffee?",
	category: CommandCategory.MEMES,
	executor: async (msg) => {
        if (!msg.channel.isSendable()) {
            Logger.error("Channel is not sendable");
            return;
        }

        msg.channel.send(COFFEE_URL)
    },
};
