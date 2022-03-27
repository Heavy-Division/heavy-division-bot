export enum Colors {
    HD_BLUE = '#00E0FE',
}

export enum CommandCategory {
    B78XH = 'B78XH',
    SUPPORT = 'Support',
    GENERAL = 'General',
    UTILS = 'Utilities',
    MEMES = 'Memes',
    MODERATION = 'Moderation',
}

export enum Channels {
    MOD_LOGS = '783996780181585921',
    USER_LOGS = '779944761699729418',
    SCAM_LOGS = '932687046315737149',
}

export const UserLogExclude = [
    '628400349979344919', // StickyBot
    '910632773117702185', //FBW Bot
    '856826179491594271', //FBW Staging bot
    '864492608163807302', //BenW test bot
];

export const ModLogsExclude = [
    '910632773117702185', //FBW Bot
    '856826179491594271', //FBW Staging bot
    '864492608163807302', //BenW test bot
];