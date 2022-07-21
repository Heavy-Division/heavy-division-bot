import { GatewayIntentBits } from 'discord.js';

const intents = {
    Guilds: GatewayIntentBits.Guilds,
    Members: GatewayIntentBits.GuildMembers,
    Presences: GatewayIntentBits.GuildPresences,
    Messages: GatewayIntentBits.GuildMessages,
    MessageReactions: GatewayIntentBits.GuildMessageReactions,
    EmojisAndStickers: GatewayIntentBits.GuildEmojisAndStickers,
    DirectMessages: GatewayIntentBits.DirectMessages,
    DirectMessageReactions: GatewayIntentBits.DirectMessageReactions,
    DirectMessageTyping: GatewayIntentBits.DirectMessageTyping,
    MessageContent: GatewayIntentBits.MessageContent,
};

export default intents;
