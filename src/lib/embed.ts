// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import discord from 'discord.js';
import { Colors } from '../constants';

export function makeEmbed(embed: discord.MessageEmbedOptions): discord.MessageEmbed {
    return new discord.MessageEmbed({
        color: Colors.HD_BLUE,
        ...embed,
    });
}

export function makeLines(lines: string[]): string {
    return lines.join('\n');
}
