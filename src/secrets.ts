const fs = require('fs');

// Function to read secrets from the file
function readSecret(secretPath) {
  try {
    return fs.readFileSync(secretPath, 'utf8').trim();
  } catch (err) {
    console.error(`Error reading secret from ${secretPath}:`, err);
    return null;
  }
}

// Read secrets from Docker secret files specified by environment variables
export const DEBUG_MODE = readSecret(process.env.DEBUG_MODE);
export const NODE_ENV = readSecret(process.env.NODE_ENV);
export const DISCORD_TOKEN = readSecret(process.env.DISCORD_TOKEN);
export const METAR_TOKEN = readSecret(process.env.METAR_TOKEN);
export const STATION_TOKEN = readSecret(process.env.STATION_TOKEN);
export const BAN_APPEAL_URL = readSecret(process.env.BAN_APPEAL_URL)
