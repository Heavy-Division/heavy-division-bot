import { CommandDefinition } from '../lib/command';
import Logger from '../lib/logger';
import { when } from './general/when';
import { dlc } from './support/dlc';
import { boing } from './memes/boing';
import { msfs } from './support/msfs';
import { comi } from './memes/comi';
import { premium } from './memes/premium';
import { controls } from './support/controls';
import { deadzones } from './support/deadzones';
import { ctd } from './support/ctd';
import { simbriefimport } from './B78XH/simbriefimport';
import { membercount } from './utils/membercount';
import { airframe } from './B78XH/airframe';
import { versions } from './B78XH/version';
import { directx12 } from './support/directx12';
import { experimental } from './B78XH/experimental';
import { p3d } from './memes/p3d';
import { hud } from './support/hud';
import { contentManager } from './support/contentmanager';
import { help } from './utils/help';
import { donate } from './general/donate';
import { irs } from './B78XH/irs';
import { metarhow } from './general/metarhow';
import { coffee } from './memes/coffee';
import { merge } from './memes/merge';
import { defaultmeme } from './memes/default';
import { cowsay } from './memes/cowsay';
import { avatar } from './utils/avatar';
import { oceanfix } from './general/oceanfix';
import { wingflex } from './memes/wingflex';
import { ban } from './moderation/ban';
import { timeout } from './moderation/timeout';
import { unban } from './moderation/unban';
import { untimeout } from './moderation/untimeout';
import { whois } from './moderation/whois';
import { lnav } from './support/lnav';
import { addon } from './memes/addon';
import { rules } from './moderation/rules';
import { faq } from './moderation/faq';
import { roleassignment } from './moderation/roleassignment';
import { takeoffPerf } from './B78XH/takeoffPerf';
import { ping } from './utils/ping';
import { autothrottle } from './support/autothrottle';
import { metar } from './utils/metar';
import { station } from './utils/station';
import { welcome } from './moderation/welcome';
import { roleinfo } from './utils/roleinfo';
import { timezone } from './utils/timezone';
import { rot } from './utils/tod';
import { sbReferenceError } from './support/simbriefReferenceError';
import { drm } from './general/missingfeature';
import { ci } from './support/cleaninstall';
import { conflict } from './support/conflicts';
import { website } from './general/website';
import { apu } from './support/apu';
import { cycleWarning } from './support/cycle';
import { temporarycommand } from './general/temporaryCommand';
import { temporarycommandedit } from './moderation/temporaryCommandEdit';

const commands: CommandDefinition[] = [
    when,
    dlc,
    boing,
    msfs,
    comi,
    premium,
    controls,
    deadzones,
    ctd,
    simbriefimport,
    membercount,
    airframe,
    versions,
    directx12,
    experimental,
    p3d,
    hud,
    contentManager,
    help,
    donate,
    irs,
    metarhow,
    coffee,
    merge,
    defaultmeme,
    cowsay,
    avatar,
    oceanfix,
    wingflex,
    timeout,
    whois,
    untimeout,
    ban,
    unban,
    lnav,
    addon,
    rules,
    faq,
    roleassignment,
    takeoffPerf,
    ping,
    autothrottle,
    metar,
    station,
    welcome,
    roleinfo,
    timezone,
    rot,
    sbReferenceError,
    drm,
    ci,
    conflict,
    website,
    apu,
	cycleWarning,
    temporarycommand,
    temporarycommandedit,
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
