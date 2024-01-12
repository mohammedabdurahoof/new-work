import { ProgressBarProps } from '@/types'
import React from 'react'

export const calculatePercentage = (current: number, total: number): number => {
    return (current / total) * 100;
};


function ProgressBar({ current, total }: ProgressBarProps) {

    const percentage: number = Math.round((current / total) * 100)
    return (
        <div className="l1d038jc load-more-wrap">
            <span className="current">{current}</span>&nbsp; / &nbsp;<span className="total">{total}</span>
            <div className="progress">
                <div className="green" style={{ width: `${percentage}%` }}></div>
            </div>{percentage}%
        </div>
    )
}

export default ProgressBar