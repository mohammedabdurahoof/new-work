"use client"

import React from 'react'
import { useMediaQuery } from 'react-responsive';

function TopRated() {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });


    const gridNum = isMobile ? 2 : isTablet ? 4 : 6

    return (
        <div className="ggjjku9 s1kcy63f best-list">
            <div className="grid-tit"><span className="txt">Top Rated Games</span></div>
            <div className="grid-nav"><a href="/gamelist/home-best" keep-scroll-position="true" className="num"><span>View
                all</span></a><button className="ui-button button-normal slide-btn prev" >
                    <div className="button-inner"><svg className="s1ff97qc icon">
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg></div>
                </button><button className="ui-button button-normal slide-btn next">
                    <div className="button-inner"><svg className="s1ff97qc icon">
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg></div>
                </button></div>
            <div className="s138s2zu grid-list" style={{ '--grid-num': gridNum } as React.CSSProperties}>
                <div className="sfistqe grid-item"><a href="/game/limbo" keep-scroll-position="true" className="game-img-wrap"><img
                    src="https://bc.imgix.net/game/image/ff0b0511-1f48-43d1-8dd3-294bb6437b4b.png?auto=format&amp;dpr=1&amp;w=200"
                    className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BC Originals" keep-scroll-position="true" className="txt">BC
                            Originals</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/plinko" keep-scroll-position="true" className="game-img-wrap"><img
                    src="https://bc.imgix.net/game/image/f5bd4e53-2b58-4c29-b9ce-4da5336e3ad3.png?auto=format&amp;dpr=1&amp;w=200"
                    className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BC Originals" keep-scroll-position="true" className="txt">BC
                            Originals</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/keno" keep-scroll-position="true" className="game-img-wrap"><img
                    src="https://bc.imgix.net/game/image/bd9f3721-d6c7-4581-8b2f-b4e065e334c2.png?auto=format&amp;dpr=1&amp;w=200"
                    className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BC Originals" keep-scroll-position="true" className="txt">BC
                            Originals</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/hash-dice" keep-scroll-position="true" className="game-img-wrap"><img
                    src="https://bc.imgix.net/game/image/962f58da-ef5b-4393-ab85-d86464684205.png?auto=format&amp;dpr=1&amp;w=200"
                    className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BC Originals" keep-scroll-position="true" className="txt">BC
                            Originals</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/video-poker" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/cc1d6d33-e97f-4948-8513-13f7fc450157.png?auto=format&amp;dpr=1&amp;w=200"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BC Originals" keep-scroll-position="true" className="txt">BC
                            Originals</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/sword" keep-scroll-position="true" className="game-img-wrap"><img
                    src="https://bc.imgix.net/game/image/1abc3771-090d-470a-b8a9-ae9ba7977116.png?auto=format&amp;dpr=1&amp;w=200"
                    className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BC Originals" keep-scroll-position="true" className="txt">BC
                            Originals</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/grand-blue-by-fa-chai" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/a86f0f3840.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/FA CHAI" keep-scroll-position="true" className="txt">FA
                            CHAI</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/book-of-light-by-platipus" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/ec7b2e33-26d4-435d-a20e-c6c455de2e3f.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Platipus" keep-scroll-position="true"
                            className="txt">Platipus</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/jokers-treasure-by-spadegaming" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/02945510-ec09-4c55-bb80-298bb2f46857.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Spadegaming" keep-scroll-position="true"
                            className="txt">Spadegaming</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/wolf-spins-243-by-1spin4win" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/053d11975f.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/1Spin4Win" keep-scroll-position="true"
                            className="txt">1Spin4Win</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/tree-of-fortune-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/f6f0ce4a-cb6b-48fa-a3fe-763677ea318c.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/fortune-rabbit-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/146b9335-e513-4fd4-be0c-d9b999d1618a.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/book-of-dead-by-playngo" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/e1fa345a-8d5e-4531-b9eb-af74d4705b29.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PlaynGo" keep-scroll-position="true"
                            className="txt">PlaynGo</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/sun-of-egypt-3-by-3-oaks" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/11392d25-7731-4448-84f2-ad0c3df09b7d.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/3 Oaks" keep-scroll-position="true" className="txt">3
                            Oaks</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/treasures-of-fire-scatter-pays-by-playson-asia"
                    keep-scroll-position="true" className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/40e7db93-30af-420a-8347-9a8bb7edd1c5.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Playson Asia" keep-scroll-position="true" className="txt">Playson
                            Asia</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/lightning-roulette-by-evolution-gaming"
                    keep-scroll-position="true" className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/e19bc12a-9c79-4ef5-9d33-9222c40fe067.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Evolution Gaming" keep-scroll-position="true"
                            className="txt">Evolution Gaming</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/thor-fortune-by-yes-bingo" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/d7c02711-ef77-4eae-8972-1fc2b41d3711.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Yes Bingo" keep-scroll-position="true" className="txt">Yes
                            Bingo</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/golden-genie-by-fa-chai" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/3dedefb7b7.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/FA CHAI" keep-scroll-position="true" className="txt">FA
                            CHAI</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/crazy-fafafa-by-jili" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/77727ee5-4215-4324-a489-3e6d1ace989f.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/JILI" keep-scroll-position="true" className="txt">JILI</a><button
                            className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/razor-returns-by-push-gaming" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/58da4560-fb5d-45dd-babd-3ca3c9e3900a.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Push Gaming" keep-scroll-position="true" className="txt">Push
                            Gaming</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/magic-piggy-by-hacksaw" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/db4a1de7-f0d2-4f1c-99ec-ee56695a2ca7.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Hacksaw" keep-scroll-position="true"
                            className="txt">Hacksaw</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/aladdin-fantastic-journey-by-bolebit" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/b53949ee-3ccf-41fe-a98a-651a82ff3946.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BoleBit" keep-scroll-position="true"
                            className="txt">BoleBit</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/night-market-2-by-fa-chai" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/42806cdbae.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/FA CHAI" keep-scroll-position="true" className="txt">FA
                            CHAI</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/cocktail-nights-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/ed776f1d-6a6f-4c5d-9dc7-bd753c714778.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/gold-rush-by-fa-chai" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/2c5fd2920e.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/FA CHAI" keep-scroll-position="true" className="txt">FA
                            CHAI</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/bc-cash-by-bgaming" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/bd433bfa-c8fa-4d60-a42c-fed1280c4831.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/BGaming" keep-scroll-position="true"
                            className="txt">BGaming</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/wanted-dead-or-a-wild-by-hacksaw" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/f6cf9f4d-6f46-4efa-88a1-a435396dd940.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Hacksaw" keep-scroll-position="true"
                            className="txt">Hacksaw</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/rip-city-by-hacksaw" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/203ba4e1-4fc2-4537-a51b-cf249282b075.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Hacksaw" keep-scroll-position="true"
                            className="txt">Hacksaw</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/heist-stakes-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/8c5fa98d-414a-43d4-9257-70fd6878e20c.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/fortune-tiger-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/c803af46-f500-4e0c-aade-345ed364e785.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/diamond-hunt-by-platipus" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/31406851-2df1-4740-8365-1a1082aab266.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Platipus" keep-scroll-position="true"
                            className="txt">Platipus</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/lucky-win-spins-by-1spin4win" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/4d111ac1-036a-4e09-a931-5878cdbb0402.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/1Spin4Win" keep-scroll-position="true"
                            className="txt">1Spin4Win</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/double-fortune-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/59f59f51-e19f-466f-9528-893d277408d4.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/mahjong-ways-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/3ab84825-7a44-4793-b167-f7bdc0dbb8f2.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/caishen-wealth-by-3-oaks" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/9f35b6872b.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/3 Oaks" keep-scroll-position="true" className="txt">3
                            Oaks</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/legend-of-perseus-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/7c9c1079-80d2-465f-8c55-b066edbfbacc.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/rise-of-apollo-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/e2fecd32-ea4d-4fcc-96f7-805387d46352.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/777-more-cash-by-ygr" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/16cddb83-2d59-4849-be46-62a363650a52.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/YGR" keep-scroll-position="true" className="txt">YGR</a><button
                            className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/prosperity-fortune-tree-by-pg-soft" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/d5766916-768c-47cb-9903-1a1d11c7c66e.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/PG Soft" keep-scroll-position="true" className="txt">PG
                            Soft</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
                <div className="sfistqe grid-item"><a href="/game/dragons-clusterbuster-by-red-tiger" keep-scroll-position="true"
                    className="game-img-wrap"><img
                        src="https://bc.imgix.net/game/image/d6598652-5925-499d-af72-73c10783bfc4.png?w=100&amp;auto=format&amp;cs=tinysrgb&amp;blur=100"
                        className="game-img" alt="" /></a>
                    <div className="bot-info">
                        <div className="game-tit"><a href="/provider/Red Tiger" keep-scroll-position="true" className="txt">Red
                            Tiger</a><button className="s1s823mz"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Inform"></use>
                            </svg></button></div><button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRated