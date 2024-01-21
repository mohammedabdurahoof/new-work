import React from 'react'

interface Props {
    place: string;
    name: string;
    href: string;
    time: string;
    team: TeamArray[];
}

interface TeamArray {
    name: string;
    src: string;
}

function EventCard({ place, name, href, time, team }: Props) {
    return (
        <div className="bt300">
            <div className="bt303">
                <div className="bt305" data-editor-id="eventCard">
                    <div className="bt312">
                        <div className="bt316">
                            <div className="bt323 bt1300" data-editor-id="eventCardCategory">
                                <div className="bt324 bt1301 bt315">
                                    <span className="bt325">
                                        <svg
                                            className="bt326"
                                            data-cy="sport-soccer"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '16px' }}
                                        >
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="bt327 bt1302">{place}
                                        <svg
                                            className="bt328"
                                            data-cy="ic-rounded-arrow"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '8px' }}
                                        >
                                            <path
                                                d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z">
                                            </path>
                                        </svg>
                                        {name}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bt316">
                            <div className="bt314">
                                <span className="bt334 bt317 bt319" role="button" tabIndex={0}>
                                    <svg
                                        className="bt335"
                                        data-cy="stat"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '16px' }}
                                    >
                                        <g clip-path="url(#clip0)">
                                            <g opacity="1">
                                                <rect x="3" y="7" width="2" height="5" rx="1"></rect>
                                                <rect x="7" y="3" width="2" height="9" rx="1"></rect>
                                                <rect x="11" y="5" width="2" height="7" rx="1"></rect>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="16" height="16"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <a
                        className="bt320"
                        data-editor-id="eventCardContent"
                        href={href}
                    >
                        <div className="bt307">
                            <div className="bt308">
                                <div className="bt346 bt1306 bt348" data-editor-id="eventCardStatusLabel">
                                    <div className="bt313" data-editor-id="eventCardStatusLabel">
                                        {time}
                                    </div>
                                </div>
                            </div>
                            <div className="bt309">
                                <svg
                                    className="bt350 bt310"
                                    data-cy="player-props"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fill: 'currentcolor', color: 'rgb(255, 190, 3)', width: 'auto', height: '16px' }}
                                >
                                    <g clip-path="url(#clip0_684_298)">
                                        <path
                                            d="M8.75791 7.55997H7.36843V6.19997H8.75791C9.15323 6.19997 9.4737 6.50442 9.4737 6.87997C9.4737 7.25553 9.15323 7.55997 8.75791 7.55997Z"
                                            fill="#21A8F7"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.29505 1.91671C5.21096 1.72006 5.01216 1.60023 4.80183 1.59998C4.75855 1.59987 4.71455 1.60482 4.67065 1.6153L2.53732 2.12438C2.44354 2.14676 2.3579 2.19305 2.28955 2.25829L0.156214 4.29463C-0.0359493 4.47806 -0.0528933 4.77007 0.116874 4.97263L2.25021 7.51806C2.42303 7.72426 2.73233 7.7701 2.96251 7.62362L3.73333 7.1331V13.8909C3.73333 14.172 3.97211 14.4 4.26667 14.4H11.7333C12.0279 14.4 12.2667 14.172 12.2667 13.8909V7.1331L13.0375 7.62362C13.2677 7.7701 13.577 7.72426 13.7498 7.51806L15.8831 4.97263C16.0529 4.77007 16.036 4.47806 15.8438 4.29463L13.7105 2.25829C13.6421 2.19305 13.5565 2.14676 13.4627 2.12438L11.349 1.62C11.2995 1.6063 11.2492 1.59981 11.1996 1.59998C10.9793 1.59999 10.7773 1.73121 10.6996 1.93292L10.6939 1.94378C10.68 1.96987 10.6554 2.01266 10.6178 2.06676C10.5428 2.17498 10.4169 2.3272 10.2227 2.4821C9.84264 2.78505 9.1646 3.12737 8.00131 3.12737C6.83802 3.12737 6.15998 2.78505 5.77997 2.4821C5.58568 2.3272 5.45986 2.17498 5.38478 2.06676C5.34725 2.01266 5.32262 1.96987 5.3087 1.94378C5.30176 1.93076 5.29685 1.92054 5.29505 1.91671ZM6.10528 4.99997V10.4H7.36843V8.75997H8.75791C9.85085 8.75997 10.7369 7.91827 10.7369 6.87997C10.7369 5.84168 9.85085 4.99997 8.75791 4.99997H6.10528Z"
                                            fill="#21A8F7"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_684_298">
                                            <rect width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg
                                    className="bt351 bt310"
                                    data-cy="bet-builder"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginRight: '3px', fill: 'currentcolor', color: 'rgb(33, 168, 247)', width: 'auto', height: '16px' }}
                                >
                                    <path
                                        d="M7.33263 2C6.62253 2 6.04688 2.57565 6.04688 3.28575V4.14292C6.04688 4.85303 6.62253 5.42868 7.33263 5.42868H12.4756C13.1857 5.42868 13.7614 4.85303 13.7614 4.14292V3.28575C13.7614 2.57565 13.1857 2 12.4756 2H7.33263Z"
                                        fill="#21A8F7"></path>
                                    <path
                                        d="M3.47266 7.5714C3.47266 6.8613 4.04831 6.28564 4.75841 6.28564H9.90143C10.6115 6.28564 11.1872 6.8613 11.1872 7.5714V8.42857C11.1872 9.13867 10.6115 9.71432 9.90143 9.71432H4.75841C4.04831 9.71432 3.47266 9.13867 3.47266 8.42857V7.5714Z"
                                        fill="#21A8F7"></path>
                                    <path
                                        d="M0.902344 11.857C0.902344 11.1469 1.478 10.5713 2.1881 10.5713H7.33111C8.04122 10.5713 8.61687 11.1469 8.61687 11.857V12.7142C8.61687 13.4243 8.04122 14 7.33111 14H2.1881C1.478 14 0.902344 13.4243 0.902344 12.7142V11.857Z"
                                        fill="#21A8F7"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="bt354 bt306">
                            <div className="bt355">
                                {
                                    team.map((value, index) =>
                                        <div className="bt356" key={index} style={{ marginBottom: '8px' }}>
                                            <div className="bt360 bt357">
                                                <span className="bt362">
                                                    <div className="bt363" style={{ width: '24px', height: '24px' }}>
                                                        <img
                                                            src={value.src}
                                                            alt=""
                                                            height="24"
                                                            width="24"
                                                        />
                                                    </div>
                                                </span>
                                                <div className="bt361" style={{ height: '24px', lineHeight: '24px' }}>
                                                    {value.name}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="bt359">
                                <div data-editor-id="widgetScore" className="bt368">
                                    <div className="bt370"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div>
                        <div className="bt393 bt394 bt389" data-editor-id="simpleMarketTitle" style={{ width: 'auto' }}>
                            <div className="bt395">1x2</div>
                        </div>
                        <div className="bt390">
                            <div className="bt420">
                                <div className="bt422">
                                    <div data-editor-id="outcomePlate" className="bt424 bt427">
                                        <div className="bt428 bt386">
                                            <div className="bt443"></div>
                                            <div className="bt432" data-editor-id="outcomePlateName">
                                                <span className="bt434">1</span>
                                            </div>
                                            <div className="bt377 bt435">
                                                <span className="bt379">1.97</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-editor-id="outcomePlate" className="bt424 bt427">
                                        <div className="bt428 bt386">
                                            <div className="bt443"></div>
                                            <div className="bt432" data-editor-id="outcomePlateName">
                                                <span className="bt434">draw</span>
                                            </div>
                                            <div className="bt377 bt435">
                                                <span className="bt379">3.65</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-editor-id="outcomePlate" className="bt424 bt427">
                                        <div className="bt428 bt386">
                                            <div className="bt443"></div>
                                            <div className="bt432" data-editor-id="outcomePlateName">
                                                <span className="bt434">2</span>
                                            </div>
                                            <div className="bt377 bt435">
                                                <span className="bt379">3.55</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bt384">
                                <div className="bt397 bt1310 bt385" style={{ width: '16px', height: '16px' }}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bt399">
                            <div data-simplebar="init" className="bt410 bt388">
                                <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                                    <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer"></div>
                                    </div>
                                    <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                                            <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden' }}>
                                                <div className="simplebar-content" style={{ padding: '0px' }}>
                                                    <div className="bt387" style={{ height: '0px', overflow: 'hidden', display: 'none', transition: 'height 0.3s linear 0s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="simplebar-placeholder" style={{ width: '511px', height: '0px' }}></div>
                                </div>
                                <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                                    <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div>
                                </div>
                                <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                                    <div className="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}></div>
                                </div>
                            </div>
                            <div className="bt400 bt1311 bt404"></div>
                            <div className="bt401 bt1312 bt404"></div>
                            <div className="bt402 bt1313 bt405"></div>
                            <div className="bt403 bt1314 bt405"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard