import React from 'react'
import '../../styles/index.page.9f254f35.css'

const RewardSwiperItem = ({ username, amount, currencyIcon, num }) => (
    // <div className="swiper-slide" style={{ marginBottom: 0 }}>
    <div className={`reward-swiper-item item-${num}`} draggable={false}>
        <p className="username" draggable={false}>{username}</p>
        <div className="d" draggable={false}>
            Got{' '}
            <div className="cq8kbks coin notranslate" draggable={false}>
                <div className="amount amount-str" draggable={false}>{amount}</div>
                <img className="coin-icon" src={currencyIcon} draggable={false} alt="coin icon" />
            </div>{' '}
            rewards
        </div>
        {/* </div> */}
    </div>
);

function page() {
    return (
        <>
            <div className="n1jo2sj6 page-max-width-wrap">
                <div className="banner-wrap">
                    <div className="banner-inner">
                        <p className="b-t ttu">Invite Friends to Earn</p>
                        <p className="b-st ttu"><b>$1,000.00 + 25% Commission</b></p>
                        <button className="ui-button button-normal s-conic b-s">
                            <div className="button-inner">Sign up &amp; Earn</div>
                        </button>
                        <p className="b-d">Referral Terms &amp; Conditions</p>
                    </div>
                </div>

                <div className="referral-commission">
                    <div className="referral common-item">
                        <p className="rci-t ttu">Get your <span className="s">$1,000.00</span> referral rewards</p>
                        <p className="rci-d">Every friend you invite will get you $1,000.00; the more you invite, the more you will get!</p>
                        <button className="ui-button button-normal rci-btn">
                            <div className="button-inner">
                                <span>Please see the details</span>
                                <svg className="s1ff97qc icon">
                                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                </svg>
                            </div>
                        </button>
                        <img alt="refferral" src="/images/referral.8365b050.png" className="rci-img" />
                    </div>

                    <div className="commission common-item">
                        <p className="rci-t ttu">Get your <span className="s">25%</span> commission rewards</p>
                        <p className="rci-d">You will receive commission rewards every time your friends place wagers based on the games.</p>
                        <button className="ui-button button-normal rci-btn">
                            <div className="button-inner">
                                <span>Please see the details</span>
                                <svg className="s1ff97qc icon">
                                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                </svg>
                            </div>
                        </button>
                        <img alt="refferral" src="/images/commission.a4f11d85.png" className="rci-img" />
                    </div>
                </div>
                <div className="licxpy1">
                    <div className="title-wrap">
                        <div className="red-wrap">
                            <div className="red-bg"></div>
                            <div className="red-dont"></div>
                        </div>
                        <p>Live Rewards</p>
                    </div>

                    <div className="lr-top">
                        <div className="lr-top-left">
                            <p>Total Rewards Sent To-Date</p>
                            <div className="y-w">$24,146,170.04</div>
                        </div>
                        <div className="line"></div>
                        <div className="lr-top-right">
                            <div className="c1mxe6k6 vertical swiper">
                                <div className="motion-container"
                                    draggable={false}
                                // style={{
                                //     pointerEvents: 'auto',
                                //     height: '2500%',
                                //     flexDirection: 'column',
                                //     transform: 'translateY(-832px) translateZ(0px)',
                                //     userSelect: 'none',
                                //     touchAction: 'pan-x',
                                // }}
                                >
                                    {/* Slide 1 */}
                                    <div className="swiper-slide" style={{ marginBottom: 0 }}>
                                        <RewardSwiperItem username="Sdghjax" amount="1.0136" currencyIcon="/coin/INR.black.png" num={0} />
                                        <RewardSwiperItem username="Mxwdkbvweoac" amount="1.344" currencyIcon="/coin/INR.black.png" num={1} />
                                        <RewardSwiperItem username="Metrgxusmyb" amount="2.50" currencyIcon="/coin/USDT.black.png" num={2} />
                                        <RewardSwiperItem username="000311" amount="12.00" currencyIcon="/coin/USDT.black.png" num={3} />
                                    </div>
                                    {/* Slide 2 */}
                                    <div className="swiper-slide" style={{ marginBottom: 0 }}>

                                        <RewardSwiperItem username="Fnwbkbhteoac" amount="0.50" currencyIcon="/coin/USDT.black.png" num={0} />
                                        <RewardSwiperItem username="Hynikbabfoac" amount="5.00" currencyIcon="/coin/USDT.black.png" num={1} />
                                        <RewardSwiperItem username="Goubkbhteoac" amount="0.50" currencyIcon="/coin/USDT.black.png" num={2} />
                                        <RewardSwiperItem username="Csgcebhkmpyb" amount="0.08" currencyIcon="/coin/USDT.black.png" num={3} />
                                    </div>
                                    {/* Slide 3 */}
                                    <div className="swiper-slide" style={{ marginBottom: 0 }}>

                                        <RewardSwiperItem username="Kheluram" amount="5.00" currencyIcon="/coin/USDT.black.png" num={0} />
                                        <RewardSwiperItem username="Ewygibhrcoac" amount="0.3583" currencyIcon="/coin/INR.black.png" num={1} />
                                        <RewardSwiperItem username="mrtiley" amount="0.4256" currencyIcon="/coin/WAXP.black.png" num={2} />
                                        <RewardSwiperItem username="Ukrvhqjfnyb" amount="0.35" currencyIcon="/coin/INR.black.png" num={3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pfco62a">
                    <div className="program-left">
                        <img alt="program" src="/images/program.cc4c30ab.png" />
                    </div>
                    <div className="program-right">
                        <p className="p-t ttu">Learn more about our <span>Affiliate program</span></p>
                        <div className="p-d">
                            If you have a large audience and followers. We have special conditions for you to customize your referral program!
                        </div>
                        <div className="p-d">
                            If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino!
                            You can set up a casino website with your domain and design style.
                        </div>
                        <div className="p-dd">
                            <span>for more details, please</span>
                            <span className="contact">Contact Us</span>:
                        </div>
                        <div className="email-wrap">
                            <a href="mailto:business@bc.game" keep-scroll-position="true" className="contacts-link-item" target="_self">
                                <p className="l">business@bc.game</p>
                                <p className="send-now">Send now</p>
                                <svg className="s1ff97qc icon">
                                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Mail"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="q5rlkln">
                <div className="page-max-width-wrap">
                    <p className="q-t">Frequently Asked Questions</p>
                    <div className="ql-wrap">
                        {/* FAQ items */}
                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">How does the referral system work?</span>
                                <div className="right-icon open">
                                    <img alt="action" src="/images/close.98cf2897.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: 'auto' }}>
                                <div className="toogle-desc">
                                    <span>
                                        When you share your referral link with any of your friends, family, or advertise the link and a player
                                        signs up at our site, that player becomes your referral and they will earn you commissions & extra
                                        rewards by playing at BC.GAME.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">How much can I earn from my referral?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">You can earn 25% of their wager + $1,000.00 per referral.</div>
                            </div>
                        </div>
                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">How much can I earn from my referral?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">You can earn 25% of their wager + $1,000.00 per referral.</div>
                            </div>
                        </div>

                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">What is USD reward and how does it work?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">
                                    There is $1,000.00 USD reward for each referral you bring to <span>BC.GAME</span> This USD reward is given in
                                    10 parts when your referral level up from VIP4 til VIP 70.
                                </div>
                            </div>
                        </div>

                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">Are there any banners I can use to advertise?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">
                                    <p>
                                        <span>Yes, we offer multiple banner sizes for your convenience.</span>
                                        <a
                                            href="//mycasino.bc.game/mycasino/bannerdownload"
                                            keep-scroll-position="true"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="sp"
                                        >
                                            Click here
                                            <svg className="s1ff97qc icon icon-blank">
                                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_NewWindow"></use>
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">I have a big audience, how can I get special deals?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">
                                    If you have a website with good traffic or a social media account with a big audience, you can connect with us at{' '}
                                    <a href="mailto:support@bc.game" keep-scroll-position="true" rel="noopener noreferrer" target="_blank" className="sp">
                                        support@bc.game
                                        <svg className="s1ff97qc icon icon-blank">
                                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_NewWindow"></use>
                                        </svg>
                                    </a>{' '}
                                    for special deals.
                                </div>
                            </div>
                        </div>

                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">How many affiliate links can I create if I have different websites/accounts?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">
                                    <span>You can create up to 20 unique codes for different sources of traffic.</span>
                                </div>
                            </div>
                        </div>

                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">Can I see the data of my referral?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">
                                    Yes, <span>BC.GAME</span> believes in total transparency and offers all data to the users like username, wager they have
                                    done, commissions you made, when they registered, which of your links they used. All in your{' '}
                                    <a href="//mycasino.bc.game/mycasino/friends" keep-scroll-position="true" rel="noopener noreferrer" target="_blank" className="">
                                        Affiliate Dashboard
                                        <svg className="s1ff97qc icon icon-blank">
                                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_NewWindow"></use>
                                        </svg>
                                    </a>
                                    .
                                </div>
                            </div>
                        </div>

                        <div className="toogle-question-item">
                            <div className="tootle-lebel">
                                <span className="t">Can I send tips or rewards to my referrals?</span>
                                <div className="right-icon">
                                    <img alt="action" src="/images/plus.fe39aa27.png" />
                                </div>
                            </div>
                            <div className="v1qcofba" style={{ height: '0px' }}>
                                <div className="toogle-desc">
                                    <p>
                                        <span>Yes, you can send your referrals tips in any supported coins.</span>
                                        <a href="//mycasino.bc.game/mycasino/friends" keep-scroll-position="true" rel="noopener noreferrer" target="_blank" className="sp">
                                            Click here
                                            <svg className="s1ff97qc icon icon-blank">
                                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_NewWindow"></use>
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page