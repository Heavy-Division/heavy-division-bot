// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import winston from "winston";
import ecsFormat from "@elastic/ecs-winston-format";
import { NODE_ENV } from "../secrets";

const level = () => {
	return process.env.LOG_LEVEL || "INFO";
};

const format = () => {
	const env = NODE_ENV || "development";
	const isDevelopment = env === "development";
	return isDevelopment ? winston.format.simple() : ecsFormat();
};

const Logger = winston.createLogger({
	level: level(),
	format: format(),
	transports: [new winston.transports.Console()],
});

export default Logger;
