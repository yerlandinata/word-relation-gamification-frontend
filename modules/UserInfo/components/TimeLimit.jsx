import React from 'react'
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const TimeLimit = ({ elapsedTime }) => elapsedTime < publicRuntimeConfig.gameTimeLimitMs ? (
    <div className="progress">
        <div
            className={`progress-bar bg-${decideProgressBarColor(elapsedTime)} progress-bar-striped progress-bar-animated`}
            role="progressbar"
            style={{ width: `${calculateTimePercentage(elapsedTime)}%` }}
            aria-valuenow={calculateTimePercentage(elapsedTime)}
            aria-valuemin="0"
            aria-valuemax="100"
        >
            {displayRemainingTime(elapsedTime)}
        </div>
    </div>
) : <span className="text-right">Waktu habis</span>

const calculateTimePercentage = (elapsedTime) => (1 - (elapsedTime / publicRuntimeConfig.gameTimeLimitMs)) * 100

const decideProgressBarColor = (elapsedTime) => {
    const percentage = calculateTimePercentage(elapsedTime)
    if (percentage > 60) {
        return 'success'
    } else if (percentage > 30) {
        return 'warning'
    }
    return 'danger'
}

const displayRemainingTime = (elapsedTime) => {
    const percentage = calculateTimePercentage(elapsedTime)
    const remainingMinutes = Math.floor((publicRuntimeConfig.gameTimeLimitMs - elapsedTime) / 60000)
    if (percentage > 60) {
        return `${remainingMinutes} menit`
    } else if (percentage > 30) {
        return `> ${remainingMinutes} mnt.`
    } else {
        return `< ${remainingMinutes + 1} m.`
    }
}

export default TimeLimit
