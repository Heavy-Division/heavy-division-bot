// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { say } from "cowsay";
import { Filter } from "bad-words";
import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

export const cowsay: CommandDefinition = {
	name: ["cowsay", "cs"],
	description: "Emulates the famous UNIX program `cowsay`.",
	category: CommandCategory.MEMES,
	executor: (msg) => {
		const filter = new Filter();
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}

		if (filter.isProfane(msg.content.trim())) {
			return msg.author.send("Watch your tongue!");
		}

		const messageMaxlength = 300;

		if (msg.content.length > messageMaxlength) {
			return msg.reply(`please keep it under ${messageMaxlength} characters.`);
		}
		const text = msg.content.replace(/\.(cowsay|cs)\s*/, "").replace(/`/g, "");

		if (text) {
			return msg.channel.send(`\`\`\`\n${say({ text })}\n\`\`\``);
		}

		return msg.reply("please provide some text.");
	},
};
