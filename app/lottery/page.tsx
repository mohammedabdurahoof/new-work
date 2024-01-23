"use client"

import { Chat, DrawCard, Footer, Header, LatestResultsTable, LotteryBanner, LotterySearch, LotteryTab, MobileSteps, PcSteps, PopularCard, RecentWinners, Search, SideBar, SlipBox, Tab, TopButton, TopWinning } from '@/components'
import React, { useState } from 'react'
import '../../styles/Lottery-ad84bc3f.css'
import '../../styles/index-cfec0d67.css'
import '../../styles/GridScrollList-6c8cb4d1.css'
import { useMediaQuery } from 'react-responsive'


function Page() {

    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const style = { '--grid-num': 4 } as React.CSSProperties;
    const pstyle = {
        '--grid-num': 3,
        '--grid-rows': 2,
    } as React.CSSProperties;


    const lotteries = [
        {
            order: 1,
            name: 'Treasure Hunt 5/30',
            iconSrc: 'https://bc.game/modules/lottery/USA-37a32b46.png',
            nextDraw: '11h 52m 23s',
            amount: 12563.7,
        },
        {
            order: 2,
            name: 'Rapido Russia 8/20',
            iconSrc: 'data:image/png;base64,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',
            nextDraw: '1d 3h 11m 45s',
            amount: 7293.4,
        },
        {
            order: 3,
            name: 'Lucky Six 35/48',
            iconSrc: 'data:image/png;base64,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',
            nextDraw: '12h 30m 15s',
            amount: 4862.1,
        },
        {
            order: 4,
            name: 'Mega Six 45/60',
            iconSrc: 'data:image/png;base64,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',
            nextDraw: '2d 15h 8m 37s',
            amount: 21891.2,
        },
        {
            order: 5,
            name: 'Rapido Egypt 8/20',
            iconSrc: 'https://bc.game/modules/lottery/USA-37a32b46.png',
            nextDraw: '1d 5h 42m 51s',
            amount: 3678.9,
        },
        // ... other lotteries
    ];


    return (

        <div className="pavjosj">
            {/* <SlipBox /> */}
            <div className="l1w5rrxf">
                <LotteryBanner />
                <LotterySearch />
                <section className="content-box">
                    <div className="g10bykma">
                        <div className="grid-tit">
                            <span className="txt">Upcoming Draw</span>
                        </div>
                        <div className="grid-nav">
                            <button className="ui-button button-normal slide-btn prev" disabled>
                                <div className="button-inner">
                                    <svg className="s1ff97qc icon arrow-icon prev-icon">
                                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                    </svg>
                                </div>
                            </button>
                            <button className="ui-button button-normal slide-btn next">
                                <div className="button-inner">
                                    <svg className="s1ff97qc icon arrow-icon">
                                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="s138s2zu grid-list" style={style}>
                            <DrawCard
                                logoSrc='data:image/png;base64,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'
                                betAddress='Poland Keno 20/70'
                                betAmount={1500}
                                drawTime={{ hours: 0, minutes: 2, seconds: 59 }}
                            />

                            <DrawCard
                                logoSrc='https://bc.game/modules/lottery/Slovakia-f2070951.png'
                                betAddress='Slovakia EKlub Keno 20/80'
                                betAmount={150}
                                drawTime={{ hours: 0, minutes: 5, seconds: 25 }}
                            />

                            <DrawCard
                                logoSrc='data:image/png;base64,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'
                                betAddress='Spanish Express 20/70'
                                betAmount={40}
                                drawTime={{ hours: 0, minutes: 10, seconds: 12 }}
                            />

                            <DrawCard
                                logoSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmzSURBVHgB7d0LUBT3HQfw33/vjuOOO4pANEAYiYoQFJ/xVR+NmqZRR0WrNhqD2GlTM53MxNZOp9ZmmDrGRrFJfNTUZqYOpergA8GopJqkOto4+ChOIgOCzyhWjYrhHsLd7r+//ykE9A7uuH0B/8/MccveAnf/L7v///73v7sE9G5uocVqNWUQStII0HSckwYUEoBADAGww8NH3KOl7+CjnuIDl6nDZW4ApZVUIJWUCpUud0Ml7JznBh0joDevl1ij3NJ4gcBkSqXJ+A6HECACyIAClfBLOf6+wxKlh51W43HYMsMFOqJ5IG+urzZ/VHZuuEGgk7HIXsQCG00IiQAVUEob8ekLLIbDIqGfut3eMlyDRNCQZoGs+7hm4jM9TMtMRsPz2RtPPkWItv8cFFcffA8nJAq7JWLc6c6ffhU0oHohrNtXNXlwSszmCc/Fp5oMApTV3IUXVx4FPcFsPFgwBSAZ3q0vmFkFKlItkPUHz88f/mzs2tH9Y5ME8t2f1WMgTR7VOXslMKx2/WPmKVCBERS2trhy0KjUuI/HPxefDJ2MrzFBYLZApVn27D1bJcG83Ll12v9AQbK0XvzKpcL2Y1f3LHmpb3lnDKOlh/UbWSyIjVW27KI32WcDhSjyiy2L9yZPoEdOvjI2eZYt0qi/pnVHEYjGD7PedqHoCPuMoADZA7EvLMoyeulZo0CGQReFzfJx7DOyzwoyk68OmVtos1mMeTj1C+gOCPTAR5HttT0fOgw9lsLWiQ9ABvIEklMUY5fgE5waCSHC9r9ikmIt0KdXFChsiVeUxt7J/XzS6dyJ30CYwg6EbUsNIt2Pk5nQAUTBGiZrZBKsnj8QVJBZfcPxdcmQ6uHLslIrIAxh1SHmhcX9MIzjpINhdCWpCbbIOWMTy/OKK34IYehwIFGv7s00EZGF0ambtHLqHW815UzsW7r+QPUc6KAOBRK5YFcfYqCl2NroCVwrcfYI4Sdjk3ewvjrogJADsb5SnIh9UIdwzUgEzq+e0WbD3NGJn6zZVZEKIQotkJ8W24UI8V9YE/cBrk3JcRbTtNFJZ1aVXk4I5edCamXZPdI/MYwBwAUlIynaVuf0nIYQtiZBryFRrxW9hTtC04ELyff7xyXsOH61KNjlgwrEuqhoOCF0DXAdMntUUtbGgzWLglm23U1W1PziXoIk7sZNlQkUoOSeeu1dNxyrDHvnWRYpPa2blhaWH35v3pDrbS3XbiBjMnp8GGEkvSFE6YnRQS0XbTUCds+DEsov18HU1cdAJ1gfzip85LS1UJsdF38pvfDWGz/q8x50UhtLa2D59q9ATygIkxz5Mz8P9HrAOiS3oDp6ytCn3wVOVoRKm2HKAXOg1wMGMijVUoLbPVWG43QrBNLsTz1YGuhlv4F8sL/m5alDE34AnELI8kBHHP0Gktk7eoPZpNzhdg7sRpGu9PfCE6XOuo/Hp8f3A05R2Nx/1Zy9p//j858IZNCzse8bDV1nXIJe4YE5I+7Y/erx+a0CWVN0bsi4tPgM4NRBIZv1nrec1SqQlF7Rf7JEGIBTBx5PshCTNK/lvFZ76gYBRsjV1WC3GGFw75h2l6t3e+HslTpQwqVbujrTwC8CNAef3v/u+0eiFhQNEYzwX5DJiL6x8OnbE9pdTs9je9UieWGoc9uscjbdvIYQY9t9LJ3RL1/up9aok7DsO127ecY2GMOmm+sQQqnso/C44GQmxzSP8vQFEplTlII1TMg9upw8WBdV3sGqcWzaF4hBhBeA01RPqzmHPfsCEQgPRGvPxFl9fYcP6xBKXwBOU2mJ9hT2LETl7H+a1x/aS+wRaWRnmwnE25gOnC5EmU2TBGzv8kB0wmYxDMRACA9EJ2KiTAOMWKGnKHqShoY2ldb4Hp0FpfQmtnjJ08DpAsuCNXvb75Ll1BIjUB6IjtBIgRAaCZwuUCCRAvsCnD4Q3GQBpyuC71J4nD5gFtjspbJcgYALH8sCN1mEB6IbhAXCN1k6UoetLKroBbm44LEsSMmp619MH544GjjN7Ttde0Koc3rOAacLLAvB4Rb1dc5XN/at23NCcDZ4PgNOF+pEzyHfgZDrd90edkwXOM3U3nvgTYq1PDxNqqq2/jJwmmrKwBfItTuuI8BpqikDXyC3XA1bgdNUUwbNB9PP19a7UhNsFuBUV33D4e6faLey6ebu9/LLdd37JA0NtSz75jXEvGBXqslgqNL6thHdDbtNhocK/RsKZvqGxzSvIQ3b5lRjEmXAqYqVeVMYTOsjhoTuBU5VEsCOlt+3CqTRK+1mqxBwqvCVtVfY3nJeq0DYZgvXki3AqQPL2rl95s2Ws54Y5OAB+DMm5wVOUayMPV5p3ePznwikIX/2eaxpdgOnLCxj3xbpMX6HAUlUyON1iXJY2UqS5Peion4D8d0Ai0AhcIrAfb18V8GPz/h7LeBAOdFAfgPsFqacvCh14JdfB3o5YCDuv2d9LVF4GzhZSUD+UJ8/+06g19scSup84NmAiZ4ETi6nfWXahnb7rVbs+PKliQN6HYgwEn7dpjA0eql45MubU/64IPMQhCv/yOWPKBcWVoYgp6MVt69QrkM+++pWdbDlHPTpCEcv3Z5w/a6b78GH6OJNZ8PRi/fGgBLWl16Yduv+Ay/lgoJlJTZd5UcxPJTgsDA+OHhhKqiBhXLP0SBRzi9Vw2iy4WD1Qh7Kk1iZqB5Gk7X7z4+6ctvZSDmfq9+4GvNKqkaAlvL2Vmecu3a/nnZzFdfuO/JKLoV93RhZRpiMyj0RHW1qPGwSiLb/HRrxiHDMZSJTj/92XNidsfIN+Xn9lMnmvroCp35PSPfoZsEVQ8S+9HcckckrYcvzHpCB7GOw7Nl7xlEg27r6PXLxGNN1URLmuQuy/gMykv3CAdi1fMwhmgfiUbEN7MAYdDHsM+GasckhRmbIHQaj6ChF68LdwwRC/oabsGHQBWAQZzCNnwc62icH5YeN5lLBdrF4CQHpHfxz34POiMK3lMAKR5+sTZBLFF3rVRvHa59fEg8m8Xf4X/YGu00DdAL4Xt1YRH8lXsOq+u0zVLlDpeoDq3EzlmAQhGV6DqYpCIlKa3DzdANUpNlIdxaMIAgr8NP/DIPRxe35tAyiiS5OPbAtKp5AJGkxFskcbNfbQE0UnFgKu7A9uNVRMOvfoDF9nQsytzDCGmEYLAhkJL6xkViRjgRK0uQ6Z8U3+I/QKkKhjAKUSRItczWKZ2HnvEbQCf2fnDO30GK1mNMJkdKJRNN91xmmkMCuvoZv3g4PH3GPlmbDa+opG0/GrgNGgG12qjCFSopBuFyeCix8N+jY/wFXwlYuCWycuQAAAABJRU5ErkJggg=='
                                betAddress='Greece KENO 20/80'
                                betAmount={360}
                                drawTime={{ hours: 1, minutes: 2, seconds: 24 }}
                            />
                        </div>
                        <div className="g10bykma popular-section">
                            <div className="grid-tit">
                                <span className="txt">Popular</span>
                            </div>
                            <div className="grid-nav">
                                <button className="ui-button button-normal slide-btn prev" disabled>
                                    <div className="button-inner">
                                        <svg className="s1ff97qc icon arrow-icon prev-icon">
                                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow" />
                                        </svg>
                                    </div>
                                </button>
                                <button className="ui-button button-normal slide-btn next">
                                    <div className="button-inner">
                                        <svg className="s1ff97qc icon arrow-icon">
                                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="s138s2zu grid-list" style={pstyle}>
                                <PopularCard
                                    area='BC Exclusive'
                                    areaIconSrc='/images/lottery/bc-small.svg'
                                    drawDate='03h 59m 40s'
                                    drawTitle='BC Lottery'
                                    topPrizeAmount='100000'
                                />
                                <PopularCard
                                    areaIconSrc='/images/lottery/USA.png'
                                    drawDate='06h 04m 47s'
                                    drawTitle='Treasure Hunt 5/30'
                                    topPrizeAmount='3500'
                                />
                                <PopularCard
                                    areaIconSrc='/images/lottery/download.png'
                                    drawDate=' 00h 00m 00s'
                                    drawTitle='Greece KENO 20/80'
                                    topPrizeAmount='360'
                                />
                                <PopularCard
                                    areaIconSrc='/images/lottery/Slovakia.png'
                                    drawDate='03h 59m 40s'
                                    drawTitle='Slovakia EKlub Keno 20/80'
                                    topPrizeAmount='150'
                                />
                                <PopularCard
                                    areaIconSrc='/images/lottery/download (1).png'
                                    drawDate='05h 59m 40s'
                                    drawTitle='FAST KENO 20/80'
                                    topPrizeAmount='2500'
                                />
                                <PopularCard
                                    areaIconSrc='/images/lottery/Morocco.png'
                                    drawDate='06h 59m 40s'
                                    drawTitle='Marruecos Keno 20/80'
                                    topPrizeAmount='250'
                                />
                            </div>

                        </div>

                    </div>
                    <section className="w13m5pld">
                        <RecentWinners />
                        <TopWinning lotteries={lotteries} />
                    </section>
                    <section className="l1uglo6i">
                        <h2 className="latest-results-title">Latest Results</h2>
                        <div className="latest-results-table-box">
                            <LatestResultsTable />
                            <div className="ui-pagination">
                                <div className="total">Total 10</div>
                                <div className="pages-box pages-wrap">
                                    <button className="active" disabled>
                                        1
                                    </button>
                                    <button className="">2</button>
                                    <button className="">3</button>
                                </div>
                                <div className="pages-box page-pn pageConic">
                                    <button disabled className="disabled common-btn previous-btn">
                                        <svg className="s1ff97qc icon prev">
                                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                        </svg>
                                    </button>
                                    <button className="common-btn next-btn">
                                        <svg className="s1ff97qc icon next">
                                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        <section className="h11oujmp" id="how-to-play">
                            <h2 className="how-to-play-section-title">How to play</h2>
                            {
                                isMobile ? <MobileSteps /> : <PcSteps />
                            }
                        </section>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default Page