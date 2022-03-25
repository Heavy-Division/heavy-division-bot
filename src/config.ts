import dotenv from 'dotenv';
dotenv.config()
const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = process.env;

if(!CLIENT_ID || !GUILD_ID || !DISCORD_TOKEN) {
    throw new Error("Missing env variables")
}

const config: Record<string, string> = {
    CLIENT_ID,
    GUILD_ID,
    DISCORD_TOKEN
}

export default config