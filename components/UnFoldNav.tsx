// components/FoldNavLinks.tsx

import React, { ReactNode, useState } from 'react';
import '../styles/index.3d6a1388.css'

interface UnFoldNavLinkProps {
    href: string;
    keepScrollPosition: boolean;
    children: ReactNode;
    title: string;
    target?: string;
}



const UnFoldNavLink: React.FC<UnFoldNavLinkProps> = ({ href, keepScrollPosition, children, title, target }) => (
    <div className="nav-item-wrap">
        <a href={href} keep-scroll-position={keepScrollPosition} className="nav-item" target={target}>
            <div className="nav-item-left">
                {children}
            </div>
            <div className="nav-item-right">
                <span>{title}</span>
            </div>
        </a>
    </div>
);

interface UnFoldDropDownNavLinkProps {
    children: ReactNode;
    icon: string;
    title: string;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnFoldDropDownNavLink: React.FC<UnFoldDropDownNavLinkProps> = ({ state, setState, title, icon, children }) => (
    <div className={state ? "o14ab7td nav-item-wrap navbox-open" : "o14ab7td nav-item-wrap"}>
        <div className={state ? "toggle-tigger nav-item open-tigger" : "toggle-tigger nav-item"} onClick={() => setState(!state)}>
            <div className="nav-item-left">
                <svg className="s1ff97qc icon">
                    <use xlinkHref={`/images/symbol-defs.ef6a79c4.svg#${icon}`}></use>
                </svg>
            </div>
            <div className="nav-item-right"><span>{title}</span>
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                </svg>
            </div>
        </div>
        <div className="v1qcofba" style={state ? { height: 'auto' } : { height: '0px' }}>
            {children}
        </div>
    </div >
);

interface DropDownNavChildProps {
    href: string;
    keepScrollPosition: boolean;
    title: string;
    icon?: string;
    children?: ReactNode;
    target?: string;
}
const DropDownNavChild: React.FC<DropDownNavChildProps> = ({ href, title, keepScrollPosition, icon, children, target }) => (

    <div className="sports-sub-navs">
        <a href={href} keep-scroll-position={keepScrollPosition} className="nav-item" target={target}>
            <div className="nav-item-left">
                {icon ? <svg className="s1ff97qc icon">
                    <use xlinkHref={`/images/symbol-defs.ef6a79c4.svg#${icon}`}></use>
                </svg> : children}
            </div>
            <div className="nav-item-right">
                <span>{title}</span>
            </div>
        </a>
        {/* //  Add similar code for other sports categories */}
    </div>
);

interface BcOgNavProps {
    href: string;
    keepScrollPosition: boolean;
    title: string;
    icon: string;
    image: string;
}
const BcOgNav: React.FC<BcOgNavProps> = ({ href, title, keepScrollPosition, icon, image }) => (

    <a href={href} keep-scroll-position={keepScrollPosition} className="game-item">
        <div className="game-icon">
            <svg className="s1ff97qc icon game-icon-svg">
                <use xlinkHref={`/images/symbol-defs.ef6a79c4.svg#${icon}`}></use>
            </svg>
            <img src={`/images/${image}`} className="game-icon-img" alt="" />
        </div>
        <span className="game-name">{title}</span>
    </a>
);

interface UnFoldNavProps {
    // Define other necessary props here
}

function UnFoldNav() {
    const [casino, setCasino] = useState(false)
    const [sports, setSports] = useState(false)
    const [exclusive, setExclusive] = useState(false)
    const [sponsorship, setSponsorship] = useState(false)

    return (
        <div className="u1hrvna7 hidden-scroll-y unfold-scroll-wrap">
            <div className="pk7420m bonus-link-enter">
                <div className="nav-item-wrap">
                    <a href="/bonus" keep-scroll-position="true" className="nav-item">
                        <div className="nav-item-left">
                            <svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Gift"></use>
                            </svg>
                        </div>
                        <div className="nav-item-right">
                            <span>Bonus</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="bryd93e bonus-list-wrap">
                <div className="bl-l bl-l-2">
                    <div className="bonus-item li-quests" style={{ position: 'relative' }}>
                        <button className="qvvvzmo bonus-item-btn">
                            <div className="img-wrap">
                                <img className="img-bg" src="/images/quests.7ae7831a.png" alt="quests" />
                            </div>
                        </button>
                        <div className="bonus-text">
                            <p className="t ttu task">Quest</p>
                        </div>
                    </div>
                    <div className="bonus-item li-spin" style={{ position: 'relative' }}>
                        <button className="e1vxjz6v bonus-item-btn">
                            <div className="enter-animate active">
                                <div className="spin-anim">
                                    <img className="img-spinbg" src="/images/spin_bg.c87bd0f4.png" alt="" />
                                    <img className="img-turntable" src="/images/turntable.b21b0d0a.png" alt="" />
                                    <img className="img-pointer" src="/images/pointer.fe72597d.png" alt="" />
                                </div>
                            </div>
                        </button>
                        <div className="bonus-text">
                            <p className="t ttu spin">Spin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="activity-box">
                <div className="act-item-left">
                    <img alt="act-friend" src="/images/activity_icon.b7616940.png" />
                </div>
                <div className="act-item-right">
                    <div>BC Anniversary</div>
                    <div className="char">Exploration & Riches Await!</div>
                </div>
            </div>

            <UnFoldDropDownNavLink title='Casino' icon='icon_Casino' state={casino} setState={setCasino}>
                <DropDownNavChild href='/gamelist/picks-for-you' title='Picks For You' keepScrollPosition={true} icon='icon_PicksForYou' />
                <DropDownNavChild href='/favorite' title='Favorites' keepScrollPosition={true} icon='icon_Favorites' />
                <DropDownNavChild href='/recent' title='Recent' keepScrollPosition={true} icon='icon_Recent' />
                {/* <div className="game-nav-wrap">
                    <a href="/casino?tab=brand" keep-scroll-position="true" className="nav-item">
                        <div className="nav-item-left">
                            <svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_ClassicDice"></use>
                            </svg>
                        </div>
                        <div className="nav-item-right">
                            <span>BC Originals</span>
                            <svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                            </svg>
                        </div>
                    </a>
                    <div className="place"></div>
                    <div className="game-list-nav-wrap">
                        <div className="game-list-shadow-inner">
                            <div className="game-list-wrap hidden-scroll-y">
                                <BcOgNav href='/game/crash' icon='icon_Crash' keepScrollPosition={true} image='Crash.png' title='Crash' />
                            </div>
                        </div>
                    </div>
                </div> */}

                <DropDownNavChild href='/gamelist/slots' title='Slots' keepScrollPosition={true} icon='icon_Slots' />
                <DropDownNavChild href='/gamelist/live' title='Live Casino' keepScrollPosition={true} icon='icon_LiveCasino' />
                <DropDownNavChild href='/tagname/hot' title='Hot Games' keepScrollPosition={true} icon='icon_HotGame' />
                <DropDownNavChild href='/tagname/new-releases' title='New Releases' keepScrollPosition={true} icon='icon_NewReleases' />
                <DropDownNavChild href='/tagname/feature-buy-in' title='Feature Buy-in' keepScrollPosition={true} icon='icon_FeatureBuy-in' />
                <DropDownNavChild href='/tagname/blackjack' title='Blackjack' keepScrollPosition={true} icon='icon_Blackjack' />
                <DropDownNavChild href='/tagname/table-games' title='Table Games' keepScrollPosition={true} icon='icon_TableGame' />
            </UnFoldDropDownNavLink>

            <UnFoldDropDownNavLink title='Sports' icon='icon_Sports' state={sports} setState={setSports}>
                <DropDownNavChild href='/sports?bt-path=%2Flive' title='Live Events' keepScrollPosition={true} icon='icon_LiveEvents' />
                <DropDownNavChild href='/sports?bt-path=%2Fsoccer-1' title='Soccer' keepScrollPosition={true} icon='icon_Soccer' />
                <DropDownNavChild href='/sports?bt-path=%2Ftennis-5' title='Tennis' keepScrollPosition={true} icon='icon_Tennis' />
                <DropDownNavChild href='/sports?bt-path=%2Fbasketball-2' title='Basketball' keepScrollPosition={true} icon='icon_Basketball' />
                <DropDownNavChild href='/sports?bt-path=%2Fcricket-21' title='Cricket' keepScrollPosition={true} icon='icon_Cricket' />
                <DropDownNavChild href='/sports?bt-path=%2Ffifa-300' title='FIFA' keepScrollPosition={true} icon='icon_FIFA' />
                <DropDownNavChild href='/sports?bt-path=%2Famerican-football-16' title='American Football' keepScrollPosition={true} icon='icon_AmericanFootball' />
                <DropDownNavChild href='/sports?bt-path=%2Fice-hockey-4' title='Ice Hockey' keepScrollPosition={true} icon='icon_IceHockey' />
                <DropDownNavChild href='/sports?bt-path=%2Fbaseball-3' title='Baseball' keepScrollPosition={true} icon='icon_Baseball' />
                <DropDownNavChild href='/sports?bt-path=%2Fhandball-6' title='Handball' keepScrollPosition={true} icon='icon_Handball' />
            </UnFoldDropDownNavLink>

            <UnFoldNavLink href='/racing' keepScrollPosition={true} title='Racing'>
                <svg className="inpcsja" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32">
                    <path
                        d="M23.707-0c-0.047 0-0.109 0-0.155 0.016-0.078 0.016-1.54 0.404-2.333 1.182s-1.213 1.804-1.369 2.582c-7.636 0.264-14.993 4.557-14.993 13.702 0 2.364 0.7 6.159 1.757 7.714 0 0 0.995 2.022 5.817 4.728 3.282 1.089 6.579 1.182 7.667 1.182 0.187 0 0.311 0 0.342 0 0.264 0 0.482-0.187 0.56-0.435 0.031-0.078 0.607-1.866 0.607-3.81 0-2.022-0.809-3.313-1.586-4.572-0.84-1.338-1.711-2.737-1.711-5.195 0-1.26 0.451-2.193 1.337-2.799 1.291 2.411 3.717 2.986 4.728 3.126 0.202 0.607 0.669 1.633 1.509 1.96 0.373 0.156 0.793 0.156 1.166 0 0.187 0.109 0.42 0.187 0.638 0.156 0.653-0.015 1.322-0.467 1.788-1.26 0.047-0.078 0.093-0.155 0.156-0.233 0.513-0.762 1.555-2.348-0.762-4.572-1.104-4.744-3.079-7.076-3.826-7.978l-0.093-0.14c-0.358-0.42-0.731-0.84-1.12-1.244l0.498-3.422c0.031-0.202-0.047-0.404-0.187-0.544-0.124-0.078-0.28-0.14-0.436-0.14zM19.415 0.124c-0.031 0-0.047 0.016-0.078 0.016-0.482 0.062-0.809 0.451-1.151 0.84-0.14 0.156-0.404 0.451-0.544 0.529-0.124-0.031-0.389-0.233-0.56-0.342-0.482-0.327-1.089-0.747-1.773-0.591-0.575 0.109-0.918 0.669-1.244 1.182-0.124 0.202-0.373 0.575-0.513 0.684-0.14-0.047-0.42-0.218-0.607-0.327-0.529-0.311-1.089-0.638-1.649-0.451-0.591 0.202-1.026 0.995-1.198 1.571-0.062 0.187-0.156 0.513-0.233 0.638-0.156-0.016-0.575-0.14-0.762-0.218-0.56-0.249-1.338-0.311-1.913-0.031-0.607 0.311-0.747 1.306-0.731 1.897 0 0.171 0 0.451-0.016 0.591s-0.062 0.171-0.109 0.202c-0.078 0.062-0.327 0.062-0.529 0.093-0.529 0.062-1.244-0.047-1.617 0.42-0.389 0.529-0.342 1.151-0.202 1.742 0.078 0.202 0.187 0.622 0.171 0.7-0.078 0.093-0.171 0.156-0.404 0.249-0.591 0.202-1.306 0.451-1.54 1.166-0.14 0.482-0.062 0.778 0.233 1.244 0.078 0.124 0.218 0.358 0.28 0.482-0.093 0.078-0.296 0.202-0.42 0.264-0.42 0.233-0.98 0.56-1.104 1.229-0.062 0.482 0.342 0.995 0.622 1.4 0.156 0.202 0.28 0.498 0.358 0.622-0.078 0.078-0.529 0.513-0.622 0.575-0.373 0.28-0.886 0.669-0.886 1.306 0 0.435 0.467 1.509 0.793 1.913 0.124 0.155-0.047 0.42-0.156 0.576-0.047 0.124-0.404 0.513-0.607 0.731-0.249 0.295-0.762 1.011-0.7 1.618 0.078 0.622 0.669 1.291 1.135 1.664 0.311 0.233 0.311 0.389 0.404 0.467 0.031 0.093 0.109 0.171 0.171 0.233 0.062 0.047 0.902 0.855 3.841 0.84-1.322-1.944-1.944-6.143-1.944-8.367 0-9.612 7.481-14.355 15.413-14.884 0.202-0.513 0.544-1.306 1.244-2.115-0.513-0.342-0.746-0.373-0.855-0.358zM25.496 1.182l-0.358 2.551c0.109 0.109 0.218 0.249 0.327 0.373 0.202-0.607 0.498-1.26 0.995-1.804 0.155-0.156 0.218-0.389 0.155-0.607s-0.249-0.373-0.467-0.435c-0.202-0.047-0.404-0.078-0.606-0.078h-0.047zM23.832 9.331c0.513 0 0.933 0.42 0.933 0.933s-0.42 0.933-0.933 0.933c-0.513 0-0.933-0.42-0.933-0.933s0.42-0.933 0.933-0.933z">
                    </path>
                </svg>
            </UnFoldNavLink>

            <UnFoldNavLink href='/lottery' keepScrollPosition={true} title='Lottery'>
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Lottery"></use>
                </svg>
            </UnFoldNavLink>
            <UnFoldNavLink href='/bingolist' keepScrollPosition={true} title='Bingo'>
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Bingo2"></use>
                </svg>
            </UnFoldNavLink>
            <UnFoldNavLink href='#/vip' keepScrollPosition={true} title='Vip Club' target="_self">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_VipClub"></use>
                </svg>
            </UnFoldNavLink>

            <UnFoldDropDownNavLink title='BC exclusive' icon='icon_Exclusive' state={exclusive} setState={setExclusive}>
                <DropDownNavChild href='/exclusive/daily-contest' title='Daily Contest' keepScrollPosition={true} icon='icon_DailyContest' />
                <DropDownNavChild href='/promotion' title='Promotions' keepScrollPosition={true} icon='icon_Promotion' />
                <DropDownNavChild href='/exclusive/weekly-raffle' title='Weekly Raffle' keepScrollPosition={true} icon='icon_WeeklyRaffle' />
            </UnFoldDropDownNavLink>
            <UnFoldNavLink href='/affiliate' keepScrollPosition={true} title='Affiliate' target="_self">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Affiliate"></use>
                </svg>
            </UnFoldNavLink>

            <UnFoldNavLink href='https://forum.bc.game/' keepScrollPosition={true} title='Forum' target="_blank">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Forum"></use>
                </svg>
            </UnFoldNavLink>

            <UnFoldNavLink href='/help' keepScrollPosition={true} title='Provably Fair' target="_self">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_ProvablyFair"></use>
                </svg>
            </UnFoldNavLink>

            <UnFoldNavLink href='https://blog.bc.game/' keepScrollPosition={true} title='Blog' target="_blank">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Blog"></use>
                </svg>
            </UnFoldNavLink>

            <UnFoldNavLink href='https://betting.bc.game/' keepScrollPosition={true} title='Sport Betting Insights' target="_blank">
                <svg className="inpcsja" width="18" height="18" viewBox="0 0 1024 1024"
                    fill="none">
                    <path
                        d="M473.297 744.974c16.507 0 29.89 13.383 29.89 29.89v95.825c0 16.507-13.383 29.89-29.89 29.89h-56.264c-16.507 0-29.89-13.383-29.89-29.89v-95.825c0-16.507 13.383-29.89 29.89-29.89h56.264zM314.17 672.888c16.507 0 29.89 13.383 29.89 29.89v167.919c0 16.507-13.383 29.89-29.89 29.89h-56.264c-16.507 0-29.89-13.383-29.89-29.89v-167.919c0-16.507 13.383-29.89 29.89-29.89h56.264zM498.198 123.413c160.864 0 291.287 130.426 291.287 291.287-0.085 69.375-24.42 133.070-64.931 183.087l42.368 42.368-0.959 0.93 0.366-0.308c9.144-7.258 22.477-6.642 30.948 1.801l147.504 147.504c9.088 9.088 9.088 23.86 0 32.969l-37.472 37.472c-9.088 9.088-23.86 9.088-32.969 0l-147.504-147.504c-8.44-8.44-9.059-21.773-1.801-30.948l-0.366 0.366-42.284-42.284c-50.189 41.076-114.306 65.748-184.185 65.829-160.864 0-291.287-130.426-291.287-291.287s130.426-291.287 291.287-291.287zM498.198 193.152c-122.348 0-221.549 99.2-221.549 221.549s99.2 221.549 221.549 221.549c122.348 0 221.549-99.2 221.549-221.549-0.109-122.321-99.224-221.435-221.549-221.549zM502.747 294.847c100.282 0 181.547 74.2 181.547 109.937s-81.265 109.851-181.547 109.851c-100.282 0-181.547-75.541-181.547-109.851s81.265-109.937 181.547-109.937zM502.661 323.773c-44.724 0-80.984 36.233-80.984 80.924 0 44.242 35.542 80.201 79.649 80.912l1.443 0.012c44.229 0 80.159-35.464 80.875-79.485l0.012-1.337v-0.102c0-44.693-36.261-80.924-80.984-80.924zM507.263 352.399c-2.745 4.323-4.384 9.432-4.507 14.903l-0.009 0.53-0.012 0.188 0.006 0.478c0.269 15.799 13.176 28.525 29.045 28.525 7.954 0 15.168-3.199 20.423-8.386l0.304-0.304-0.111-0.376c1.746 5.112 2.749 10.584 2.854 16.274l0.011 0.741-0.009 0.865c-0.464 28.573-23.789 51.597-52.497 51.597-28.999 0-52.506-23.491-52.506-52.468 0-28.688 23.037-51.995 51.639-52.459l0.866-0.009h4.439l0.077-0.111zM102.292 524.306h56.264c16.507 0 29.89 13.383 29.89 29.89v316.494c0 16.507-13.383 29.89-29.89 29.89h-56.264c-16.507 0-29.89-13.383-29.89-29.89v-316.494c0-16.507 13.383-29.89 29.89-29.89z">
                    </path>
                </svg>
            </UnFoldNavLink>

            <UnFoldDropDownNavLink title='Sponsorships' icon='icon_Sponsorship' state={sponsorship} setState={setSponsorship}>
                <DropDownNavChild href='/sponsorship/afa' title='AFA' keepScrollPosition={true} icon='icon_AFA' />
                <DropDownNavChild href='/sponsorship/cloud-9' title='Cloud9' keepScrollPosition={true} icon='icon_Cloud9' />
                <DropDownNavChild href='/sponsorship/dl' title='David Luiz' keepScrollPosition={true} icon='icon_Dl' />
                <DropDownNavChild href='/sponsorship/suniel' title='Suniel Shetty' keepScrollPosition={true} icon='icon_SunielShetty' />
            </UnFoldDropDownNavLink>

            <UnFoldNavLink href='#' keepScrollPosition={true} title='Live Support'>
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Support"></use>
                </svg>
            </UnFoldNavLink>
            <div className="theme-nav">
                <div className="tftnvkv theme-wrap">
                    <div className="theme-inner">
                        <button className="active">
                            <svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Dark"></use>
                            </svg>
                            <span>Dark</span>
                        </button>
                        <button className="">
                            <svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Light"></use>
                            </svg>
                            <span>Light</span>
                        </button>
                        <div className="theme-bg"></div>
                    </div>
                </div>
            </div>
            {/* ... other components ... */}
        </div>
    )
};

export default UnFoldNav;
