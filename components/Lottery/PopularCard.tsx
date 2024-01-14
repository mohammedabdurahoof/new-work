import { PopularCardProps } from '@/types'
import React from 'react'
import '../../styles/PopularSectionItem.css'

function PopularCard({
    area,
    areaIconSrc,
    drawDate,
    drawTitle,
    topPrizeAmount,
}: PopularCardProps) {
    return (
        <section className="phveoqe">
            <div className="header">
                <img className="like" src="/images/lottery/like-7884a8a2.svg" alt="Like Icon" />
                <div className="area-flag-box">
                    {area && <label className="area-flag">{area}</label>}
                    <img className="area-icon" src={areaIconSrc} alt={`Area Icon for ${area}`} />
                </div>
            </div>
            <div className="draw-date">
                Next Draw in
                <span className="bet-date-content"> {drawDate}</span>
            </div>
            <div className="draw-title ellipsis">{drawTitle}</div>
            <div className="prize-box">
                <label className="prize-desc">Top prize</label>
                <label className="prize-amount">
                    <span>$</span>
                    {topPrizeAmount}
                </label>
            </div>
            {area ? <div className="btn-box">
                <button className="ui-button button-normal btn-name">
                    <div className="button-inner">Bet Now</div>
                </button>
            </div> : <div className="btn-box">
                <button className="ui-button button-normal btn-name" >
                    <div className="button-inner">Bet 2 balls</div>
                </button>
                <button className="ui-button button-normal btn-name" >
                    <div className="button-inner">Bet 3 balls</div>
                </button>
            </div>}
        </section>
    )
}

export default PopularCard