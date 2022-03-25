"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Discord = require('discord.js');
require("dotenv").config();
var client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], allowedMentions: { parse: ["users"] } });
var express = require('express');
var fs = require('fs');
var prefix = ".";
client.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./src/commands/').filter(function (file) { return file.endsWith('.js'); });
for (var _i = 0, commandFiles_1 = commandFiles; _i < commandFiles_1.length; _i++) {
    var file = commandFiles_1[_i];
    var command = require("./commands/".concat(file));
    client.commands.set(command.name, command);
}
var ownerId = "396422714690240515";
client.once('ready', function () {
    console.log('HeavyBot is online!');
    client.user.setPresence({
        status: "online",
        activities: [{
                name: ".help",
                type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
            }]
    });
});
var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("The app is running on port ".concat(PORT));
});
client.on('messageCreate', function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var args, command;
    return __generator(this, function (_a) {
        console.log();
        if (message.content.includes(ownerId)) {
            if (message.author.id === '198174874479362048', '208058146273361921', '402403275799920641', '198918390163701761', '601162068611301377', '746781061232721921', '302614302899175424', '508343288453922828') {
                return [2 /*return*/, false];
            }
            else
                return [2 /*return*/, message.reply('```Do not ping Comi, Please```')];
        }
        if (!message.content.startsWith(prefix) || message.author.bot)
            return [2 /*return*/];
        args = message.content.slice(prefix.length).split(/ +/);
        command = args.shift().toLowerCase();
        if (command === 'restart') {
            client.commands.get('restart').run(client, message, args);
        }
        if (command === 'prm') {
            client.commands.get('prm').execute(message, args, Discord);
        }
        if (command === 'wx') {
            client.commands.get('wx').execute(message, args, Discord);
        }
        if (command === 'dz') {
            client.commands.get('dz').execute(message, args, Discord);
        }
        if (command === 'help') {
            client.commands.get('help').execute(message, args, Discord);
        }
        if (command === 'when') {
            client.commands.get('when').execute(message, args, Discord);
        }
        if (command === 'hud') {
            client.commands.get('hud').execute(message, args, Discord);
        }
        return [2 /*return*/];
    });
}); });
client.login(process.env.DISCORD_TOKEN);
