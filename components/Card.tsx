import { CardProps } from '@/types';
import React from 'react'

function Card({banner,game_code,game_name,id,providerCode}:CardProps) {
    
    return (
        <div className="s1raq561">
            <a href="/game/plinko" keep-scroll-position="true" className="game-img-wrap">
                {/* <img
                    src="https://bc.imgix.net/game/image/f5bd4e53-2b58-4c29-b9ce-4da5336e3ad3.png?auto=format&amp;dpr=1&amp;w=200"
                    className="game-img" alt="" /> */}
                    <img
                    src={banner}
                    className="game-img" alt="" /> 
            </a>
            <div className="bot-info">
                <div className="game-tit">
                    <a href="/provider/BC Originals" keep-scroll-position="true" className="txt">
                        {game_name}
                    </a>
                    <button className="s117bhl3">
                        <svg className="s1ff97qc icon">
                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card