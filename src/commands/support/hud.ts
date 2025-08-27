import type { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";
import { CommandCategory } from "../../constants";
import Logger from "../../lib/logger";

const HUD_URL =
	"https://media.discordapp.net/attachments/810316915464863774/948055227960004688/unknown.png";

export const hud: CommandDefinition = {
	name: "hud",
	description: "For issues with the HUD",
	category: CommandCategory.SUPPORT,
	executor: (msg) => {
		const hudEmbed = makeEmbed({
			title: "Heavy Division B78XH | HUD Alignment Issue",
			description:
				"The HUD misalignment is a known issue for the default 787 for MSFS. Open 'General' settings then 'Camera' to adjust the HUD camera until it is aligned.",
			image: { url: HUD_URL },
		});
		if (!msg.channel.isSendable()) {
			Logger.error("Channel is not sendable");
			return;
		}
		return msg.channel.send({ embeds: [hudEmbed] });
	},
};
