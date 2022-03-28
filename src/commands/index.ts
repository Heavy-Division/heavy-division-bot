import { CommandDefinition } from '../lib/command';
import Logger from '../lib/logger';
import { when } from './general/when';
import { dlc } from './support/dlc';
import { boing } from './memes/boing';
import { msfs } from './support/msfs';
import { comi } from './memes/comi';

const commands: CommandDefinition[] = [
    when,
    dlc,
    boing,
    msfs,
    comi
];

const commandsObject: { [k: string]: CommandDefinition } = {};

for (const def of commands) {
    for (const name of (typeof def.name === 'string' ? [def.name] : def.name)) {
        if (commandsObject[name]) {
            Logger.warn(`Duplicate command/alias inserted: ${name}`);
        }
        commandsObject[name] = def;
    }
}

export default commandsObject;