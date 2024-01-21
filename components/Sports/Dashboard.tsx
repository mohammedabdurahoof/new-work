import React from 'react'
import Tab from './Tab'
import PromoBanner from './PromoBanner'
import PillTab from './PillTab'
import EventCard from './EventCard'
import Tournament from './Tournament'
import Matches from './Matches'

interface ComboItem {
    team: string;
    match: string;
    odds: string;
}

function Dashboard() {
    const comboItems: ComboItem[] = [
        { team: 'VfB Stuttgart', match: 'VfL Bochum vs VfB Stuttgart', odds: '1.96' },
        { team: 'SC Freiburg', match: 'SC Freiburg vs TSG Hoffenheim', odds: '2.06' },
        { team: 'Borussia Dortmund', match: '1. FC Cologne vs Borussia Dortmund', odds: '1.73' },
        { team: 'Eintracht Frankfurt', match: 'SV Darmstadt 98 vs Eintracht Frankfurt', odds: '1.95' },
    ];
    return (
        <div className="bt138" data-cy="dashboard-page">
            <div className="bt138">
                <div className="bt139">
                    <div>
                        <PromoBanner />
                        <Matches
                            label='Top Matches'
                            icon={
                                <svg
                                    className="bt56 bt1249"
                                    data-cy="ic-top-title"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}
                                >
                                    <path
                                        d="M17.3904 12.1129C18.2326 11.641 18.8 10.7537 18.8 9.73684C18.8 8.22533 17.5463 7 16 7C14.4536 7 13.2 8.22533 13.2 9.73684C13.2 10.7538 13.7674 11.6411 14.6096 12.113L11.8154 15.8305C11.4608 16.3023 10.7769 16.3659 10.3413 15.9678L5.70191 11.7269C6.07692 11.3481 6.30769 10.832 6.30769 10.2632C6.30769 9.10049 5.34338 8.15793 4.15385 8.15793C2.96431 8.15793 2 9.10049 2 10.2632C2 11.4259 2.96431 12.3685 4.15385 12.3685C4.19006 12.3685 4.22607 12.3676 4.26185 12.3659L5.16 24.0765C5.19996 24.5976 5.63445 25 6.15707 25H25.8397C26.3637 25 26.7989 24.5955 26.837 24.0729L27.6927 12.3632C27.7434 12.3667 27.7945 12.3685 27.8461 12.3685C29.0356 12.3685 30 11.4259 30 10.2632C30 9.10049 29.0356 8.15793 27.8461 8.15793C26.6566 8.15793 25.6923 9.10049 25.6923 10.2632C25.6923 10.8221 25.9151 11.3301 26.2786 11.707L21.6591 15.9619C21.2239 16.3627 20.5377 16.3001 20.1822 15.8272L17.3904 12.1129Z"
                                        fill="#F5A623"
                                    ></path>
                                </svg>
                            }
                        >
                            <div className="bt300 bt301">
                                <div className="bt1090 bt1575" data-editor-id="widget">
                                    <div className="bt1091">
                                        <div className="bt1092">
                                            <div className="bt189">
                                                <div className="bt190 bt1574">
                                                    <div className="bt194 bt1587" data-editor-id="widgetTitle">
                                                        <span className="bt197" style={{ width: '32px' }}>
                                                            <svg data-cy="ic-hot-combo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}>
                                                                <path
                                                                    d="M16 29C10.4444 29 6 24.6667 6 19.25C6 14.9167 8.66667 10.3667 9.77778 8.63333L9.83505 8.54942C10.6067 7.41785 13.6195 3 16 3C16.6667 3 17.1111 3.43333 17.1111 4.08333C17.1111 6.56173 17.9088 8.96235 19.3015 10.9557C19.7375 10.3368 20.076 9.67095 20.2222 8.95825C20.2827 8.6633 20.508 8.43259 20.7903 8.30111C21.3433 7.98498 22.0025 8.09572 22.3333 8.63333C23.8889 11.0167 25 13.6167 25.6667 15.8917C25.8889 17.0833 26 18.275 26 19.25C26 24.6667 21.5556 29 16 29ZM16 26.8333C17.8889 26.8333 19.3333 25.425 19.3333 23.5833C19.3333 23.3262 19.2638 23.0012 19.1797 22.6083C19.1575 22.5047 19.1343 22.3964 19.1111 22.2833C19.0069 21.8259 18.8292 21.3446 18.6012 20.8507C18.5166 20.9348 18.4276 21.0149 18.3343 21.0908L18.3333 21.0917C18.2222 21.3083 17.8889 21.4167 17.6667 21.4167C17.3333 21.4167 17 21.3083 16.7778 21.0917C16.0126 20.1421 15.4651 19.1076 15.1627 18.0148C14.0922 19.3181 12.6667 21.6824 12.6667 23.5833C12.6667 25.425 14.1111 26.8333 16 26.8333Z"
                                                                    fill="#FF4E4E"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="bt196">Hot Combos</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bt1093">
                                            <div className="bt1571">
                                                {comboItems.map((item, index) => (
                                                    <div key={index} className="bt1589 bt1597" data-editor-id="comboOfTheDayItem">
                                                        <div className="bt1591">
                                                            <div className="bt1592">
                                                                <svg className="bt1594" data-cy="sport-soccer" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '16px' }}>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z">
                                                                    </path>
                                                                </svg>
                                                                <div>{item.team}</div>
                                                            </div>
                                                            <div className="bt1593">
                                                                <div>{item.match}</div>
                                                                <div>1x2</div>
                                                            </div>
                                                        </div>
                                                        <div className="bt1596">{item.odds}</div>
                                                    </div>
                                                ))}
                                                <div className="bt1572">
                                                    <div className="bt1607 bt1605 bt1606 bt1609" data-editor-id="appliedBonusPlate">
                                                        <div className="bt1619">
                                                            <span className="bt1621 bt1617">
                                                                <span className="bt1622" data-editor-id="bonusTypeLabel">
                                                                    comboboost
                                                                </span>
                                                            </span>
                                                            <div className="bt1613">
                                                                <div className="bt1616">{`x 1.15 Comboboost`}</div>
                                                            </div>
                                                            <div className="bt1614"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bt1094">
                                            <div className="bt1624">
                                                <div>
                                                    <div className="bt1142">
                                                        <div className="bt1146 bt1147">
                                                            <div className="bt1148 bt1150">
                                                                <form className="bt1152 bt1154">
                                                                    <label className="bt1157" data-editor-id="betslipStakeInput">
                                                                        <input
                                                                            className="bt1163 bt1626"
                                                                            placeholder="0"
                                                                            inputMode="decimal"
                                                                            type="text"
                                                                            pattern="\d*"
                                                                            maxLength={10}
                                                                            value="50"
                                                                            style={{ height: '30px', width: '100%' }}
                                                                        />
                                                                        <i className="bt1160 bt1161">₹</i>
                                                                    </label>
                                                                </form>
                                                            </div>
                                                            <div className="bt1156">
                                                                <div className="bt1167">
                                                                    <span className="bt1168 bt1627" data-editor-id="widgetStakeButton">
                                                                        200
                                                                    </span>
                                                                    <span className="bt1168 bt1627" data-editor-id="widgetStakeButton">
                                                                        500
                                                                    </span>
                                                                    <span className="bt1168 bt1627" data-editor-id="widgetStakeButton">
                                                                        2000
                                                                    </span>
                                                                    <span className="bt1168 bt1627" data-editor-id="widgetStakeButton">
                                                                        5000
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bt1629 bt1633 bt1145">
                                                        <span className="bt1631">Comboboost</span>
                                                        <span className="bt1632">
                                                            <svg
                                                                className="bt1634"
                                                                data-cy="ic-bonus"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 16 16"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                style={{ fill: 'currentcolor', color: 'rgb(65, 188, 44)', width: 'auto', height: '16px' }}
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M7.5 3L4.5 3L4.5 1H5.5C6.60457 1 7.5 1.89543 7.5 3ZM7.5 7L7.5 4L2 4C1.44772 4 1 4.44772 1 5V6C1 6.55229 1.44772 7 2 7L7.5 7ZM7.5 8H2V13C2 13.5523 2.44772 14 3 14H7.5V8ZM11.5 3L8.5 3C8.5 1.89543 9.39543 1 10.5 1H11.5V3ZM8.5 8H14V13C14 13.5523 13.5523 14 13 14H8.5V8ZM8.5 7V4H14C14.5523 4 15 4.44772 15 5V6C15 6.55228 14.5523 7 14 7H8.5Z"
                                                                />
                                                            </svg>
                                                            x1.15
                                                        </span>
                                                    </div>
                                                    <div className="bt1629">
                                                        <span className="bt1631">Total Odds</span>
                                                        <span className="bt1632">15.664</span>
                                                    </div>
                                                    <div className="bt1629">
                                                        <span className="bt1631">Total Bet</span>
                                                        <span className="bt1632">50 ₹</span>
                                                    </div>
                                                    <div className="bt1629 bt1636">
                                                        <span className="bt1631">Potential Win</span>
                                                        <span className="bt1632">783.2 ₹</span>
                                                    </div>
                                                    <div className="bt1143">
                                                        <button
                                                            className="bt1177 bt1638 bt1173 bt1173 bt1178 bt1639 bt1174"
                                                            data-editor-id="widgetPlaceBetButton"
                                                            style={{ fontSize: '14px', padding: '0px 70px' }}
                                                        >
                                                            <div style={{ opacity: 1 }}>Place Bet</div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="bt1183 bt1625">
                                                    <div className="bt1185 bt1641 bt1184" data-editor-id="widgetPaginatorArrow">
                                                        <div className="bt1186 bt1642">
                                                            <div className="bt397 bt1644" style={{ width: '16px', height: '16px' }}>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bt1185 bt1645 bt1184" data-editor-id="widgetPaginatorArrow">
                                                        <div className="bt1186 bt1646">
                                                            <div className="bt397 bt1648" style={{ width: '16px', height: '16px' }}>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Matches>
                        <Tournament />
                        <Matches
                            label='Live Matches'
                            icon={
                                <svg data-cy="ic-live-simple" width="16" height="16"
                                    viewBox="0 0 16 16" fill="#FF4E4E" xmlns="http://www.w3.org/2000/svg"
                                    style={{ fill: 'currentcolor', color: 'rgb(255, 78, 78)', width: 'auto', height: '32px' }}>
                                    <path
                                        d="M12.9628 3.20912C12.6766 2.93029 12.2125 2.93029 11.9263 3.20912C11.6401 3.48794 11.6401 3.94001 11.9263 4.21883C12.436 4.71538 12.8404 5.30487 13.1163 5.95365C13.3921 6.60242 13.5341 7.29777 13.5341 8C13.5341 8.70223 13.3921 9.39758 13.1163 10.0464C12.8404 10.6951 12.436 11.2846 11.9263 11.7812C11.6401 12.06 11.6401 12.5121 11.9263 12.7909C12.2125 13.0697 12.6766 13.0697 12.9628 12.7909C13.6087 12.1617 14.121 11.4148 14.4706 10.5928C14.8201 9.77079 15 8.88975 15 8C15 7.11025 14.8201 6.22921 14.4706 5.40719C14.121 4.58517 13.6087 3.83827 12.9628 3.20912Z">
                                    </path>
                                    <path
                                        d="M10.0422 5.11529C10.3284 4.83647 10.7925 4.83647 11.0787 5.11529C11.4708 5.49724 11.7818 5.95068 11.994 6.44972C12.2062 6.94876 12.3155 7.48363 12.3155 8.02379C12.3155 8.56395 12.2062 9.09881 11.994 9.59786C11.7818 10.0969 11.4708 10.5503 11.0787 10.9323C10.7925 11.2111 10.3284 11.2111 10.0422 10.9323C9.75595 10.6535 9.75595 10.2014 10.0422 9.92257C10.2982 9.67322 10.5012 9.37719 10.6397 9.0514C10.7783 8.72561 10.8496 8.37642 10.8496 8.02379C10.8496 7.67115 10.7783 7.32197 10.6397 6.99617C10.5012 6.67038 10.2982 6.37436 10.0422 6.12501C9.75595 5.84618 9.75595 5.39412 10.0422 5.11529Z">
                                    </path>
                                    <path
                                        d="M8.05198 9.51147C8.90891 9.51147 9.60359 8.83477 9.60359 8.00002C9.60359 7.16526 8.90891 6.48856 8.05198 6.48856C7.19504 6.48856 6.50036 7.16526 6.50036 8.00002C6.50036 8.83477 7.19504 9.51147 8.05198 9.51147Z">
                                    </path>
                                    <path
                                        d="M6.05604 5.11529C5.76981 4.83647 5.30574 4.83647 5.0195 5.11529C4.62741 5.49724 4.31638 5.95068 4.10418 6.44972C3.89198 6.94876 3.78276 7.48363 3.78276 8.02379C3.78276 8.56395 3.89198 9.09881 4.10418 9.59786C4.31638 10.0969 4.62741 10.5503 5.0195 10.9323C5.30574 11.2111 5.76981 11.2111 6.05604 10.9323C6.34228 10.6535 6.34228 10.2014 6.05604 9.92257C5.80007 9.67322 5.59702 9.37719 5.45848 9.0514C5.31995 8.72561 5.24865 8.37642 5.24865 8.02379C5.24865 7.67115 5.31995 7.32197 5.45848 6.99617C5.59702 6.67038 5.80007 6.37436 6.05604 6.12501C6.34228 5.84618 6.34228 5.39412 6.05604 5.11529Z">
                                    </path>
                                    <path
                                        d="M3.03717 3.20912C3.3234 2.93029 3.78748 2.93029 4.07371 3.20912C4.35994 3.48794 4.35994 3.94001 4.07371 4.21883C3.56397 4.71538 3.15962 5.30487 2.88375 5.95365C2.60788 6.60242 2.46589 7.29777 2.46589 8C2.46589 8.70223 2.60788 9.39758 2.88375 10.0464C3.15962 10.6951 3.56397 11.2846 4.07371 11.7812C4.35994 12.06 4.35994 12.5121 4.07371 12.7909C3.78748 13.0697 3.3234 13.0697 3.03717 12.7909C2.39131 12.1617 1.87898 11.4148 1.52944 10.5928C1.1799 9.77078 1 8.88975 1 8C1 7.11025 1.1799 6.22921 1.52944 5.40719C1.87898 4.58517 2.39131 3.83827 3.03717 3.20912Z">
                                    </path>
                                </svg>
                            }
                        >
                            <div className="bt300 bt301">
                                <div className="bt1090 bt1097 bt1095" data-editor-id="widget">
                                    <div className="bt1091">
                                        <div className="bt1092">
                                            <div className="bt189" style={{ marginTop: '16px' }}>
                                                <div className="bt190 bt1083 bt1089">
                                                    <div className="bt194 bt1099" data-editor-id="widgetTitle">
                                                        <span className="bt197" style={{ width: '32px' }}>
                                                            <svg className="bt56 bt1100" data-cy="ic-top-title" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}>
                                                                <path
                                                                    d="M17.3904 12.1129C18.2326 11.641 18.8 10.7537 18.8 9.73684C18.8 8.22533 17.5463 7 16 7C14.4536 7 13.2 8.22533 13.2 9.73684C13.2 10.7538 13.7674 11.6411 14.6096 12.113L11.8154 15.8305C11.4608 16.3023 10.7769 16.3659 10.3413 15.9678L5.70191 11.7269C6.07692 11.3481 6.30769 10.832 6.30769 10.2632C6.30769 9.10049 5.34338 8.15793 4.15385 8.15793C2.96431 8.15793 2 9.10049 2 10.2632C2 11.4259 2.96431 12.3685 4.15385 12.3685C4.19006 12.3685 4.22607 12.3676 4.26185 12.3659L5.16 24.0765C5.19996 24.5976 5.63445 25 6.15707 25H25.8397C26.3637 25 26.7989 24.5955 26.837 24.0729L27.6927 12.3632C27.7434 12.3667 27.7945 12.3685 27.8461 12.3685C29.0356 12.3685 30 11.4259 30 10.2632C30 9.10049 29.0356 8.15793 27.8461 8.15793C26.6566 8.15793 25.6923 9.10049 25.6923 10.2632C25.6923 10.8221 25.9151 11.3301 26.2786 11.707L21.6591 15.9619C21.2239 16.3627 20.5377 16.3001 20.1822 15.8272L17.3904 12.1129Z"
                                                                    fill="#F5A623">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span className="bt196">Top Match</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bt1093">
                                            <div className="">
                                                <div className="bt1181">
                                                    <div className="bt1182">
                                                        <div className="bt2190" data-editor-id="topMatchTimer">
                                                            <div className="bt1192">Event starts in</div>
                                                            <div className="bt1191">
                                                                <div className="bt2194">
                                                                    <span className="bt2193">00</span><span className="bt1195">days</span>
                                                                </div>
                                                                <div className="bt2193">:</div>
                                                                <div className="bt2194">
                                                                    <span className="bt2193">01</span><span className="bt1195">hours</span>
                                                                </div>
                                                                <div className="bt2193">:</div>
                                                                <div className="bt2194">
                                                                    <span className="bt2193">26</span><span className="bt1195">mins</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bt2733">
                                                    <div className="bt2753">
                                                        <div className="bt371 bt2759" data-editor-id="topMatchCategory">
                                                            <div className="bt372 bt2760 bt2756 bt2758">
                                                                <span className="bt373">
                                                                    <svg className="bt2374" data-cy="sport-soccer" width="32" height="32" viewBox="0 0 32 32"
                                                                        xmlns="http://www.w3.org/2000/svg" style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '16px' }}>
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span className="bt375 bt2761">Spain
                                                                    <svg className="bt376" data-cy="ic-rounded-arrow" width="16" height="16" viewBox="0 0 16 16"
                                                                        xmlns="http://www.w3.org/2000/svg" style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '8px' }}>
                                                                        <path
                                                                            d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z">
                                                                        </path>
                                                                    </svg>LaLiga
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bt2754">
                                                        <div className="bt394 bt2764 bt2757 bt2396" data-editor-id="topMatchStatusLabel">Today, 23:00</div>
                                                    </div>
                                                </div>

                                                <div className="bt2735">
                                                    <div className="bt2765">
                                                        <div data-editor-id="topMatchOutcome" className="bt2767 bt2772">
                                                            <div className="bt410" style={{ width: '72px', height: '72px' }}>
                                                                <img src="https://static.sptpub.com/competitors/images/normal/big/2816.png" alt="" height="72" width="72" />
                                                            </div>
                                                            <div className="bt2768">Real Betis Seville</div>
                                                            <div className="bt2775 bt2778" data-editor-id="topMatchOutcomeOdd">3.9<div className="bt491"></div></div>
                                                        </div>
                                                        <div data-editor-id="topMatchOutcome" className="bt2767 bt2781 bt2769">
                                                            <div className="bt2766">X</div>
                                                            <div className="bt2768"></div>
                                                            <div className="bt2775 bt2784" data-editor-id="topMatchOutcomeOdd">4.0<div className="bt491"></div></div>
                                                        </div>
                                                        <div data-editor-id="topMatchOutcome" className="bt2767 bt2787">
                                                            <div className="bt410" style={{ width: '72px', height: '72px' }}>
                                                                <img src="https://static.sptpub.com/competitors/images/normal/big/2817.png" alt="" height="72" width="72" />
                                                            </div>
                                                            <div className="bt2768">FC Barcelona</div>
                                                            <div className="bt2775 bt2790" data-editor-id="topMatchOutcomeOdd">1.89<div className="bt491"></div></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="bt1094">
                                            <div className="bt1137">
                                                <div>
                                                    <div className="bt1142">
                                                        <div className="bt1146 bt1147">
                                                            <div className="bt1148 bt1150">
                                                                <form noValidate className="bt1152 bt1154">
                                                                    <label className="bt1157" data-editor-id="betslipStakeInput">
                                                                        <input
                                                                            className="bt1163 bt1164"
                                                                            placeholder="0"
                                                                            inputMode="decimal"
                                                                            type="text"
                                                                            pattern="\d*"
                                                                            maxLength={10}
                                                                            value="50"
                                                                            style={{ height: '30px', width: '100%' }}
                                                                        />
                                                                        <i className="bt1160 bt1161">₹</i>
                                                                    </label>
                                                                </form>
                                                            </div>
                                                            <div className="bt1156">
                                                                <div className="bt1167">
                                                                    <span className="bt1168 bt1171" data-editor-id="widgetStakeButton">200</span>
                                                                    <span className="bt1168 bt1171" data-editor-id="widgetStakeButton">500</span>
                                                                    <span className="bt1168 bt1171" data-editor-id="widgetStakeButton">2000</span>
                                                                    <span className="bt1168 bt1171" data-editor-id="widgetStakeButton">5000</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bt1143">
                                                        <button
                                                            className="bt1177 bt1180 bt1173 bt1173 bt1178 bt1181 bt1174"
                                                            data-editor-id="widgetPlaceBetButton"
                                                            style={{ fontSize: '14px', padding: '0px 70px' }}
                                                        >
                                                            <div style={{ opacity: 1 }}>Place Bet</div>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="bt1139">
                                                    <div className="bt1183 bt1140">
                                                        <div className="bt1185 bt1190 bt1184" data-editor-id="widgetPaginatorArrow">
                                                            <div className="bt1186 bt1191">
                                                                <div className="bt397 bt1193" style={{ width: '16px', height: '16px' }}>
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bt1185 bt1194 bt1184" data-editor-id="widgetPaginatorArrow">
                                                            <div className="bt1186 bt1195">
                                                                <div className="bt397 bt1197" style={{ width: '16px', height: '16px' }}>
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-editor-id="widgetGoToButton" className="bt1198">
                                                        Go to Event
                                                        <div className="bt397 bt1199" style={{ width: '16px', height: '16px' }}>
                                                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Matches>
                        <div className="bt302">
                            <a className="bt510 bt509" data-editor-id="sportMoreBlock" href="/live/1">
                                <div className="bt511" data-editor-id="sportMoreLabel">Go to Live</div>
                                <div className="bt397 bt1064" style={{ width: '16px', height: '16px' }}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bt854">
                    <div className="bt849">
                        <div>
                            <div className="bt856">
                                <div className="bt857" data-editor-id="oddsFormatSelectLabel">Odds Format</div>
                                <div className="bt858">
                                    <div className="bt859" data-editor-id="oddsFormatSelect">
                                        <div className="bt860">European
                                            <div className="bt397 bt863" style={{ width: '16px', height: '16px' }}>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bt852" data-editor-id="marketNoticeMessage">Although every effort is made to ensure data displayed on our site is accurate, this data is for information purposes and should be used as a guide only. In the event of any particular information being incorrect, we assume no liability for it.</div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dashboard