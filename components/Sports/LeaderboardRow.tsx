import React from 'react'

interface Props {
    className?: string;
    order: number;
    player: string;
    score: number;
    prize: number;
}

function LeaderboardRow({ className, order, player, score, prize }: Props) {
    return (
        <tr className={`bt1721 ${className}`}>
            <td>
                <div className="bt1722">
                    <div className="bt1724"></div>{order}<div className="bt1729 bt1730"></div>
                </div>
            </td>
            <td>
                <div className="bt1722">{player}******</div>
            </td>
            <td>
                <div className="bt1722 bt1723">{score}</div>
            </td>
            <td>
                <div className="bt1722">${prize}</div>
            </td>
        </tr>
    )
}

export default LeaderboardRow