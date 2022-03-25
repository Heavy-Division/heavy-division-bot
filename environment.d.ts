declare global {
    namespace NodeJS {
        interface ProcessENC {
            DISCORD_TOKEN: string;
            guildId: string;
            environment: "dev" | "prod" | "debug";
        }
    }
}

export {};