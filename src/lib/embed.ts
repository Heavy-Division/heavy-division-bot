import { EmbedBuilder, EmbedData } from 'discord.js';
import { Colors } from '../constants';

export function makeEmbed(embed: EmbedData): EmbedBuilder {
    return new EmbedBuilder({
        color: Colors.HD_BLUE,
        ...embed,
    });
}

export function makeLines(lines: string[]): string {
    return lines.join('\n');
}
