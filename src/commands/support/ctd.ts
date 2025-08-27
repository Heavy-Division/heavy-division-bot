import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import { makeEmbed, makeLines } from "../../lib/embed";
import Logger from "../../lib/logger";

export const ctd: CommandDefinition = {
	name: ["ctd", "crash"],
	description: "Provides direction for addressing CTD issues.",
	category: CommandCategory.SUPPORT,
	executor: (msg) => {
		const ctdEmbed = makeEmbed({
			title: "Heavy Division | Crash to Desktop",
			description: makeLines([
				"Please see the official MSFS forums for support addressing CTD issues.",
				"**No support will be offered via Discord.** ",
				"",
				"1. [Basic Troubleshooting](https://flightsimulator.zendesk.com/hc/en-us/articles/4406280399250-All-versions-Crashing-CTDs-issues-Basic-Troubleshooting) ",
				"",
				"2. [Crashing/CTD issues Checklist](https://flightsimulator.zendesk.com/hc/en-us/articles/360015893879-All-versions-Crashing-CTDs-issues-Checklist) ",
				"",
				"3. [Crashing/CTD Advanced Troubleshooting](https://flightsimulator.zendesk.com/hc/en-us/articles/4406280653202-All-versions-Crashing-CTDs-issues-Advanced-Troubleshooting) ",
			]),
		});
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		return msg.channel.send({ embeds: [ctdEmbed] });
	},
};
