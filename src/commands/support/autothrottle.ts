import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import { makeEmbed } from "../../lib/embed";
import Logger from "../../lib/logger";

export const autothrottle: CommandDefinition = {
	name: ["at", "throttle", "autothrottle"],
	description: "Provides a fix for auto-throttle bug.",
	category: CommandCategory.SUPPORT,
	executor: (msg) => {
		const atEmbed = makeEmbed({
			title: "Heavy Division | AT Issue",
			description:
				"Issues with the AT are under investigation. To restore the normal auto-throttle function, push forward on the control column while Autopilot is engaged.",
		});

        if (!msg.channel.isSendable()) {
            Logger.error("Channel is not sendable");
            return;
        }
		return msg.channel.send({ embeds: [atEmbed] });
	},
};
