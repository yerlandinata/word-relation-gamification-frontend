/* eslint-disable */

const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    publicRuntimeConfig: {
        apiBaseUrl: process.env.API_BASE_URL,
        gameTimeLimitMs: process.env.GAME_TIME_LIMIT_MS
    },
}
