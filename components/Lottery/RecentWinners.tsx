'use client'

import { Winner } from '@/types';
import React from 'react'
import { useMediaQuery } from 'react-responsive';

function RecentWinners() {

    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const winners: Winner[] = [
        {
            player: 'Player1',
            lottery: 'Lottery1',
            prize: '$1000',
            avatarSrc: 'https://img2.bc.game/avatar/26034080/s',
            userName: 'Hosycbqmlpyb',
            lotteryName: 'Treasure Hunt 5/30',
            priceAmount: '3500',
            priceIconSrc: '/images/lottery/USD.black.png',
        },
        {
            player: 'Player1',
            lottery: 'Lottery1',
            prize: '$1000',
            avatarSrc: 'https://img2.bc.game/avatar/20211555/s',
            userName: 'Zprcnnuvnyb',
            lotteryName: 'Rapido Russia 8/20',
            priceAmount: '2000',
            priceIconSrc: '/images/lottery/USD.black.png',
        },
        {
            player: 'Player1',
            lottery: 'Lottery1',
            prize: '$1000',
            avatarSrc: 'https://img2.bc.game/avatar/27300375/s',
            userName: 'Mb009',
            lotteryName: 'Poland Keno 20/70',
            priceAmount: '1500',
            priceIconSrc: '/images/lottery/USD.black.png',
        },
        {
            player: 'Player1',
            lottery: 'Lottery1',
            prize: '$1000',
            avatarSrc: 'https://img2.bc.game/avatar/22287986/s',
            userName: 'HB18',
            lotteryName: 'Poland Keno 20/70',
            priceAmount: '770',
            priceIconSrc: '/images/lottery/USD.black.png',
        },
        {
            player: 'Player1',
            lottery: 'Lottery1',
            prize: '$1000',
            avatarSrc: 'https://img2.bc.game/avatar/22559051/s',
            userName: 'Oemlkyknjwb',
            lotteryName: 'FAST KENO 20/80',
            priceAmount: '750',
            priceIconSrc: '/images/lottery/USD.black.png',
        },

        // Add more winners as needed
    ];

    return (
        <div className="winner-section-recent winner-section">
            <div className="winner-recent-title winner-title">
                <img src="/images/lottery/recent-icon.svg" alt="Recent Winners Icon" />
                <h2 className="winner-title">Recent Winners</h2>
            </div>
            <div className="winner-recent-prizes-paid">
                <label className="prizes-paid-title">Prizes Paid Out</label>
                <label className="prizes-paid-amount">
                    <label>$</label>234164.77
                </label>
            </div>
            <div className="winner-recent-table-box">
                <div className="winner-recent-table-header">
                    <label>Player</label>
                    {!isMobile && <label>Lottery</label>}
                    <label className="price-item">Prize</label>
                </div>
                <div className="winner-recent-table-body">
                    <ul className="winner-recent-table-body-ul">
                        {winners.map((winner, index) => (
                            <li key={index} className="table-body-tr">
                                <span className="player-item">
                                    <img className="avatar" src={winner.avatarSrc} alt="Player Avatar" />
                                    <label className="user-name lottery-name ellipsis">{winner.userName}</label>
                                </span>
                                {!isMobile && <label className="lottery-name-box lottery-name ellipsis">{winner.lotteryName}</label>}
                                <span className="price-item-box">
                                    <label className="price-item">{winner.priceAmount}</label>
                                    <img className="price-icon" src={winner.priceIconSrc} alt="Price Icon" />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecentWinners