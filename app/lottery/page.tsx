"use client"

import { Chat, DrawCard, Footer, Header, LatestResultsTable, LotteryBanner, LotterySearch, LotteryTab, PopularCard, RecentWinners, Search, SideBar, SlipBox, Tab, TopButton, TopWinning } from '@/components'
import React, { useState } from 'react'
import '../../styles/Lottery-ad84bc3f.css'
import '../../styles/index-cfec0d67.css'
import '../../styles/GridScrollList-6c8cb4d1.css'


function page() {
    const [tabIndex, setTabIndex] = useState(1)

    const style = { '--grid-num': 4 } as React.CSSProperties;
    const pstyle = {
        '--grid-num': 3,
        '--grid-rows': 2,
    } as React.CSSProperties;

    const tabContant = [
        {},
        {
            contant: "To begin wagering select your preferred Lucky Numbers game by clicking on the 'BET' button. Choose from our extensive list of international Lucky Numbers draws by searching available draws on the Lucky Numbers page or find the most recent upcoming draws on the home page carousel. Numerous Lucky Numbers draws take place regularly offering you the chance to win every day of the week. Once you have selected the Lucky Numbers you will be provided with betting market types available for your selected game.",
            image: "step1-desc.png"
        },
        {
            contant: "Varying selection ranges, above or below predicted sums and odd or even options are easy and quick to choose. On completion of choosing your market, your wager will be added to the betslip. Finalise your wager by selecting the “BET” button. By selecting the Regular Draw option you can choose your own numbers. If your pick matches the Lucky Numbers results exactly you will win your wager. The prize will be the multiple of the stake and the odds within the wagered market. Other markets types, such as Draw Sum, allow wagering on the outcome of Lucky Numbers e.g. whether, for a particular draw, the sum of balls drawn will be odd or even. Remember, there can be only one unique bet per outcome, per wager, for the side markets.",
            image: "step2-desc.png"
        },
        {
            contant: "You may wager on multiple draws by changing the draws option. The draws available are limited to draws within a week period. Rapid Lucky Numbers, which occur in a very short space of time, will have a maximum of 10 draws available. Similarly, you can change your stake per wager. Each wager entry will display the possible winnings for all your selected draws. This amount is the total sum of all your wagers as if you had won every wager. Once you have verified your wager information, complete your transaction by pressing the 'BET' button.",
            image: "step3-desc.png"
        },
        {
            contant: "The wager page will summarise all transactions with the date,description, status, total stake and total payouts made. In addition, we provide a full breakdown of your wager in the wager details section including important information such as transaction date, Lucky Numbers details, wager stake, odds, Lucky Numbers results, draw ID, wagered market type and payouts.",
            image: "step4-desc.png"
        }
    ]

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
        <div id="root" className="side-unfold base-layout g6">
            <div className="s1u0fsnz"></div>
            <Header />
            <SideBar />
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
                                    logoSrc='data:image/png;base64,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'
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
                                <div className="pc">
                                    <div className="how-to-play-section-step">
                                        <LotteryTab order={1} desc='Select your Game' onClick={setTabIndex} tabIndex={tabIndex}>
                                            <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                                <path
                                                    d="M23.269 21.0549C23.348 21.6009 23.407 22.8369 23.269 23.5229C22.749 26.1199 21.407 28.3439 19.244 30.1949L18.876 30.4999L18.159 30.1599C18.558 29.3029 18.797 28.4619 18.876 27.6349C18.994 26.3949 18.865 26.0849 18.876 26.0359C19.513 25.8999 20.211 25.2229 21.069 24.2749C21.957 23.2929 22.805 21.9019 23.269 21.0549ZM9.996 22.3739C10.61 23.1879 11.434 23.9129 12.469 24.5479C13.532 25.2009 14.718 25.6469 15.83 25.8899C15.574 26.0559 13.563 26.4949 11.87 25.4519C10.741 24.7569 10.116 23.7299 9.995 22.3729L9.996 22.3739ZM11.402 12.7189C10.35 14.7309 9.534 16.8149 8.955 18.9699C7.761 18.8819 6.589 19.3009 5.44 20.2269C5.19 19.8969 5.048 19.6689 5.011 19.5419C5.794 17.8599 7.584 15.6599 8.522 14.6679C9.524 13.6079 10.485 12.9589 11.402 12.7189ZM24.855 2.59091C24.989 2.66191 25.092 2.76891 25.158 2.89391L25.176 2.92491C25.969 4.32191 26.684 6.51091 26.86 8.29891C27.166 11.4009 26.933 11.9619 26.119 14.1239C26.112 14.1269 26.105 14.1309 26.098 14.1339C25.974 14.4389 25.833 14.7429 25.673 15.0429C25.456 15.4509 25.215 15.8349 24.953 16.1949C21.728 21.6229 19.625 24.5269 18.642 24.9049C17.898 25.2389 15.99 24.7879 13.861 23.6559C11.582 22.4439 10.032 20.9019 10.073 20.1069C9.928 18.9239 11.193 15.4589 13.868 9.71191L14.101 9.21391L14.235 8.96191C14.631 8.21791 15.107 7.55191 15.642 6.97391C16.471 5.88591 17.145 5.32391 19.286 4.16691C20.867 3.31291 22.75 2.62491 24.352 2.50091C24.396 2.49791 24.439 2.49891 24.482 2.50491C24.607 2.49991 24.735 2.52691 24.854 2.58991L24.855 2.59091ZM18.122 10.3829C16.757 9.80291 15.023 10.8139 14.249 12.6409C13.475 14.4679 13.953 16.4199 15.318 16.9999C16.683 17.5799 18.417 16.5689 19.191 14.7419C19.965 12.9149 19.487 10.9629 18.122 10.3829ZM16.954 11.6789L16.784 11.9989L17.412 11.8429L17.452 11.8339C17.519 11.8219 17.581 11.8269 17.636 11.8469L17.668 11.8609C17.719 11.8869 17.761 11.9279 17.79 11.9829L18.343 13.1539L18.355 13.1859C18.401 13.3309 18.371 13.5259 18.275 13.7059L17.406 15.3399L17.383 15.3809C17.28 15.5539 17.133 15.6729 16.991 15.6959L15.737 15.8429H15.701C15.642 15.8399 15.589 15.8179 15.543 15.7819L15.517 15.7579C15.475 15.7149 15.441 15.6579 15.42 15.5889L14.939 14.2269C14.893 14.0819 14.911 13.9099 14.988 13.7639L16.543 10.8399L16.55 10.8309C16.565 10.8149 16.595 10.7979 16.606 10.7999C16.662 10.8079 16.714 10.8199 16.76 10.8339L16.795 10.8449C17.12 10.9619 17.181 11.2519 16.954 11.6779V11.6789ZM17.258 12.7039L17.224 12.6899C16.757 12.5099 16.143 12.8179 15.835 13.3959C15.52 13.9879 15.608 14.7099 16.032 15.0079L16.07 15.0329C16.265 15.1509 16.497 15.1509 16.727 15.0519L16.734 15.0479C16.746 15.0389 16.762 15.0169 16.76 14.9969L16.758 14.9749C16.744 14.8039 16.697 14.3209 16.669 14.0639L16.649 13.8959V13.8809C16.651 13.8619 16.662 13.8479 16.679 13.8389L16.698 13.8289C16.9 13.7239 17.612 13.3379 17.634 13.3259L17.645 13.3179C17.661 13.3029 17.664 13.2819 17.662 13.2719L17.652 13.2199C17.596 12.9819 17.462 12.7959 17.256 12.7049L17.258 12.7039ZM16.718 13.0439C16.831 13.1209 16.785 13.3079 16.698 13.4169C16.611 13.5259 16.46 13.6259 16.336 13.5419C16.211 13.4579 16.293 13.2609 16.388 13.1499C16.483 13.0389 16.605 12.9669 16.718 13.0439Z"
                                                    fill="var(--1luid4b)"
                                                ></path>
                                            </svg>
                                        </LotteryTab>
                                        <LotteryTab order={2} desc='Make your Market' onClick={setTabIndex} tabIndex={tabIndex}>
                                            <svg
                                                className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                                viewBox="0 0 32 33" fill="none">
                                                <path
                                                    d="M15.9998 3.5C17.4358 3.5 18.5998 4.684 18.5998 6.144H26.6168C27.4548 6.144 28.1338 6.823 28.1338 7.661V7.712C28.1338 8.55 27.4548 9.229 26.6168 9.229H17.6098V26.415L21.4168 26.416C22.2548 26.416 22.9338 27.095 22.9338 27.933V27.984C22.9338 28.822 22.2548 29.501 21.4168 29.501H10.5838C9.74581 29.501 9.06681 28.822 9.06681 27.984V27.933C9.06681 27.095 9.74581 26.416 10.5838 26.416L14.5768 26.415V9.229H5.38381C4.54581 9.229 3.86681 8.55 3.86681 7.712V7.661C3.86681 6.823 4.54581 6.144 5.38381 6.144H13.4008C13.4008 4.684 14.5648 3.5 16.0008 3.5H15.9998ZM26.2548 10.739C26.5668 10.911 26.8208 11.189 26.9768 11.532L29.4088 16.878C30.4788 19.231 29.6118 22.092 27.4708 23.268C26.8688 23.599 26.2058 23.771 25.5328 23.771C23.1398 23.771 21.1998 21.639 21.1998 19.008C21.1998 18.269 21.3568 17.539 21.6568 16.878L24.0888 11.532C24.4878 10.656 25.4568 10.3 26.2548 10.739ZM7.18781 10.739C7.49981 10.911 7.75381 11.189 7.90981 11.532L10.3418 16.878C11.4118 19.231 10.5448 22.092 8.40381 23.268C7.80181 23.599 7.13881 23.771 6.46581 23.771C4.07281 23.771 2.13281 21.639 2.13281 19.008C2.13281 18.269 2.28981 17.539 2.58981 16.878L5.02181 11.532C5.42081 10.656 6.38981 10.3 7.18681 10.739H7.18781Z"
                                                    fill="var(--1luid4b)"></path>
                                            </svg>
                                        </LotteryTab>
                                        <LotteryTab order={3} desc='Select your Wager' onClick={setTabIndex} tabIndex={tabIndex}>
                                            <svg
                                                className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                                viewBox="0 0 32 33" fill="none">
                                                <path
                                                    d="M28.7693 3.30005H4.62131C3.86931 3.30005 3.22431 3.72305 2.94031 4.40505C2.65631 5.08705 2.81231 5.83005 3.34931 6.34605L13.3053 15.904V28.493C13.3053 28.9851 13.6063 29.423 14.0713 29.6101C14.2233 29.6711 14.3823 29.7001 14.5393 29.7001C14.8633 29.7001 15.1803 29.574 15.4173 29.338L19.7323 25.036C19.9603 24.809 20.0853 24.5091 20.0853 24.191V15.904L30.0413 6.34605C30.5783 5.83005 30.7353 5.08705 30.4503 4.40505C30.1653 3.72305 29.5213 3.30005 28.7693 3.30005Z"
                                                    fill="var(--1luid4b)"></path>
                                            </svg>
                                        </LotteryTab>
                                        <LotteryTab order={4} desc='Select your Wagers' onClick={setTabIndex} tabIndex={tabIndex}>
                                            <svg
                                                className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                                viewBox="0 0 32 33" fill="none">
                                                <path
                                                    d="M20.16 8.52498L20.31 8.42998C20.98 8.02298 21.774 7.71198 22.688 7.49298C23.894 7.20398 25.058 7.14198 26.173 7.31198C26.786 7.40598 27.204 7.95898 27.106 8.54698C27.071 8.75998 26.972 8.94898 26.832 9.09798L26.18 10.372C26.622 10.825 27.01 11.377 27.345 12.025C27.671 12.653 27.91 13.301 28.064 13.965H29.771C30.353 13.965 30.832 14.389 30.889 14.933L30.895 15.043V20.68C30.895 21.238 30.453 21.697 29.886 21.753L29.771 21.759H28.785C28.637 22.547 28.215 23.339 27.546 24.128C26.8 25.007 25.961 25.598 25.041 25.869L25.04 28.712L25.036 28.805C25.039 28.836 25.04 28.867 25.04 28.898C25.04 29.456 24.598 29.915 24.031 29.971L23.916 29.977H20.404C20.359 29.977 20.314 29.974 20.27 29.969C20.259 29.968 20.248 29.966 20.237 29.965C20.213 29.962 20.19 29.958 20.167 29.953C20.149 29.949 20.132 29.945 20.114 29.941C20.096 29.937 20.078 29.932 20.061 29.926L20.017 29.911C19.998 29.904 19.979 29.897 19.96 29.889C19.906 29.867 19.854 29.84 19.804 29.81L19.771 29.789C19.689 29.735 19.614 29.671 19.548 29.596C19.545 29.592 19.541 29.588 19.538 29.584L19.525 29.569L19.496 29.533C19.486 29.52 19.476 29.506 19.467 29.492C19.464 29.488 19.462 29.485 19.459 29.481L19.44 29.451C19.429 29.433 19.418 29.414 19.407 29.395L19.402 29.385L18.354 27.399H13.158V28.712C13.158 29.27 12.716 29.729 12.149 29.785L12.034 29.791L7.60698 29.786L7.53798 29.779C7.52498 29.777 7.51098 29.775 7.49698 29.772L7.47998 29.769C7.45798 29.765 7.43598 29.76 7.41398 29.754C7.40298 29.751 7.39198 29.748 7.38098 29.745C7.35898 29.739 7.33698 29.731 7.31498 29.724C7.25798 29.704 7.20198 29.679 7.14798 29.649C7.08698 29.615 7.02898 29.576 6.97598 29.533C6.97398 29.531 6.97098 29.529 6.96798 29.527C3.70598 26.804 1.96498 23.756 1.81898 20.413C1.72398 18.26 2.02098 16.449 2.76798 14.874L1.43998 13.616C0.997984 13.197 0.993984 12.515 1.42998 12.091C1.83698 11.696 2.48398 11.666 2.92798 12.004L3.01998 12.082L3.97098 12.983C4.35798 12.511 4.79998 12.06 5.29798 11.627L5.31598 11.718C4.51398 7.76098 7.20798 3.92898 11.334 3.15998C15.316 2.41798 19.177 4.79998 20.161 8.52498H20.16ZM22.795 24.876L22.796 24.865C22.796 24.868 22.796 24.87 22.795 24.873L22.805 24.795C22.807 24.782 22.809 24.769 22.812 24.757C22.815 24.74 22.819 24.724 22.823 24.707C22.828 24.687 22.834 24.666 22.84 24.646C22.843 24.638 22.845 24.63 22.848 24.622C22.857 24.596 22.867 24.571 22.878 24.546L22.893 24.513C22.902 24.494 22.911 24.476 22.921 24.458C22.931 24.44 22.942 24.422 22.953 24.404L22.977 24.368C22.987 24.353 22.997 24.339 23.008 24.325C23.019 24.311 23.03 24.297 23.042 24.283C23.054 24.268 23.067 24.254 23.08 24.24C23.091 24.228 23.103 24.216 23.115 24.205C23.124 24.196 23.133 24.188 23.142 24.179C23.159 24.163 23.177 24.148 23.196 24.133C23.205 24.125 23.215 24.118 23.225 24.111L23.279 24.073C23.292 24.065 23.306 24.056 23.32 24.047C23.338 24.036 23.356 24.026 23.373 24.017C23.387 24.01 23.401 24.002 23.416 23.996L23.468 23.973C23.484 23.966 23.501 23.96 23.518 23.954L23.577 23.934C23.588 23.931 23.599 23.927 23.61 23.924C23.636 23.917 23.661 23.911 23.687 23.906C23.695 23.904 23.704 23.903 23.712 23.901C23.734 23.897 23.757 23.894 23.779 23.891L23.791 23.89C23.817 23.887 23.843 23.885 23.869 23.884L23.894 23.883C24.532 23.87 25.158 23.527 25.804 22.766C26.408 22.055 26.642 21.472 26.589 20.994L26.573 20.893C26.476 20.417 26.722 19.954 27.145 19.737C27.275 19.668 27.42 19.623 27.575 19.608L27.69 19.602H28.648V16.121H27.103C27.048 16.121 26.993 16.117 26.94 16.109C26.846 16.095 26.756 16.071 26.671 16.036L26.574 15.991C26.446 15.925 26.333 15.835 26.24 15.727C26.16 15.634 26.096 15.527 26.052 15.411C26.021 15.329 26 15.242 25.99 15.152V15.147C25.914 14.402 25.697 13.683 25.335 12.984C24.986 12.311 24.591 11.825 24.16 11.514C23.664 11.156 23.563 10.48 23.936 10.004L24 9.92998L24.268 9.40698C23.933 9.44098 23.589 9.49898 23.237 9.58398C22.42 9.77998 21.773 10.056 21.287 10.402L21.131 10.52C21.068 10.57 21.004 10.612 20.936 10.646C20.921 10.654 20.907 10.66 20.893 10.667C20.873 10.676 20.852 10.685 20.831 10.693L20.792 10.708L20.721 10.73L20.676 10.742C20.657 10.746 20.638 10.75 20.619 10.754C20.602 10.757 20.586 10.76 20.569 10.762C20.544 10.766 20.519 10.768 20.494 10.77L20.463 10.772C20.439 10.773 20.414 10.774 20.389 10.773C20.371 10.773 20.353 10.772 20.336 10.771C20.319 10.77 20.299 10.768 20.281 10.766C20.261 10.764 20.24 10.761 20.22 10.758C20.21 10.756 20.199 10.754 20.188 10.752C15.406 9.82898 11.749 10.126 9.19198 11.579C5.28998 13.798 3.88798 16.195 4.06898 20.32C4.18298 22.924 5.51898 25.353 8.13798 27.633H10.914V26.32C10.914 25.724 11.417 25.242 12.038 25.242H19.06C19.088 25.242 19.116 25.244 19.143 25.246L19.124 25.244L19.173 25.248C19.197 25.251 19.221 25.254 19.245 25.258C19.259 25.26 19.273 25.263 19.287 25.266C19.304 25.27 19.321 25.274 19.338 25.278C19.354 25.282 19.37 25.286 19.385 25.291L19.431 25.306C19.453 25.313 19.475 25.322 19.497 25.331L19.538 25.349L19.595 25.377L19.628 25.395C19.648 25.406 19.667 25.418 19.686 25.43C19.699 25.438 19.712 25.447 19.725 25.456C19.741 25.468 19.757 25.48 19.773 25.493C19.82 25.53 19.863 25.571 19.903 25.616L19.932 25.649C19.942 25.661 19.952 25.673 19.961 25.685C19.97 25.697 19.981 25.712 19.99 25.726C19.993 25.73 19.995 25.733 19.998 25.737L20.016 25.765C20.028 25.784 20.039 25.803 20.05 25.823L20.055 25.833L21.103 27.818H22.8V24.959L22.802 24.914V24.913L22.804 24.875L22.795 24.876ZM21.177 13.214C22.162 13.214 22.961 13.98 22.961 14.925C22.961 15.87 22.162 16.636 21.177 16.636C20.192 16.636 19.393 15.87 19.393 14.925C19.393 13.98 20.192 13.214 21.177 13.214Z"
                                                    fill="var(--1luid4b)"></path>
                                            </svg>
                                        </LotteryTab>
                                    </div>
                                    <div className="how-to-play-section-body">
                                        <section className="paragraph">{ tabContant[tabIndex].contant}</section>
                                        <section className="draw-desc-box">
                                            <img className="draw-desc-img" src={`/images/lottery/${ tabContant[tabIndex].image}`} alt="Step Description" />
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
            <Chat />
            <TopButton />
        </div>
    )
}

export default page