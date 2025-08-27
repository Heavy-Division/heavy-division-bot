import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import { makeEmbed } from "../../lib/embed";
import Logger from "../../lib/logger";

export const donate: CommandDefinition = {
	name: "donate",
	description: "Provides info on donations.",
	category: CommandCategory.GENERAL,
	executor: (msg) => {
		const donateEmbed = makeEmbed({
			title: "Heavy Division | Donations",
			description:
				"See our [Open Collective](https://opencollective.com/heavy-division-simulations) to donate and view a breakdown of expenses. " +
				"You can also receive the donator role by boosting our server!",
		});


        if (!msg.channel.isSendable()) {
            Logger.error("Channel is not sendable");
            return;
        }
		return msg.channel.send({ embeds: [donateEmbed] });
	},
};
