import type { CommandDefinition } from "../../lib/command";
import { CommandCategory } from "../../constants";
import { makeEmbed } from "../../lib/embed";
import Logger from "../../lib/logger";

export const avatar: CommandDefinition = {
	name: ["avatar", "av"],
	description: "Shows the selected user's avatar",
	category: CommandCategory.UTILS,
	executor: (msg) => {
		const user = msg.mentions.users.first() || msg.author;
		user.displayAvatarURL();
		const avatarEmbed = makeEmbed({
			title: `${user.tag}'s Avatar`,
			image: { url: user.displayAvatarURL({ size: 4096 }) },
		});
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		return msg.channel.send({ embeds: [avatarEmbed] });
	},
};
