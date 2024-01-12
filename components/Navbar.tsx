import React from 'react'

function Navbar() {
    return (
        <div className="bt31" data-editor-id="navbar" style={{ zIndex: '98', top: '64px', height: 'calc(100vh - 64px)' }}>
            <div className="bt32" data-editor-id="navbarHeader" style={{ background: 'rgb(32, 33, 36)' }}>
                <div className="bt41 bt42" data-editor-id="navbarHeader" style={{ background: 'rgb(32, 33, 36)' }}>
                    <div>
                        <div className="bt44 bt46 bt45 bt47" data-editor-id="navbarIcon"><svg data-cy="ic-home" width="32"
                            height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.669 8.94762C16.2887 8.60535 15.7113 8.60535 15.331 8.94762L7.33104 16.1476C7.12032 16.3373 7 16.6074 7 16.8909V23.0002C7 23.5525 7.44772 24.0002 8 24.0002H11.2727C11.825 24.0002 12.2727 23.5525 12.2727 23.0002V21.6002C12.2727 19.9433 13.6159 18.6002 15.2727 18.6002H16.7273C18.3841 18.6002 19.7273 19.9433 19.7273 21.6002V23.0002C19.7273 23.5525 20.175 24.0002 20.7273 24.0002H24C24.5523 24.0002 25 23.5525 25 23.0002V16.8909C25 16.6074 24.8797 16.3373 24.669 16.1476L16.669 8.94762ZM13.9931 7.46104C15.134 6.43421 16.866 6.43421 18.0069 7.46104L26.0069 14.661C26.639 15.23 27 16.0405 27 16.8909V23.0002C27 24.657 25.6569 26.0002 24 26.0002H20.7273C19.0704 26.0002 17.7273 24.657 17.7273 23.0002V21.6002C17.7273 21.0479 17.2796 20.6002 16.7273 20.6002H15.2727C14.7204 20.6002 14.2727 21.0479 14.2727 21.6002V23.0002C14.2727 24.657 12.9296 26.0002 11.2727 26.0002H8C6.34315 26.0002 5 24.657 5 23.0002V16.8909C5 16.0405 5.36096 15.23 5.99311 14.661L13.9931 7.46104Z">
                            </path>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <div className="bt44 bt51" data-editor-id="navbarIcon"><svg data-cy="ic-live" width="32" height="32"
                            viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5 8C2.79086 8 1 9.79086 1 12V20C1 22.2091 2.79086 24 5 24H27C29.2091 24 31 22.2091 31 20V12C31 9.79086 29.2091 8 27 8H5ZM3 12C3 10.8954 3.89543 10 5 10H27C28.1046 10 29 10.8954 29 12V20C29 21.1046 28.1046 22 27 22H5C3.89543 22 3 21.1046 3 20V12ZM7.888 13.4H6V19H10.416V17.536H7.888V13.4ZM13.4655 13.4H11.5775V19H13.4655V13.4ZM20.9984 13.4L18.6304 19H16.7744L14.4064 13.4H16.4384L17.7744 16.672L19.1424 13.4H20.9984ZM26.4823 19V17.576H23.6822V16.84H26.0502V15.48H23.6822V14.824H26.3783V13.4H21.8263V19H26.4823Z">
                            </path>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <div className="bt44 bt54" data-editor-id="navbarIcon"><svg data-cy="ic-favourite" width="32" height="32"
                            viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.6254 5.94061C15.0996 4.68646 16.9005 4.68646 17.3746 5.94061L19.6994 12.0896L26.5777 12.2991C27.8616 12.3383 28.6024 14.0188 27.4139 14.8991L22.0169 18.8962L23.9146 25.138C24.12 25.8138 23.8039 26.4229 23.3534 26.7351C22.9076 27.044 22.2593 27.1206 21.7036 26.7608L16 23.0679L10.2965 26.7608C9.74081 27.1206 9.09247 27.044 8.64671 26.7351C8.19618 26.4229 7.88008 25.8138 8.08553 25.138L9.98319 18.8962L4.58622 14.8991C3.39765 14.0188 4.13844 12.3383 5.42238 12.2991L12.3006 12.0896L14.6254 5.94061ZM16 7.96023L14.0424 13.138C13.8266 13.709 13.2865 14.0605 12.7132 14.078L7.07004 14.2499L11.4899 17.5233C11.9687 17.8779 12.1942 18.4993 12.0136 19.0935L10.434 24.2891L15.1943 21.207C15.6833 20.8903 16.3168 20.8903 16.8058 21.207L21.5661 24.2891L19.9865 19.0935C19.8058 18.4993 20.0314 17.8779 20.5102 17.5233L24.93 14.2499L19.2869 14.078C18.7136 14.0605 18.1735 13.709 17.9577 13.138L16 7.96023ZM26.2235 13.2919L26.223 13.2923L26.2235 13.2919Z">
                            </path>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <div id="nav-bar-bets">
                            <div className="bt44 bt64" data-editor-id="navbarIcon"><svg data-cy="ic-navbar-mybets" width="32"
                                height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5 6.7C5 4.68329 6.5966 3 8.625 3H17.375C19.4034 3 21 4.68329 21 6.7V19.3C21 21.3167 19.4034 23 17.375 23H8.625C6.5966 23 5 21.3167 5 19.3V6.7ZM8.625 5C7.75391 5 7 5.73437 7 6.7V19.3C7 20.2656 7.75391 21 8.625 21H17.375C18.2461 21 19 20.2656 19 19.3V6.7C19 5.73437 18.2461 5 17.375 5H8.625ZM22.375 10C22.375 9.44772 22.8227 9 23.375 9H24C25.6569 9 27 10.3431 27 12V26C27 27.6569 25.6569 29 24 29H14C12.3431 29 11 27.6569 11 26V25.3C11 24.7477 11.4477 24.3 12 24.3C12.5523 24.3 13 24.7477 13 25.3V26C13 26.5523 13.4477 27 14 27H24C24.5523 27 25 26.5523 25 26V12C25 11.4477 24.5523 11 24 11H23.375C22.8227 11 22.375 10.5523 22.375 10ZM10 16C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H10ZM9 13C9 12.4477 9.44772 12 10 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H10C9.44772 14 9 13.5523 9 13ZM10 8C9.44772 8 9 8.44772 9 9C9 9.55228 9.44772 10 10 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H10Z">
                                </path>
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bt44 bt67" data-editor-id="navbarIcon"><svg data-cy="ic-search" width="32" height="32"
                            viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '32px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.99999 14C9.99999 10.134 13.134 7 17 7C20.866 7 24 10.134 24 14C24 17.866 20.866 21 17 21C13.134 21 9.99999 17.866 9.99999 14ZM17 5C12.0294 5 7.99999 9.02944 7.99999 14C7.99999 16.2926 8.85719 18.3849 10.2686 19.9741L5.29289 24.9497C4.90237 25.3403 4.90237 25.9734 5.29289 26.364C5.68342 26.7545 6.31658 26.7545 6.70711 26.364L11.7559 21.3152C13.2325 22.3756 15.0433 23 17 23C21.9706 23 26 18.9706 26 14C26 9.02944 21.9706 5 17 5Z">
                            </path>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div data-simplebar="init" className="bt70 bt40 simplebar-scrollable-y simplebar-mouse-entered">
                <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                            <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content"
                                style={{ height: '100%', overflow: 'hidden scroll' }}>
                                <div className="simplebar-content" style={{ padding: '0px' }}>
                                    <div className="bt71 bt38">
                                        <div className="bt76 bt81 bt77" data-editor-id="sidebarPopularNowLabel">
                                            <span style={{ marginRight: '10px' }}>
                                                <svg className="bt80" data-cy="ic-hot" width="16"
                                                    height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '16px' }}>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M8 14.5C5.22222 14.5 3 12.3333 3 9.625C3 7.45833 4.33333 5.18333 4.88889 4.31667L4.91752 4.27471C5.30336 3.70893 6.80974 1.5 8 1.5C8.33333 1.5 8.55556 1.71667 8.55556 2.04167C8.55556 3.28086 8.95441 4.48117 9.65074 5.47784C9.86874 5.16838 10.038 4.83547 10.1111 4.47912C10.1414 4.33165 10.254 4.21629 10.3951 4.15055C10.6716 3.99249 11.0012 4.04786 11.1667 4.31667C11.9444 5.50833 12.5 6.80833 12.8333 7.94583C12.9444 8.54167 13 9.1375 13 9.625C13 12.3333 10.7778 14.5 8 14.5ZM8 13.4167C8.94444 13.4167 9.66667 12.7125 9.66667 11.7917C9.66667 11.6631 9.63188 11.5006 9.58984 11.3042C9.57875 11.2524 9.56715 11.1982 9.55556 11.1417C9.50343 10.9129 9.41461 10.6723 9.30058 10.4253C9.25828 10.4674 9.21379 10.5074 9.16713 10.5454L9.16667 10.5458C9.11111 10.6542 8.94444 10.7083 8.83333 10.7083C8.66667 10.7083 8.5 10.6542 8.38889 10.5458C8.00629 10.0711 7.73257 9.55382 7.58136 9.00741C7.0461 9.65904 6.33333 10.8412 6.33333 11.7917C6.33333 12.7125 7.05556 13.4167 8 13.4167Z"
                                                        fill="#FF4E4E"></path>
                                                </svg>
                                            </span>
                                            Popular Now
                                            <svg className="bt78 bt79" data-cy="arrow-filled" width="6" height="8"
                                                viewBox="0 0 6 8" xmlns="http://www.w3.org/2000/svg"
                                                style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '8px' }}>
                                                <path
                                                    d="M5.62136 3.2458C6.12621 3.64366 6.12621 4.35634 5.62136 4.7542L1.81416 7.75455C1.10408 8.31414 1.33478e-07 7.85515 1.70842e-07 7.00036L4.33141e-07 0.999642C4.70505e-07 0.144854 1.10408 -0.314144 1.81416 0.245446L5.62136 3.2458Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="bt72">
                                            <div className="bt99 bt87" dir="ltr">
                                                <div className="bt97 bt89 bt98" style={{ left: '0px', right: '0px' }}>
                                                    <div className="bt90 bt91" data-editor-id="heroBannerArrow"
                                                        style={{ pointerEvents: 'auto' }}>
                                                        <div className="bt92">
                                                            <svg data-cy="arrow-filled-up" width="8" height="6"
                                                                viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg"
                                                                style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '6px' }}>
                                                                <path
                                                                    d="M3.2458 0.378636C3.64366 -0.126212 4.35634 -0.126212 4.7542 0.378636L7.75455 4.18584C8.31414 4.89592 7.85515 6 7.00036 6H0.999643C0.144855 6 -0.314144 4.89592 0.245447 4.18584L3.2458 0.378636Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="bt90" data-editor-id="heroBannerArrow"
                                                        style={{ pointerEvents: 'auto' }}>
                                                        <div className="bt92"><svg data-cy="arrow-filled-up" width="8" height="6"
                                                            viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg"
                                                            style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '6px' }}>
                                                            <path
                                                                d="M3.2458 0.378636C3.64366 -0.126212 4.35634 -0.126212 4.7542 0.378636L7.75455 4.18584C8.31414 4.89592 7.85515 6 7.00036 6H0.999643C0.144855 6 -0.314144 4.89592 0.245447 4.18584L3.2458 0.378636Z">
                                                            </path>
                                                        </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bt93 bt88" style={{ height: '88px' }}>
                                                    <div className="bt94" style={{ transform: 'translateX(0px)' }}>
                                                        <div className="bt95"
                                                            style={{ height: '88px', marginLeft: '0px', marginRight: '0px', paddingRight: '8px', width: '128px', minWidth: '128px' }}>
                                                            <div className="bt84">
                                                                <div className="bt85" data-editor-id="leftSidebarBanner"><span
                                                                    style={{ textDecoration: 'inherit' }}>
                                                                    <div className="bt106 bt102"
                                                                        style={{ backgroundImage: 'url(https://api-k-5609dac9-1033.sptpub.com/api/v1/promo/banner/brand/2103509236163162112/image/2282187564133781506)' }}>
                                                                        <div className="bt109 bt108"
                                                                            style={{ width: '24px', height: '24px' }}>
                                                                            <img
                                                                                src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg"
                                                                                alt="" height="24" width="24" />
                                                                        </div>
                                                                        <div className="bt103">
                                                                            <div className="bt104">Tennis</div>
                                                                            <div className="bt105">ATP Brisbane, Australia</div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                        </div>
                                                        <div className="bt95"
                                                            style={{ height: '88px', marginLeft: '0px', marginRight: '0px', paddingRight: '8px', width: '128px', minWidth: '128px' }}>
                                                            <div className="bt84">
                                                                <div className="bt85" data-editor-id="leftSidebarBanner"><span
                                                                    style={{ textDecoration: 'inherit' }}>
                                                                    <div className="bt106 bt102"
                                                                        style={{ backgroundImage: 'url(https://api-k-5609dac9-1033.sptpub.com/api/v1/promo/banner/brand/2103509236163162112/image/2282187564133781504)' }}>
                                                                        <div className="bt109 bt108"
                                                                            style={{ width: '24px', height: '24px' }}><img
                                                                                src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/ITA.svg"
                                                                                alt="" height="24" width="24" /></div>
                                                                        <div className="bt103">
                                                                            <div className="bt104">Soccer</div>
                                                                            <div className="bt105">Serie A</div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                        </div>
                                                        <div className="bt95"
                                                            style={{ height: '88px', marginLeft: '0px', marginRight: '0px', paddingRight: '8px', width: '128px', minWidth: '128px' }}>
                                                            <div className="bt84">
                                                                <div className="bt85" data-editor-id="leftSidebarBanner"><span
                                                                    style={{ textDecoration: 'inherit' }}>
                                                                    <div className="bt106 bt102"
                                                                        style={{ backgroundImage: 'url(https://api-k-5609dac9-1033.sptpub.com/api/v1/promo/banner/brand/2103509236163162112/image/2303829944544931842)' }}>
                                                                        <div className="bt109 bt108"
                                                                            style={{ width: '24px', height: '24px' }}><img
                                                                                src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/ENG.svg"
                                                                                alt="" height="24" width="24" /></div>
                                                                        <div className="bt103">
                                                                            <div className="bt104">Soccer</div>
                                                                            <div className="bt105">FA Cup</div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                        </div>
                                                        <div className="bt95"
                                                            style={{ height: '88px', marginLeft: '0px', marginRight: '0px', paddingRight: '8px', width: '128px', minWidth: '128px' }}>
                                                            <div className="bt84">
                                                                <div className="bt85" data-editor-id="leftSidebarBanner"><span
                                                                    style={{ textDecoration: 'inherit' }}>
                                                                    <div className="bt106 bt102"
                                                                        style={{ backgroundImage: 'url(https://api-k-5609dac9-1033.sptpub.com/api/v1/promo/banner/brand/2103509236163162112/image/2282183265995591687)' }}>
                                                                        <div className="bt109 bt108"
                                                                            style={{ width: '24px', height: '24px' }}><img
                                                                                src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/USA.svg"
                                                                                alt="" height="24" width="24" /></div>
                                                                        <div className="bt103">
                                                                            <div className="bt104">NBA 2K</div>
                                                                            <div className="bt105">NBA All-time</div>
                                                                        </div>
                                                                    </div>
                                                                </span></div>
                                                            </div>
                                                        </div>
                                                        <div className="bt95"
                                                            style={{ height: '88px', marginLeft: '0px', marginRight: '0px', paddingRight: '0px', width: '128px', minWidth: '128px' }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bt73">
                                                <a data-editor-id="sidebarPopularNowItem" className="bt112 bt120"
                                                    href="/5/1669819265894715392/1690002015209529344">
                                                    <div className="bt114">
                                                        <div className="bt109" style={{ width: '24px', height: '24px' }}>
                                                            <img
                                                                src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg"
                                                                alt="" height="24" width="24" />
                                                        </div>
                                                    </div>
                                                    <div className="bt115">
                                                        <div className="bt116 bt122" data-editor-id="sidebarPopularNowCrumbs">
                                                            <span>Tennis</span><svg width="8" height="8" viewBox="0 0 8 8"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg" className="bt119">
                                                                <path opacity="0.3"
                                                                    d="M5.31068 3.6229C5.56311 3.82183 5.56311 4.17817 5.31068 4.3771L3.40708 5.87728C3.05204 6.15707 2.5 5.92757 2.5 5.50018L2.5 2.49982C2.5 2.07243 3.05204 1.84293 3.40708 2.12272L5.31068 3.6229Z"
                                                                    fill="currentColor"></path>
                                                            </svg><span className="bt118">WTA</span></div>
                                                        <div className="bt117">WTA Brisbane, Australia</div>
                                                    </div>
                                                </a>
                                                <a data-editor-id="sidebarPopularNowItem" className="bt112 bt123"
                                                    href="/2/1669819088232386560/1669819088278523904">
                                                    <div className="bt114">
                                                        <div className="bt109" style={{ width: '24px', height: '24px' }}><img
                                                            src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/USA.svg"
                                                            alt="" height="24" width="24" /></div>
                                                    </div>
                                                    <div className="bt115">
                                                        <div className="bt116 bt125" data-editor-id="sidebarPopularNowCrumbs">
                                                            <span>Basketball</span><svg width="8" height="8" viewBox="0 0 8 8"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg" className="bt119">
                                                                <path opacity="0.3"
                                                                    d="M5.31068 3.6229C5.56311 3.82183 5.56311 4.17817 5.31068 4.3771L3.40708 5.87728C3.05204 6.15707 2.5 5.92757 2.5 5.50018L2.5 2.49982C2.5 2.07243 3.05204 1.84293 3.40708 2.12272L5.31068 3.6229Z"
                                                                    fill="currentColor"></path>
                                                            </svg><span className="bt118">USA</span></div>
                                                        <div className="bt117">NBA</div>
                                                    </div>
                                                </a>
                                                <a data-editor-id="sidebarPopularNowItem" className="bt112 bt126"
                                                    href="/1/1669818860410376192/1669818860469096448">
                                                    <div className="bt114">
                                                        <div className="bt109" style={{ width: '24px', height: '24px' }}><img
                                                            src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/ENG.svg"
                                                            alt="" height="24" width="24" /></div>
                                                    </div>
                                                    <div className="bt115">
                                                        <div className="bt116 bt128" data-editor-id="sidebarPopularNowCrumbs">
                                                            <span>Soccer</span><svg width="8" height="8" viewBox="0 0 8 8"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg" className="bt119">
                                                                <path opacity="0.3"
                                                                    d="M5.31068 3.6229C5.56311 3.82183 5.56311 4.17817 5.31068 4.3771L3.40708 5.87728C3.05204 6.15707 2.5 5.92757 2.5 5.50018L2.5 2.49982C2.5 2.07243 3.05204 1.84293 3.40708 2.12272L5.31068 3.6229Z"
                                                                    fill="currentColor"></path>
                                                            </svg><span className="bt118">England</span></div>
                                                        <div className="bt117">Premier League</div>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>
                                    <div className="bt33 bt34">
                                        <div className="bt129 bt39">
                                            <div className="bt133" data-editor-id="expandedNavbarTabs">
                                                <div className="bt134 bt136"><span className="bt135">Sports</span></div>
                                                <div className="bt134"><span className="bt135">Esports</span></div>
                                                <div className="bt134"><span className="bt135">Racing</span></div>
                                            </div>
                                            <div className="bt130"><span className="bt137 bt132" role="button" tabIndex={0} ><svg
                                                className="bt138" data-cy="stat" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                style={{ fill: 'currentcolor', color: 'rgb(255, 78, 78)', width: 'auto', height: '16px' }}>
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
                                            </span></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/soccer-1">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-soccer" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Soccer</span>
                                                        <div className="bt158"><span className="bt159">771</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/fifa-300">
                                                <div className="bt150">
                                                    <div className="bt153">
                                                        <div className="bt224 bt156" data-editor-id="navbarPin"><svg
                                                            data-cy="ic-badge-hot" width="20" height="20"
                                                            viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            style={{ fill: 'currentcolor', color: 'rgb(255, 78, 78)', width: 'auto', height: '19px' }}>
                                                            <g clip-path="url(#clip0)">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M10 17C7.22222 17 5 14.6667 5 11.75C5 9.41667 6.33333 6.96667 6.88889 6.03333L6.91752 5.98815C7.30336 5.37884 8.80974 3 10 3C10.3333 3 10.5556 3.23333 10.5556 3.58333C10.5556 4.91785 10.9544 6.2105 11.6507 7.28383C11.8687 6.95056 12.038 6.59205 12.1111 6.20829C12.1414 6.04947 12.254 5.92524 12.3951 5.85444C12.6716 5.68422 13.0012 5.74385 13.1667 6.03333C13.9444 7.31667 14.5 8.71667 14.8333 9.94167C14.9444 10.5833 15 11.225 15 11.75C15 14.6667 12.7778 17 10 17ZM10 15.8333C10.9444 15.8333 11.6667 15.075 11.6667 14.0833C11.6667 13.9449 11.6319 13.7699 11.5898 13.5583C11.5787 13.5025 11.5672 13.4442 11.5556 13.3833C11.5034 13.137 11.4146 12.8779 11.3006 12.6119C11.2583 12.6572 11.2138 12.7003 11.1671 12.7412L11.1667 12.7417C11.1111 12.8583 10.9444 12.9167 10.8333 12.9167C10.6667 12.9167 10.5 12.8583 10.3889 12.7417C10.0063 12.2304 9.73257 11.6733 9.58136 11.0849C9.0461 11.7867 8.33333 13.0597 8.33333 14.0833C8.33333 15.075 9.05556 15.8333 10 15.8333Z"
                                                                    fill="currentColor"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0">
                                                                    <path d="M0 0H20V20H0V0Z" fill="white"></path>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        </div><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                            data-cy="sport-fifa-b" width="32" height="32" viewBox="0 0 32 32"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M30.9995 18H29.112H27.9715V17.2941H26.3806V14.8023H27.9715V12.3227C27.9715 11.7383 27.7402 11.5111 27.1598 11.5111H26.5917C26.1331 11.5111 25.8612 11.7667 25.8287 12.2253C25.826 12.2712 25.8269 12.3152 25.8278 12.3599C25.8282 12.3824 25.8287 12.4051 25.8287 12.4282V18H22.7972V11.8763C22.7972 10.2002 23.8361 9.08826 25.5122 9.02332C26.478 8.9868 27.448 8.99492 28.4138 9.0355C29.9032 9.09638 30.9909 10.2408 30.9949 11.7302C31.0007 14.0338 31.0003 15.4537 30.9996 17.6771L30.9995 18ZM7.4527 14.0313H4.05996C4.05996 13.4633 4.05996 12.9273 4.0559 12.3877C4.0559 11.7708 4.30346 11.5232 4.91626 11.5232H8.69454V9.01926C8.64179 9.01115 8.6012 9.00709 8.56062 9.00709C8.07098 9.00709 7.58173 9.00555 7.09262 9.00401C5.9926 9.00056 4.89333 8.9971 3.79211 9.01115C2.10792 9.03144 1 10.1759 1 11.856V21.5554H4.06402V16.5474H7.4527V14.0313ZM14.0921 21.5594H17.1561V16.5555H20.5286V14.015H17.1399V12.3755C17.1399 11.787 17.3996 11.5232 17.9921 11.5232H21.7907V9.00709H21.5878C21.0709 9.00709 20.5544 9.00664 20.0381 9.00619C19.0059 9.00529 17.9744 9.00439 16.941 9.00709C16.7543 9.00709 16.5636 9.01927 16.3769 9.05174C14.993 9.29929 14.0921 10.3707 14.0921 11.7789V21.5594ZM12.8218 21.5513H9.79839V9.01927H12.8218V21.5513ZM19 21C19 19.8954 19.8954 19 21 19H29C30.1046 19 31 19.8954 31 21V29C31 30.1046 30.1046 31 29 31H21C19.8954 31 19 30.1046 19 29V21ZM21 29V27.9304L23.0996 24.0641C23.2062 23.8709 23.267 23.7038 23.2822 23.5627C23.2974 23.4141 23.305 23.2321 23.305 23.0167C23.305 22.9201 23.3012 22.8199 23.2936 22.7159C23.2936 22.6045 23.2746 22.5079 23.2366 22.4262C23.1985 22.3445 23.1415 22.2776 23.0654 22.2256C22.9893 22.1662 22.879 22.1365 22.7345 22.1365C22.5595 22.1365 22.4188 22.1848 22.3123 22.2813C22.2134 22.3779 22.1639 22.519 22.1639 22.7047V23.351H21V22.727C21 22.4893 21.0456 22.2665 21.1369 22.0585C21.2282 21.8505 21.3537 21.6685 21.5135 21.5125C21.6656 21.3565 21.8482 21.234 22.0612 21.1448C22.2742 21.0483 22.5025 21 22.7459 21C23.0502 21 23.3089 21.0557 23.5219 21.1671C23.7425 21.2711 23.9251 21.416 24.0696 21.6017C24.2065 21.7874 24.3054 21.9991 24.3663 22.2368C24.4347 22.4745 24.469 22.727 24.469 22.9944C24.469 23.1876 24.4652 23.351 24.4576 23.4847C24.45 23.611 24.4347 23.7335 24.4119 23.8524C24.3891 23.9712 24.3511 24.0901 24.2978 24.2089C24.2446 24.3278 24.1723 24.4726 24.081 24.6435L22.3693 27.8635H24.469V29H21ZM27.2769 29V27.8189H24.9605V26.7493L26.6379 21.0669H27.8703L26.1244 26.7493H27.2769V24.4875H28.4409V26.7493H29V27.8189H28.4409V29H27.2769Z">
                                                            </path>
                                                        </svg>
                                                        <span className="bt157">FIFA</span>
                                                        <div className="bt158"><span className="bt159">47</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/tennis-5">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-tennis" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M21.8897 15.3026L23.9308 13.2615L21.8897 11.2204L19.8485 13.2615L21.8897 15.3026ZM22.5192 15.9321L23.9299 17.3429C24.6067 16.573 25.0965 15.6738 25.4018 14.7325L24.5603 13.891L22.5192 15.9321ZM25.7285 11.4638C25.5929 10.3641 25.1999 9.34598 24.5537 8.5563L22.5192 10.5909L24.5603 12.632L25.7285 11.4638ZM25.7747 12.6765L25.1898 13.2615L25.6555 13.7273C25.7196 13.3772 25.7593 13.0255 25.7747 12.6765ZM21.2602 15.9321L19.2191 13.891L17.1779 15.9321L19.2191 17.9732L21.2602 15.9321ZM21.8897 16.5616L19.8485 18.6027L20.7138 19.468C21.641 19.1545 22.5294 18.6564 23.3011 17.973L21.8897 16.5616ZM17.3862 19.8062L18.5896 18.6027L16.5485 16.5616L14.5127 18.5973C15.3081 19.2573 16.3093 19.6607 17.3862 19.8062ZM18.5889 19.8624C18.9638 19.848 19.342 19.8044 19.7184 19.7315L19.2191 19.2322L18.5889 19.8624ZM17.1779 10.5909L19.2191 12.632L21.2602 10.5909L19.2191 8.54975L17.1779 10.5909ZM16.5485 9.96142L18.5896 7.92028L17.7481 7.07878C16.8068 7.38406 15.9076 7.87383 15.1377 8.55063L16.5485 9.96142ZM21.0168 6.75205L19.8485 7.92028L21.8897 9.96142L23.9243 7.92683C23.1346 7.28069 22.1165 6.88768 21.0168 6.75205ZM19.804 6.70585C19.4551 6.72125 19.1034 6.76093 18.7533 6.82503L19.2191 7.29081L19.804 6.70585ZM16.5485 11.2204L14.5073 13.2615L16.5485 15.3026L18.5896 13.2615L16.5485 11.2204ZM15.919 10.5909L14.5076 9.17949C13.8242 9.95113 13.3261 10.8396 13.0126 11.7668L13.8779 12.632L15.919 10.5909ZM12.6744 15.0944C12.8199 16.1713 13.2233 17.1724 13.8833 17.9678L15.919 15.9321L13.8779 13.891L12.6744 15.0944ZM12.6182 13.8917L13.2484 13.2615L12.7491 12.7622C12.6762 13.1386 12.6326 13.5168 12.6182 13.8917ZM11.5416 17.5497C10.3354 20.8379 9.3621 22.9333 8.57894 23.8951L8.51812 23.9625L6.62971 25.8509L8.55126 23.931C9.06029 23.4717 9.9673 22.9723 11.2494 22.399C11.8005 22.1526 12.414 21.8964 13.0795 21.6328C13.6732 21.3977 14.2911 21.1633 14.9188 20.9334C14.1808 20.5952 13.5046 20.1364 12.9244 19.5562C12.341 18.9728 11.8804 18.2923 11.5416 17.5497ZM10.8332 14.2046C10.824 11.8619 11.7368 9.41336 13.5539 7.59628C16.8991 4.25104 22.5875 4.04055 25.5138 6.96681C28.44 9.89307 28.2295 15.5815 24.8843 18.9267C23.0672 20.7438 20.6187 21.6565 18.276 21.6474C18.2631 21.6523 18.2499 21.6569 18.2366 21.6613C18.1679 21.6837 18.037 21.7271 17.8529 21.7891C17.5449 21.8928 17.2014 22.0105 16.8313 22.14C15.7748 22.5096 14.7186 22.8986 13.7351 23.2881C13.0921 23.5428 12.5018 23.7893 11.9762 24.0244C10.8594 24.5237 10.0709 24.9579 9.77705 25.2214L7.25918 27.7393C6.91153 28.0869 6.34789 28.0869 6.00024 27.7393L4.74131 26.4803C4.39366 26.1327 4.39366 25.569 4.74131 25.2214L7.22486 22.7378C8.02223 21.7288 9.2488 18.8563 10.8228 14.2335C10.8261 14.2238 10.8295 14.2141 10.8332 14.2046ZM6.45596 9.2418C6.61841 8.5513 6.9692 7.91364 7.4847 7.39814C7.97349 6.90935 8.57222 6.56847 9.22226 6.39597C8.98426 5.6992 8.41028 5.15812 7.69353 4.96595C7.51693 5.59635 7.1812 6.1765 6.70531 6.65238C6.21375 7.14394 5.61098 7.48593 4.95661 7.65749C5.14523 8.41158 5.71856 9.01323 6.45596 9.2418ZM7.35253 9.32876C8.41333 9.21656 9.2518 8.35908 9.33451 7.28974C8.87953 7.43057 8.46138 7.6804 8.11417 8.02761C7.74637 8.3954 7.48795 8.84276 7.35253 9.32876ZM4.92189 6.73937C5.35117 6.59531 5.7456 6.35316 6.07584 6.02292C6.39399 5.70477 6.63039 5.32707 6.77609 4.91595C5.83118 5.06064 5.08195 5.79961 4.92189 6.73937ZM7.11571 10.2314C5.39495 10.2314 4 8.83647 4 7.11571C4 5.39495 5.39495 4 7.11571 4C8.83647 4 10.2314 5.39495 10.2314 7.11571C10.2314 8.83647 8.83647 10.2314 7.11571 10.2314Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Tennis</span>
                                                        <div className="bt158"><span className="bt159">107</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/basketball-2">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-basketball" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M5.81747 14.5375C5.74947 15.0152 5.71429 15.5035 5.71429 16C5.71429 18.7226 6.77212 21.1982 8.4992 23.0381C9.76418 18.2491 12.8191 14.1388 16.947 11.4075C16.505 10.963 16.0422 10.5416 15.5601 10.145C14.5449 10.7299 13.4025 11.1111 12.1918 11.2384C11.9035 11.2687 11.6127 11.2845 11.3201 11.2856C9.08279 11.5238 7.08484 12.7245 5.81747 14.5375ZM6.24269 12.7368C7.79362 11.2657 9.87392 10.3931 12.1107 10.385C13.0758 10.2825 13.9927 10.0004 14.8243 9.57045C13.5309 8.61229 12.1135 7.82664 10.5963 7.2464C8.56994 8.49996 7.01132 10.4375 6.24269 12.7368ZM18.2824 5.96841C17.5483 5.80209 16.7844 5.71429 16 5.71429C14.4131 5.71429 12.9102 6.07364 11.5681 6.71542C13.0198 7.33693 14.3771 8.14001 15.6196 9.0968C16.7609 8.3209 17.6886 7.24394 18.2824 5.96841ZM19.1205 6.19615C18.5 7.5914 17.5231 8.78011 16.3133 9.65697C16.791 10.0612 17.2498 10.489 17.6886 10.9387C19.3646 9.92716 21.2009 9.13632 23.1533 8.60907C22.0266 7.51835 20.6512 6.68295 19.1205 6.19615ZM15.5043 26.274C16.0451 25.2469 16.4286 22.9117 16.4286 20.2857V19.3441C16.454 17.146 17.4524 15.1817 19.0134 13.8621C18.559 13.223 18.0694 12.614 17.5471 12.0389C13.3913 14.744 10.352 18.8957 9.21044 23.7266C10.9062 25.2179 13.0969 26.1598 15.5043 26.274ZM16.442 26.2764C18.8459 26.1748 21.0363 25.248 22.7374 23.7722C22.368 20.3933 21.2296 17.2483 19.4979 14.5758C18.1425 15.7544 17.2857 17.4914 17.2857 19.4286V20.2857C17.2857 22.7513 16.9665 24.9733 16.442 26.2764ZM25.9545 13.4009C25.2463 13.1376 24.4906 13 23.7143 13C22.4098 13 21.196 13.3886 20.1824 14.0562C21.8937 16.6798 23.0533 19.7407 23.509 23.0294C25.2312 21.1904 26.2857 18.7183 26.2857 16C26.2857 15.1021 26.1707 14.2311 25.9545 13.4009ZM25.638 12.3996C25.214 11.2651 24.5954 10.2255 23.8228 9.32143C21.8423 9.80926 19.981 10.5778 18.2871 11.5796C18.7881 12.1401 19.2596 12.7305 19.6995 13.3479C20.8506 12.5863 22.2307 12.1429 23.7143 12.1429C24.3724 12.1429 25.018 12.2303 25.638 12.3996ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Basketball</span>
                                                        <div className="bt158"><span className="bt159">152</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/ice-hockey-4">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-icehockey" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M20.4325 12.3083L23.0427 13.8744L23.8906 12.2503L21.2841 10.6864L20.4325 12.3083ZM20.0245 13.0855L16.2598 20.2553C15.877 20.9843 15.027 21.3345 14.2418 21.0868L8.91739 19.4069C8.68698 19.3342 8.44699 19.2964 8.20538 19.2947C6.8673 19.2853 5.77496 20.3625 5.76558 21.7005L5.75277 23.5268C5.75272 23.5362 5.75272 23.5362 5.75272 23.5456C5.75374 24.8838 6.83933 25.9677 8.17744 25.9667L15.5154 25.961C16.2636 25.9605 16.9497 25.5444 17.296 24.8811L22.6364 14.6526L20.0245 13.0855ZM21.6922 9.90922L24.2969 11.4721L26.0634 8.0887C26.4638 7.32187 26.1886 6.37575 25.4395 5.94323C25.4148 5.92919 25.4148 5.92919 25.3897 5.91581C24.6967 5.55195 23.84 5.81875 23.4761 6.51172L21.6922 9.90922ZM6.81056 10.4124V12.1744C6.81056 13.4187 8.65447 14.4613 11.1922 14.4613C13.7304 14.4613 15.5741 13.4187 15.5741 12.1738V10.2665C14.6513 10.9983 13.0775 11.3941 11.1677 11.3941C9.22393 11.3941 7.70017 11.0687 6.81056 10.4124ZM6.81414 8.76685C6.81599 9.8361 8.43009 10.5177 11.1677 10.5177C13.6624 10.5177 15.3833 9.78719 15.5699 8.75879C15.4716 7.55988 13.6601 6.57411 11.1922 6.57411C8.71901 6.57411 6.90504 7.56432 6.81414 8.76685ZM11.1922 15.3377C8.23474 15.3377 5.9342 14.0369 5.9342 12.1744V8.86166C5.9342 6.9987 8.23457 5.69776 11.1922 5.69776C14.1501 5.69776 16.4505 6.99866 16.4505 8.86166V12.1738C16.4505 14.0368 14.1501 15.3377 11.1922 15.3377ZM21.9243 5.69691C22.7382 4.1469 24.6545 3.55014 26.2045 4.364C26.2606 4.39392 26.2606 4.39392 26.3158 4.42533C27.8783 5.3274 28.4521 7.30061 27.6171 8.89989L18.8497 25.6923C18.2015 26.9338 16.9173 27.7127 15.5167 27.7138L8.17878 27.7194C5.87267 27.7211 4.00176 25.8531 4 23.547C4.00001 23.5307 4.00001 23.5307 4.0001 23.5145L4.01291 21.6882C4.02908 19.3822 5.91161 17.5259 8.21767 17.542C8.63405 17.545 9.04766 17.6101 9.44476 17.7354L14.728 19.4023L21.9243 5.69691Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Ice Hockey</span>
                                                        <div className="bt158"><span className="bt159">205</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/ecricket-305">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-ecricket-b" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M10.933 18.8276L10.8967 18.8639L12.1361 20.1033L12.1724 20.067C12.9726 19.2668 14.1951 19.0684 15.2073 19.5745L15.3279 19.6348C15.1183 20.0443 15 20.5084 15 21V21.3989C14.8786 21.3591 14.7591 21.3101 14.6423 21.2517L14.4234 21.1423C14.086 20.9736 13.6785 21.0397 13.4118 21.3065L11.2797 23.4385C11.0898 23.6284 11.0235 23.9093 11.1084 24.1641C11.4033 25.0487 11.1731 26.024 10.5137 26.6834L9.96715 27.2299C8.94039 28.2567 7.27567 28.2567 6.24891 27.2299L3.77007 24.7511C2.74331 23.7243 2.74331 22.0596 3.77007 21.0328L4.31664 20.4863C4.97599 19.8269 5.95128 19.5967 6.8359 19.8916C7.09068 19.9765 7.37157 19.9102 7.56147 19.7203L9.69354 17.5882C9.96028 17.3215 10.0264 16.914 9.85771 16.5766L9.74826 16.3577C9.24216 15.3455 9.44054 14.123 10.2408 13.3227L18.0234 5.54015C20.0769 3.48662 23.4063 3.48662 25.4599 5.54015C27.5134 7.59368 27.5134 10.9231 25.4599 12.9766L20.4365 18H18H17.9577L24.2204 11.7372C25.5895 10.3682 25.5895 8.14859 24.2204 6.77956C22.8514 5.41054 20.6318 5.41054 19.2628 6.77956L11.4802 14.5622C11.2134 14.8289 11.1473 15.2364 11.316 15.5738L11.4255 15.7927C11.9316 16.8049 11.7332 18.0274 10.933 18.8276ZM10.277 19.4836L8.80088 20.9597C8.14153 21.6191 7.16624 21.8493 6.28162 21.5544C6.02684 21.4695 5.74595 21.5358 5.55605 21.7257L5.00949 22.2723C4.66723 22.6145 4.66723 23.1694 5.00949 23.5117L7.48832 25.9905C7.83058 26.3328 8.38548 26.3328 8.72774 25.9905L9.2743 25.4439C9.4642 25.254 9.53051 24.9732 9.44558 24.7184C9.15071 23.8338 9.38095 22.8585 10.0403 22.1991L11.5164 20.723L10.277 19.4836ZM6.47068 10.5069C4.7766 10.5069 3.40328 9.13361 3.40328 7.43954C3.40328 5.74546 4.7766 4.37214 6.47068 4.37214C8.16475 4.37214 9.53807 5.74546 9.53807 7.43954C9.53807 9.13361 8.16475 10.5069 6.47068 10.5069ZM6.47068 9.63053C7.68073 9.63053 8.66168 8.64959 8.66168 7.43954C8.66168 6.22948 7.68073 5.24854 6.47068 5.24854C5.26062 5.24854 4.27968 6.22948 4.27968 7.43954C4.27968 8.64959 5.26062 9.63053 6.47068 9.63053ZM16 21C16 19.8954 16.8954 19 18 19H26C27.1046 19 28 19.8954 28 21V29C28 30.1046 27.1046 31 26 31H18C16.8954 31 16 30.1046 16 29V21ZM18 29V27.9304L20.0996 24.0641C20.2062 23.8709 20.267 23.7038 20.2822 23.5627C20.2974 23.4141 20.305 23.2321 20.305 23.0167C20.305 22.9201 20.3012 22.8199 20.2936 22.7159C20.2936 22.6045 20.2746 22.5079 20.2366 22.4262C20.1985 22.3445 20.1415 22.2776 20.0654 22.2256C19.9893 22.1662 19.879 22.1365 19.7345 22.1365C19.5595 22.1365 19.4188 22.1848 19.3123 22.2813C19.2134 22.3779 19.1639 22.519 19.1639 22.7047V23.351H18V22.727C18 22.4893 18.0456 22.2665 18.1369 22.0585C18.2282 21.8505 18.3537 21.6685 18.5135 21.5125C18.6656 21.3565 18.8482 21.234 19.0612 21.1448C19.2742 21.0483 19.5025 21 19.7459 21C20.0502 21 20.3089 21.0557 20.5219 21.1671C20.7425 21.2711 20.9251 21.416 21.0696 21.6017C21.2065 21.7874 21.3054 21.9991 21.3663 22.2368C21.4347 22.4745 21.469 22.727 21.469 22.9944C21.469 23.1876 21.4652 23.351 21.4576 23.4847C21.45 23.611 21.4347 23.7335 21.4119 23.8524C21.3891 23.9712 21.3511 24.0901 21.2978 24.2089C21.2446 24.3278 21.1723 24.4726 21.081 24.6435L19.3693 27.8635H21.469V29H18ZM24.2769 29V27.8189H21.9605V26.7493L23.6379 21.0669H24.8703L23.1244 26.7493H24.2769V24.4875H25.4409V26.7493H26V27.8189H25.4409V29H24.2769Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">eCricket</span>
                                                        <div className="bt158"><span className="bt159">23</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/american-football-16">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-americanfootball" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M22 16V17.7143H26.7054L26.8734 17.7309C27.5163 17.8594 27.9835 18.404 27.9835 19.0662C27.9945 22.9079 28 25.028 28 25.4286C28 26.5434 27.0697 27.4433 26.0197 27.1005C25.4527 26.9154 24.2398 26.5012 23.2657 26.1493C22.567 25.897 21.9864 25.676 21.5562 25.4958C21.3001 25.3885 21.0966 25.2954 20.9427 25.2132C20.8393 25.1579 20.7528 25.1051 20.6753 25.0458C20.4365 24.8632 20.2857 24.6784 20.2857 24.2993V22H20.2148C19.8038 24.6745 17.6559 26.2857 14.2857 26.2857C11.8324 26.2857 9.84145 25.0024 8.36996 22.5364H7.00161C6.73261 22.5364 6.47922 22.4101 6.31725 22.1954C4.85621 20.258 4 17.628 4 15.1429C4 8.92833 8.92653 4 15.1429 4C21.4843 4 26.4776 8.54421 26.4776 14.6481C26.4776 15.3938 25.8708 16 25.1252 16H22ZM5.71429 15.1429C5.71429 17.1169 6.35564 19.2207 7.44204 20.8221H8.86857C9.18325 20.8221 9.47263 20.9946 9.6224 21.2713C10.8346 23.5112 12.3664 24.5714 14.2857 24.5714C17.1018 24.5714 18.5293 23.321 18.5716 21.1264C18.5806 20.6595 18.9616 20.2857 19.4286 20.2857H21.1429C21.6162 20.2857 22 20.6695 22 21.1429V23.8204C22.065 23.8494 22.1381 23.8809 22.2186 23.9147C22.6171 24.0816 23.1741 24.2936 23.8481 24.537C24.3911 24.7331 24.9845 24.9406 25.5821 25.1447C25.8404 25.2329 26.0932 25.3182 26.2857 25.3826C26.2854 24.9024 26.2802 22.9164 26.2703 19.4286H21.1429C20.6695 19.4286 20.2857 19.0448 20.2857 18.5714V15.1429C20.2857 14.6695 20.6695 14.2857 21.1429 14.2857H24.7562C24.5636 9.34993 20.4428 5.71429 15.1429 5.71429C9.87344 5.71429 5.71429 9.87497 5.71429 15.1429ZM14.2857 17.2857C15.4775 17.2857 16.4286 18.2368 16.4286 19.4286C16.4286 20.6204 15.4775 21.5714 14.2857 21.5714C13.0939 21.5714 12.1429 20.6204 12.1429 19.4286C12.1429 18.2368 13.0939 17.2857 14.2857 17.2857ZM14.2857 18.1429C13.5673 18.1429 13 18.7102 13 19.4286C13 20.147 13.5673 20.7143 14.2857 20.7143C15.0041 20.7143 15.5714 20.147 15.5714 19.4286C15.5714 18.7102 15.0041 18.1429 14.2857 18.1429Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">American Football</span>
                                                        <div className="bt158"><span className="bt159">21</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/cricket-21">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-cricket" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M11.8967 18.8639L13.1361 20.1033L13.1724 20.067C13.9726 19.2668 15.1951 19.0684 16.2073 19.5745L16.4262 19.684C16.7636 19.8527 17.1711 19.7866 17.4378 19.5198L25.2204 11.7372C26.5895 10.3682 26.5895 8.14859 25.2204 6.77956C23.8514 5.41054 21.6318 5.41054 20.2628 6.77956L12.4802 14.5622C12.2134 14.8289 12.1473 15.2364 12.316 15.5738L12.4255 15.7927C12.9316 16.8049 12.7332 18.0274 11.933 18.8276L11.8967 18.8639ZM11.277 19.4836L9.80088 20.9597C9.14153 21.6191 8.16624 21.8493 7.28162 21.5544C7.02684 21.4695 6.74595 21.5358 6.55605 21.7257L6.00949 22.2723C5.66724 22.6145 5.66724 23.1694 6.00949 23.5117L8.48832 25.9905C8.83058 26.3328 9.38548 26.3328 9.72774 25.9905L10.2743 25.4439C10.4642 25.254 10.5305 24.9732 10.4456 24.7184C10.1507 23.8338 10.3809 22.8585 11.0403 22.1991L12.5164 20.723L11.277 19.4836ZM7.47068 10.5069C5.7766 10.5069 4.40328 9.13361 4.40328 7.43954C4.40328 5.74546 5.7766 4.37214 7.47068 4.37214C9.16475 4.37214 10.5381 5.74546 10.5381 7.43954C10.5381 9.13361 9.16475 10.5069 7.47068 10.5069ZM7.47068 9.63053C8.68073 9.63053 9.66168 8.64959 9.66168 7.43954C9.66168 6.22948 8.68073 5.24854 7.47068 5.24854C6.26062 5.24854 5.27968 6.22948 5.27968 7.43954C5.27968 8.64959 6.26062 9.63053 7.47068 9.63053ZM26.4599 5.54015C28.5134 7.59368 28.5134 10.9231 26.4599 12.9766L18.6773 20.7592C17.877 21.5595 16.6545 21.7578 15.6423 21.2517L15.4234 21.1423C15.086 20.9736 14.6785 21.0397 14.4118 21.3065L12.2797 23.4385C12.0898 23.6284 12.0235 23.9093 12.1084 24.1641C12.4033 25.0487 12.1731 26.024 11.5137 26.6834L10.9672 27.2299C9.94039 28.2567 8.27567 28.2567 7.24891 27.2299L4.77007 24.7511C3.74331 23.7243 3.74331 22.0596 4.77007 21.0328L5.31664 20.4863C5.97599 19.8269 6.95128 19.5967 7.8359 19.8916C8.09068 19.9765 8.37157 19.9102 8.56147 19.7203L10.6935 17.5882C10.9603 17.3215 11.0264 16.914 10.8577 16.5766L10.7483 16.3577C10.2422 15.3455 10.4405 14.123 11.2408 13.3227L19.0234 5.54015C21.0769 3.48662 24.4063 3.48662 26.4599 5.54015Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Cricket</span>
                                                        <div className="bt158"><span className="bt159">33</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/sumo-99">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-sumo" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M15.6404 2.40894C15.3151 2.40894 15.0764 2.71463 15.1553 3.0302L15.4053 4.0302C15.461 4.25279 15.661 4.40894 15.8904 4.40894H16.1096C16.3391 4.40894 16.539 4.25279 16.5947 4.0302L16.8447 3.0302C16.9236 2.71463 16.6849 2.40894 16.3596 2.40894H15.6404ZM16 5.40384C17.3807 5.40384 18.5 6.52313 18.5 7.90384C18.5 9.28455 17.3807 10.4038 16 10.4038C14.6193 10.4038 13.5 9.28455 13.5 7.90384C13.5 6.52313 14.6193 5.40384 16 5.40384ZM12.8195 10.322H13.6792C14.2584 11.0158 15.1001 11.4524 16.0369 11.4524C16.9736 11.4524 17.8153 11.0158 18.3945 10.322H19.2543C19.3153 10.322 19.3751 10.3275 19.4331 10.3379C20.2577 10.4341 21.4007 10.7744 22.4724 11.6378C23.5938 12.5412 24.55 13.9483 25.0095 16.0203C25.1888 16.829 24.6786 17.6301 23.8698 17.8094C23.061 17.9888 22.26 17.4786 22.0806 16.6698C21.7569 15.2102 21.1412 14.4178 20.5903 13.974C20.4786 13.884 20.3659 13.8055 20.2543 13.7371V18.7898C21.9247 19.396 24.5715 21.572 24.5715 25.8302V28.0911C24.5715 28.9195 23.8999 29.5911 23.0715 29.5911C22.243 29.5911 21.5715 28.9195 21.5715 28.0911V25.8302C21.5715 23.0429 19.9285 21.8843 19.2744 21.6261L19.2543 21.6263H12.9557C12.3013 21.8849 10.6592 23.0437 10.6592 25.8302V28.0911C10.6592 28.9195 9.98758 29.5911 9.15916 29.5911C8.33073 29.5911 7.65916 28.9195 7.65916 28.0911L7.65916 25.8302C7.65916 21.703 10.1456 19.5319 11.8195 18.8502V13.6933C11.6838 13.7714 11.5461 13.8641 11.4097 13.974C10.8588 14.4178 10.2431 15.2102 9.91939 16.6698C9.74003 17.4786 8.93898 17.9888 8.13021 17.8094C7.32143 17.6301 6.81119 16.829 6.99055 16.0203C7.45005 13.9483 8.4062 12.5412 9.52764 11.6378C10.6264 10.7526 11.8002 10.4172 12.6289 10.3311C12.6777 10.326 12.7262 10.3234 12.7742 10.323C12.7892 10.3223 12.8043 10.322 12.8195 10.322Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Sumo</span>
                                                        <div className="bt158"><span className="bt159">9</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/baseball-3">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-baseball" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M12.3364 17.857C10.9592 19.4673 9.3453 21.3545 7.67699 23.3055C7.44693 23.6676 6.98367 23.8221 6.58243 23.6506C6.20094 23.4875 6.02748 23.5082 5.87719 23.6585C5.68069 23.855 5.72794 24.1351 6.14789 24.555L7.44304 25.8502C7.86531 26.2725 8.14105 26.3194 8.33958 26.1209C8.49913 25.9613 8.52241 25.7945 8.37381 25.4376C8.21384 25.0533 8.35098 24.6154 8.68003 24.379L8.67821 24.3769L14.1343 19.6549L12.3364 17.857ZM12.904 17.1934L14.7943 19.0836L16.3435 17.7429C18.4727 15.9001 18.4727 15.9001 18.8516 15.5753L25.9709 8.42998C26.2808 8.11891 26.2706 7.58676 25.9257 7.24185L24.6945 6.01066C24.3496 5.66575 23.8184 5.65653 23.5085 5.96759L16.4162 13.0859C16.4215 13.0804 15.0002 14.7423 12.904 17.1934ZM10.1863 25.3748C10.3188 26.1154 10.1193 26.8035 9.57077 27.3521C8.56458 28.3583 7.21854 28.1291 6.19135 27.1019L4.8962 25.8067C3.87092 24.7814 3.64296 23.4303 4.646 22.4273C5.19722 21.8761 5.8933 21.6862 6.64648 21.8318C13.5021 13.8145 15.1404 11.8994 15.185 11.8547L22.2773 4.7364C23.2762 3.73386 24.9085 3.7622 25.9235 4.77722L27.1547 6.00842C28.1697 7.02344 28.201 8.65862 27.2021 9.66117C22.8514 14.0278 22.8514 14.0278 20.0358 16.8503L10.1863 25.3748ZM9.09553 14.0688C7.41269 14.0688 6.04848 12.7046 6.04848 11.0217C6.04848 9.33891 7.41269 7.9747 9.09553 7.9747C10.7784 7.9747 12.1426 9.33891 12.1426 11.0217C12.1426 12.7046 10.7784 14.0688 9.09553 14.0688ZM9.09553 13.1982C10.2976 13.1982 11.272 12.2238 11.272 11.0217C11.272 9.81972 10.2976 8.84529 9.09553 8.84529C7.8935 8.84529 6.91907 9.81972 6.91907 11.0217C6.91907 12.2238 7.8935 13.1982 9.09553 13.1982Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Baseball</span>
                                                        <div className="bt158"><span className="bt159">2</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/nba-2k-302">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-nba2k-b" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M25.5934 12.0105H27.9392C27.7068 11.3351 27.4744 10.6887 27.1911 10.0569C26.8735 9.41651 26.5662 8.76544 26.2598 8.11622C26.125 7.83042 25.9902 7.54495 25.8548 7.26084C25.706 6.94855 25.5571 6.63808 25.4082 6.32761C25.2593 6.01714 25.1104 5.70667 24.9616 5.39439C24.7509 4.95864 24.5403 4.5229 24.337 4.08715C24.3079 4.02905 24.2716 4 24.199 4H22.5141C22.456 4 22.427 4.01452 22.3979 4.07262C22.2091 4.47932 22.0203 4.87876 21.8314 5.27819C21.6789 5.59774 21.5282 5.91729 21.3775 6.23683C21.2268 6.55638 21.0762 6.87593 20.9236 7.19547L20.0739 8.98204C20.0594 9.01108 20.0449 9.03289 20.0158 9.07645C19.9142 8.76416 19.7689 8.50271 19.5583 8.27758C19.355 8.05971 19.1008 7.89993 18.8321 7.76921C18.8393 7.75468 18.8393 7.74742 18.8393 7.74742C18.8538 7.7329 18.8611 7.72563 18.8756 7.71837C19.1298 7.54407 19.3404 7.3262 19.4929 7.05023C19.689 6.69437 19.7326 6.30946 19.6963 5.91002C19.6745 5.6631 19.6091 5.4307 19.4929 5.20557C19.2533 4.74077 18.8538 4.4648 18.3818 4.28323C17.8589 4.07989 17.3069 4.00726 16.7477 4.00726H13.1746C13.1165 4.00726 13.0947 4.03631 13.0947 4.08715V11.858C13.0947 11.9887 13.1093 12.0032 13.24 12.0032C13.6641 12.0008 14.0891 11.9992 14.5143 11.9976C15.3633 11.9943 16.2133 11.9911 17.06 11.9814C17.5393 11.9814 18.0114 11.887 18.4689 11.72C18.529 11.7 18.5891 11.6755 18.654 11.6491C18.7068 11.6276 18.7629 11.6048 18.8248 11.582C18.8008 11.63 18.7834 11.6691 18.7678 11.7044C18.755 11.7331 18.7434 11.7592 18.7304 11.7853C18.6069 12.0105 18.6723 12.0105 18.8684 12.0105H21.0398C21.0505 12.0105 21.0616 12.0109 21.073 12.0114C21.1079 12.0127 21.1449 12.0142 21.1778 12.0032C21.2141 11.9959 21.2577 11.9669 21.2722 11.9379C21.4828 11.4585 21.6935 10.9719 21.8968 10.4926C21.9186 10.4418 21.9476 10.4273 21.9985 10.4273H24.6493C24.7146 10.4273 24.7364 10.449 24.7582 10.4999C24.8561 10.7283 24.9576 10.955 25.0592 11.1816L25.0596 11.1826C25.1613 11.4095 25.263 11.6365 25.361 11.8652C25.4046 11.9814 25.4772 12.0105 25.5934 12.0105ZM16.5589 10.0714H16.1522C15.9489 10.0714 15.7455 10.0714 15.5422 10.0787C15.4768 10.0787 15.455 10.0569 15.455 9.99152V9.00382C15.4478 8.95299 15.4624 8.92394 15.5277 8.92394C15.9489 8.92394 16.3701 8.92394 16.7913 8.9312C17.0092 8.93846 17.2198 8.97477 17.4159 9.06919C17.8226 9.25801 17.7427 9.71554 17.4885 9.88984C17.3287 9.99152 17.1544 10.0424 16.9728 10.0569C16.8348 10.0641 16.6969 10.0714 16.5589 10.0714ZM16.5081 6.98486H16.0433C15.869 6.98486 15.7019 6.98486 15.5349 6.9776C15.4768 6.98486 15.4623 6.96308 15.4623 6.90498V6.01896C15.4623 5.96086 15.4768 5.93907 15.5422 5.93907C15.6239 5.93907 15.7056 5.93862 15.7873 5.93816C16.0324 5.9368 16.2775 5.93544 16.5226 5.94633C16.6969 5.96086 16.8785 5.99717 17.0455 6.05527C17.2198 6.11337 17.3215 6.25136 17.3215 6.44744C17.3215 6.63627 17.2271 6.78152 17.06 6.86866C16.893 6.95581 16.6969 6.9776 16.5081 6.98486ZM23.2985 7.17369C23.4945 7.63122 23.6761 8.05244 23.8649 8.48819H22.732C22.9208 8.04518 23.1024 7.62396 23.2985 7.17369ZM2.01739 24.8889C2.02128 24.9136 2.02516 24.9383 2.02827 24.963C5.63632 24.963 9.24437 24.963 12.84 25C12.8473 24.9781 12.8558 24.9562 12.8643 24.934C12.8848 24.8811 12.9059 24.8263 12.9146 24.7654C13.0141 24.2964 13.1168 23.8301 13.2194 23.3642C13.3221 22.8981 13.4247 22.4321 13.5243 21.963C13.574 21.7407 13.574 21.7407 13.3501 21.7407H9.03286C9.00798 21.7407 8.97993 21.7376 8.95193 21.7346C8.92396 21.7315 8.89599 21.7284 8.87112 21.7284C8.85868 21.716 8.85868 21.7037 8.85868 21.6914C8.88356 21.679 8.90534 21.6667 8.92711 21.6543C8.94888 21.642 8.97065 21.6296 8.99554 21.6173L11.0111 20.6173C11.2721 20.4857 11.5353 20.3538 11.7986 20.2217L11.8021 20.22L11.8041 20.219C12.3294 19.9556 12.8584 19.6904 13.3874 19.4198C13.9224 19.1481 14.2583 18.7407 14.3827 18.1481C14.4711 17.6939 14.5698 17.2448 14.6688 16.7942C14.7232 16.5467 14.7777 16.2988 14.8306 16.0494C14.8928 15.7531 14.955 15.4568 14.9924 15.1605C15.0546 14.6049 14.7311 14.1358 14.2334 14.0247C14.109 14 13.9846 14 13.8602 14H5.56167C5.43726 14 5.31284 14 5.20087 14.0247C4.52902 14.1728 4.11845 14.6173 3.93183 15.2469C3.76978 15.7829 3.64028 16.3255 3.51037 16.8698L3.51036 16.8698L3.51036 16.8698L3.51036 16.8698L3.51036 16.8698L3.51036 16.8698L3.51035 16.8698L3.51035 16.8698L3.51035 16.8699C3.46075 17.0777 3.41108 17.2858 3.35952 17.4938C3.32219 17.642 3.33464 17.6667 3.49638 17.6667H6.69385C6.80583 17.6667 6.85559 17.6296 6.89292 17.5309C6.9439 17.3935 6.99915 17.2605 7.05366 17.1291C7.09228 17.0361 7.13052 16.944 7.16663 16.8519C7.20396 16.7407 7.25372 16.7037 7.37814 16.7037H11.235C11.2288 16.7222 11.2288 16.7377 11.2288 16.7515C11.2288 16.7654 11.2288 16.7778 11.2226 16.7901C11.1355 17.0617 11.0484 17.3333 10.9489 17.6049C10.9378 17.6487 10.878 17.6925 10.8298 17.7276L10.812 17.7407C10.6627 17.8272 10.5101 17.9106 10.3576 17.994L10.3576 17.994L10.3575 17.994L10.3575 17.9941L10.3574 17.9941L10.3574 17.9941L10.3574 17.9941L10.3573 17.9942C10.2051 18.0774 10.0529 18.1606 9.90377 18.2469C9.31904 18.5679 8.73692 18.8922 8.1553 19.2163L8.15525 19.2163C7.57377 19.5403 6.99229 19.8643 6.4077 20.1852C5.1511 20.8765 3.90695 21.5679 2.65035 22.2716C2.58814 22.3086 2.52593 22.3704 2.51349 22.4321C2.33931 23.1728 2.16513 23.9259 2.00339 24.6667C1.99406 24.7407 2.00572 24.8148 2.01739 24.8889ZM10.1892 8.5101C10.1819 8.5101 10.1746 8.5101 10.1601 8.52463C10.1528 8.51373 10.1438 8.50284 10.1347 8.49194C10.1256 8.48105 10.1165 8.47016 10.1093 8.45926C10.0875 8.42295 10.0639 8.38846 10.0403 8.35397L10.0403 8.35395C10.0167 8.31946 9.99306 8.28496 9.97128 8.24865C9.36877 7.35579 8.77353 6.47018 8.17828 5.58457L8.17745 5.58334C8.01042 5.33278 7.84338 5.08404 7.67635 4.8353C7.50931 4.58657 7.34227 4.33783 7.17524 4.08727C7.13893 4.03644 7.10261 4.01465 7.03725 4.01465H4.37193C4.30657 4.01465 4.27389 4.01465 4.25755 4.03099C4.24121 4.04733 4.24121 4.08001 4.24121 4.14537V11.7927C4.24121 11.898 4.24121 11.9507 4.26754 11.977C4.29386 12.0033 4.34651 12.0033 4.45181 12.0033H6.46352C6.59424 12.0033 6.60877 11.9961 6.60877 11.8581V7.3699C6.65234 7.38442 6.66687 7.39895 6.67413 7.41347L6.93786 7.80681L6.93787 7.80682L6.93787 7.80684L6.93788 7.80685L6.93789 7.80686L6.9379 7.80687L6.93791 7.80689C7.20332 8.20295 7.467 8.59644 7.73445 8.98942C8.39533 9.96259 9.04895 10.9358 9.70257 11.9089C9.74614 11.9743 9.78972 12.0033 9.8696 12.0033H12.4332C12.564 12.0033 12.564 11.9961 12.564 11.8653V4.13085C12.564 4.02191 12.564 4.01465 12.4478 4.01465H10.3199C10.2533 4.01465 10.2206 4.01465 10.2046 4.03098C10.1892 4.0467 10.1892 4.07755 10.1892 4.13811V8.5101ZM14.0166 24.9877C14.0166 24.9577 14.0123 24.9256 14.0081 24.894C14.0019 24.8477 13.9959 24.8019 14.0037 24.7653C14.3939 23.0143 14.7841 21.2631 15.1743 19.5244C15.5255 17.983 15.8767 16.4416 16.2149 14.9002C16.2334 14.8127 16.2535 14.7267 16.2734 14.6412C16.3098 14.4858 16.3458 14.3318 16.371 14.1726C16.397 14.0247 16.4881 14 16.6181 14H20.2083C20.372 14 20.4533 14 20.4837 14.0393C20.5137 14.0781 20.4942 14.1552 20.4554 14.3083C20.3253 14.8201 20.1951 15.3356 20.065 15.8504L20.065 15.8505L20.065 15.8505L20.065 15.8505L20.065 15.8506L20.065 15.8506C19.935 16.3652 19.805 16.8798 19.675 17.3913C19.662 17.4529 19.6489 17.5146 19.6359 17.6132C19.6736 17.5835 19.7052 17.5624 19.7322 17.5443C19.7611 17.5249 19.7848 17.5091 19.805 17.4899L23.3301 14.074C23.3822 14.0247 23.4602 14 23.5383 14H27.8438C27.8959 14 27.9479 14.0247 27.9999 14.0493C27.9923 14.0637 27.9859 14.0781 27.9795 14.0922C27.9641 14.1264 27.9495 14.1588 27.9219 14.185C27.5773 14.524 27.2324 14.8664 26.8878 15.2085C26.5431 15.5507 26.1984 15.8929 25.8536 16.2321C25.5245 16.5562 25.195 16.8821 24.8655 17.2081C24.2613 17.8056 23.6555 18.4047 23.0453 19H21C19.3431 19 18 20.3431 18 22V24.9986C16.6755 24.9877 15.3401 24.9877 14.0166 24.9877ZM19 22C19 20.8954 19.8954 20 21 20H29C30.1046 20 31 20.8954 31 22V30C31 31.1046 30.1046 32 29 32H21C19.8954 32 19 31.1046 19 30V22ZM21 30V28.9304L23.0996 25.0641C23.2062 24.8709 23.267 24.7038 23.2822 24.5627C23.2974 24.4141 23.305 24.2321 23.305 24.0167C23.305 23.9201 23.3012 23.8199 23.2936 23.7159C23.2936 23.6045 23.2746 23.5079 23.2366 23.4262C23.1985 23.3445 23.1415 23.2776 23.0654 23.2256C22.9893 23.1662 22.879 23.1365 22.7345 23.1365C22.5595 23.1365 22.4188 23.1848 22.3123 23.2813C22.2134 23.3779 22.1639 23.519 22.1639 23.7047V24.351H21V23.727C21 23.4893 21.0456 23.2665 21.1369 23.0585C21.2282 22.8505 21.3537 22.6685 21.5135 22.5125C21.6656 22.3565 21.8482 22.234 22.0612 22.1448C22.2742 22.0483 22.5025 22 22.7459 22C23.0502 22 23.3089 22.0557 23.5219 22.1671C23.7425 22.2711 23.9251 22.416 24.0696 22.6017C24.2065 22.7874 24.3054 22.9991 24.3663 23.2368C24.4347 23.4745 24.469 23.727 24.469 23.9944C24.469 24.1876 24.4652 24.351 24.4576 24.4847C24.45 24.611 24.4347 24.7335 24.4119 24.8524C24.3891 24.9712 24.3511 25.0901 24.2978 25.2089C24.2446 25.3278 24.1723 25.4726 24.081 25.6435L22.3693 28.8635H24.469V30H21ZM27.2769 30V28.8189H24.9605V27.7493L26.6379 22.0669H27.8703L26.1244 27.7493H27.2769V25.4875H28.4409V27.7493H29V28.8189H28.4409V30H27.2769Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">NBA 2K</span>
                                                        <div className="bt158"><span className="bt159">12</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/volleyball-23">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-volleyball" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M10.509 7.30099C9.48574 9.0238 8.87757 10.9635 8.74288 12.9927C8.87583 12.9976 9.00917 13 9.14286 13C10.2172 13 11.2604 12.8405 12.2474 12.5418C12.5911 10.0508 13.7417 7.58916 15.4152 5.73063C13.6177 5.83138 11.9434 6.3937 10.509 7.30099ZM8.93089 8.52845C7.74843 9.6476 6.83148 11.0444 6.28441 12.6146C6.80828 12.7593 7.344 12.8639 7.88818 12.9274C7.99067 11.3976 8.34562 9.9151 8.93089 8.52845ZM16.6072 5.73191C14.8575 7.40464 13.6033 9.78053 13.1665 12.2172C15.8619 11.1244 18.0389 8.9613 19.1215 6.19647C18.3214 5.94195 17.4789 5.78266 16.6072 5.73191ZM5.89213 17.9145C6.10294 19.0343 6.49523 20.0901 7.0373 21.0501C11.2593 21.8766 15.0461 21.4325 18.8389 18.4268C18.6652 17.4347 18.3539 16.4813 17.9195 15.5905C13.857 17.8101 11.0395 18.4531 5.89213 17.9145ZM5.76611 17.039C10.8721 17.6001 13.5417 17.0068 17.5131 14.8358C16.9128 13.821 16.144 12.9046 15.2311 12.127C13.4502 13.2293 11.3579 13.8571 9.14286 13.8571C8.0813 13.8571 7.03889 13.714 6.03658 13.4354C5.82617 14.2552 5.71429 15.1145 5.71429 16C5.71429 16.3507 5.73184 16.6973 5.76611 17.039ZM7.66884 22.0335C8.49137 23.1673 9.53968 24.1266 10.7478 24.8455C11.3455 24.948 11.9549 25 12.5714 25C14.7612 25 16.8513 24.3421 18.6179 23.1321C18.8693 22.2168 19 21.2613 19 20.2857C19 19.9922 18.9881 19.7007 18.9647 19.4117C15.3124 22.1422 11.653 22.6727 7.66884 22.0335ZM13.0235 25.8485C13.9657 26.1328 14.965 26.2857 16 26.2857C16.4098 26.2857 16.814 26.2617 17.2113 26.2151C17.5912 25.6446 17.9145 25.0407 18.1773 24.411C16.6101 25.2807 14.8535 25.778 13.0235 25.8485L13.0235 25.8485ZM18.6241 8.92403C17.8907 9.97002 16.9911 10.8839 15.9673 11.6314C18.4172 13.8061 19.8571 16.9278 19.8571 20.2857C19.8571 22.3303 19.325 24.2944 18.3397 26.0184C20.0239 25.6266 21.5493 24.8211 22.803 23.7148C23.1223 22.4791 23.2857 21.2005 23.2857 19.9C23.2857 15.7132 21.5832 11.7961 18.6241 8.92403ZM19.0979 8.19068C22.2969 11.2322 24.1429 15.4204 24.1429 19.9C24.1429 20.798 24.069 21.6864 23.9236 22.5589C25.3989 20.7785 26.2857 18.4928 26.2857 16C26.2857 11.71 23.6594 8.03347 19.9268 6.49047C19.6956 7.08413 19.4177 7.65219 19.0979 8.19068ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Volleyball</span>
                                                        <div className="bt158"><span className="bt159">67</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/fifa-volta-309">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-fifa-volta" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M1 10.8059V2.01624H2.57217V7.21418L5.87303 2.01624H7.72215L2.82319 9.76117C2.14066 9.92438 1.53368 10.2572 1.054 10.7492C1.03577 10.7679 1.01777 10.7868 1 10.8059ZM9.705 9.65852H10.7463L15.5812 2.01624H9.67221L4.85212 9.63796C5.60048 9.63483 6.34783 9.63483 7.09274 9.63483H7.50923L7.51923 9.64483H8.575C8.62588 9.64483 8.66854 9.64799 8.69708 9.65062C8.71186 9.65199 8.72658 9.6536 8.73733 9.65483H9.705V9.65852ZM7.67178 8.10382H9.88092L12.7485 3.57094H10.5392L7.67178 8.10382ZM19.4271 2.01624H17.5782L12.7433 9.65852H17.7471L18.7305 8.10382H15.5759L19.4271 2.01624ZM31 9.65852H29.4331V4.92697L26.4402 9.65852H24.5911L29.4242 2.01624H31V9.65852ZM19.4445 9.65852H21.2935L25.1448 3.57094H26.8231L27.8049 2.01624H21.5999L20.6161 3.57094H23.2955L19.4445 9.65852ZM20.045 10.6348H16.945C16.755 10.6348 16.565 10.6448 16.385 10.6748C15.005 10.9248 14.105 11.9948 14.105 13.4048V23.1948H17.165V18.1948H19.995C20.1682 18.1332 20.3488 18.0871 20.535 18.0582V15.6548H17.145V14.0148C17.145 13.4248 17.405 13.1648 17.995 13.1648H21.795V10.6348H21.595H20.045ZM30.985 18.7729V13.3748L30.995 13.3648C30.995 11.8748 29.905 10.7348 28.415 10.6748C27.445 10.6348 26.475 10.6248 25.515 10.6648C23.835 10.7248 22.795 11.8448 22.795 13.5148V18.0223H25.825V14.0648V13.9948V13.8648C25.855 13.4048 26.125 13.1548 26.585 13.1548H27.155C27.735 13.1548 27.965 13.3848 27.965 13.9648V16.4448H26.375V18.0223H29C29.7611 18.0223 30.4561 18.3058 30.985 18.7729ZM22.795 21.0005C22.7788 21.0002 22.7624 21 22.7459 21C22.5025 21 22.2742 21.0483 22.0612 21.1448C21.8482 21.234 21.6656 21.3565 21.5135 21.5125C21.3537 21.6685 21.2282 21.8505 21.1369 22.0585C21.0456 22.2665 21 22.4893 21 22.727V23.351H22.1639V22.7047C22.1639 22.519 22.2134 22.3779 22.3123 22.2813C22.4188 22.1848 22.5595 22.1365 22.7345 22.1365C22.879 22.1365 22.9893 22.1662 23.0654 22.2256C23.1415 22.2776 23.1985 22.3445 23.2366 22.4262C23.2746 22.5079 23.2936 22.6045 23.2936 22.7159C23.3012 22.8199 23.305 22.9201 23.305 23.0167C23.305 23.0213 23.305 23.0258 23.305 23.0304C23.305 23.0333 23.305 23.0362 23.305 23.0391C23.305 23.0895 23.3046 23.1381 23.3038 23.1848H23.3034C23.3004 23.3285 23.2933 23.4545 23.2822 23.5627C23.267 23.7038 23.2062 23.8709 23.0996 24.0641L21 27.9304V29H24.469V27.8635H22.3693L24.081 24.6435C24.1723 24.4726 24.2446 24.3278 24.2978 24.2089C24.3511 24.0901 24.3891 23.9712 24.4119 23.8524C24.4347 23.7335 24.45 23.611 24.4576 23.4847C24.465 23.3545 24.4688 23.1962 24.469 23.0097C24.4684 22.7449 24.4341 22.4947 24.3663 22.2591C24.3054 22.0214 24.2065 21.8097 24.0696 21.624C23.9251 21.4383 23.7425 21.2935 23.5219 21.1895C23.3204 21.0841 23.0781 21.0285 22.795 21.0228V21.0005ZM9.80499 10.6548H12.825V23.1848H9.80499V10.6548ZM7.09 10.6548C5.99 10.6548 4.89 10.6548 3.79 10.6648C2.11 10.6848 1 11.8348 1 13.5148V23.2148H4.06V18.2048H7.45V15.6848H4.06V14.0448C4.06 13.4248 4.31 13.1848 4.92 13.1848H8.7V10.6748C8.67361 10.6748 8.65 10.6721 8.62771 10.6694C8.60777 10.6671 8.58889 10.6648 8.57 10.6648H7.1L7.09 10.6548ZM21 19C19.8954 19 19 19.8954 19 21V29C19 30.1046 19.8954 31 21 31H29C30.1046 31 31 30.1046 31 29V21C31 19.8954 30.1046 19 29 19H21ZM27.2769 27.8189V29H28.4409V27.8189H29V26.7493H28.4409V24.4875H27.2769V26.7493H26.1244L27.8703 21.0669H26.6379L24.9605 26.7493V27.8189H27.2769Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">FIFA: Volta</span>
                                                        <div className="bt158"><span className="bt159">20</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/ehorse-racing-315">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-ehorseracing" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 32 32" width="32" height="32" fill="none"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M6.132 20.305c-.58 3.195-.484 5.295.609 7.736a.887.887 0 1 0 1.62-.725c-1.097-2.448-1-4.566-.096-8.573a.887.887 0 0 0-1.309-.964l-.56.325-.815.471-.11.064c-.162.093-.314.18-.454.262.31-.73.85-1.547 1.63-2.526.19-.238.388-.478.647-.788-.004.005.499-.594.635-.759.509-.613.83-1.03 1.077-1.423a.887.887 0 0 0-.805-1.358l-1.794.108c.712-1.085 1.67-2.013 2.9-2.909h.002a41.394 41.394 0 0 0 .543-.401c1.616-1.198 2.46-1.7 3.812-2.132a.887.887 0 0 0 .616-.796c.024-.418.03-1.512.03-1.85l.027.03c.14.157.24.258.284.292l.613.634.001.002c.577.597 1.42 1.47 1.927 1.992l.069.064c.235.195.686.547 1.438 1.123l1.555 1.19.761.582c1.107.847 1.904 1.465 2.52 1.953.359.285.64.514.84.684.099.085.175.153.226.2.004.005.007.008-.03-.058a25.453 25.453 0 0 0 .123.21c.204.351.342.645.42.94.084.317.077.57-.017.768-.246.517-1.59.847-2.408.555a2.006 2.006 0 0 1-.316-.166 8.397 8.397 0 0 1-.59-.406l-.083-.062-.355-.27-.08-.061a.886.886 0 0 0-.531-.182c-1.87-.015-2.965-.12-4.145-.49a.887.887 0 0 0-1.141.704c-.24 1.475.343 3.12 1.397 4.652a2.996 2.996 0 0 1 1.55-.878c-.596-.84-1.01-1.71-1.161-2.484.918.18 1.886.248 3.188.266.177.135.19.145.257.194l.049.036c.27.2.5.36.716.493.227.14.433.246.64.322 1.597.57 3.92 0 4.615-1.46.295-.62.313-1.293.13-1.985-.128-.481-.324-.902-.602-1.378a23.16 23.16 0 0 0-.072-.124l-.051-.086c-.207-.358-1.093-1.061-4.01-3.296l-.765-.584-1.55-1.186c-.692-.53-1.127-.87-1.349-1.051L17.098 4.4c-.599-.62-1.148-1.188-1.266-1.306a2.583 2.583 0 0 1-.175-.183l-.005-.006-.318-.357c-.306-.333-.543-.553-.812-.709-.583-.336-1.279-.273-1.676.37l-.082.172c-.153.433-.212.898-.227 1.544 0 0-.001.721-.011 1.303-1.26.467-2.202 1.058-3.73 2.19a106.054 106.054 0 0 1-.533.393C6.472 9.117 5.15 10.52 4.268 12.334c-.375.76.056 1.462.803 1.61.272.053.484.048 1.008.01l.055-.004.193-.013.037-.002-.43.514c-.268.32-.473.57-.673.819-1.253 1.57-1.989 2.821-2.25 4.127-.27 1.48 1.248 1.983 2.525 1.253l.596-.343Z">
                                                        </path>
                                                        <path
                                                            d="M14.823 10.164a.887.887 0 1 0 1.536-.888.887.887 0 0 0-1.536.888Z">
                                                        </path>
                                                        <path fill-rule="evenodd"
                                                            d="M19 19.002a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8Zm0 8.93v1.07h3.469v-1.136h-2.1l1.712-3.22a7.16 7.16 0 0 0 .217-.435c.053-.119.091-.238.114-.357.023-.119.038-.241.046-.367.007-.134.011-.297.011-.49 0-.268-.034-.52-.103-.758a1.82 1.82 0 0 0-.296-.635 1.485 1.485 0 0 0-.548-.435 1.657 1.657 0 0 0-.776-.167 1.64 1.64 0 0 0-.685.145c-.213.089-.395.212-.547.368-.16.155-.286.337-.377.546-.091.207-.137.43-.137.668v.624h1.164v-.646c0-.186.05-.327.148-.424a.604.604 0 0 1 .422-.145c.145 0 .255.03.331.09a.49.49 0 0 1 .172.2.681.681 0 0 1 .057.29 5.493 5.493 0 0 1-.011.847 1.389 1.389 0 0 1-.183.501L19 27.932Zm6.277-.111v1.181h1.164v-1.181H27v-1.07h-.56V24.49h-1.163v2.262h-1.153l1.746-5.682h-1.232L22.96 26.75v1.07h2.317Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg><span className="bt157">eHorse Racing</span>
                                                        <div className="bt158"><span className="bt159">1</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/penalty-shootout-307">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-fifa-penalty-b" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M2.43566 8.89885H1V5.1443C1 4.4673 1.18499 3.94134 1.55496 3.56642C1.92493 3.18881 2.42359 3 3.05094 3C3.40751 3 3.73324 3.08092 4.02815 3.24275C4.32574 3.40459 4.563 3.63655 4.73995 3.93864C4.91689 4.23803 5.00536 4.57653 5.00536 4.95415C5.00536 5.56642 4.82842 6.06001 4.47453 6.43493C4.12332 6.80715 3.64343 6.99326 3.03485 6.99326H2.67292V5.65003C2.82574 5.65003 2.9504 5.64329 3.04692 5.6298C3.14611 5.61362 3.23861 5.5826 3.3244 5.53675C3.41019 5.4882 3.47185 5.41672 3.50938 5.32232C3.5496 5.22792 3.56971 5.10519 3.56971 4.95415C3.56971 4.78422 3.51475 4.63992 3.40483 4.52124C3.29759 4.40256 3.15282 4.34322 2.97051 4.34322C2.80697 4.34322 2.67694 4.39582 2.58043 4.50101C2.48391 4.6062 2.43566 4.74646 2.43566 4.92178V8.89885ZM8.89812 3.0971V4.44032C8.66756 4.44032 8.47453 4.44437 8.31904 4.45246C8.16354 4.46055 8.02011 4.47943 7.88874 4.5091C7.76005 4.53877 7.6555 4.57384 7.57507 4.6143C7.49464 4.65206 7.41689 4.7087 7.34182 4.78422C7.26944 4.85974 7.20643 4.94201 7.15282 5.03102C7.10188 5.11733 7.04424 5.23061 6.97989 5.37087H8.89812V6.62913H6.97989C7.04692 6.77748 7.10724 6.89885 7.16086 6.99326C7.21448 7.08766 7.28016 7.17127 7.35791 7.2441C7.43834 7.31693 7.51609 7.37222 7.59115 7.40998C7.6689 7.44774 7.77614 7.47876 7.91287 7.50303C8.0496 7.52731 8.18901 7.54214 8.3311 7.54754C8.47319 7.55293 8.6622 7.55563 8.89812 7.55563V8.89885H8.08177C7.57775 8.89885 7.12332 8.76939 6.7185 8.51045C6.31367 8.24882 6 7.89818 5.77748 7.45853C5.55764 7.01618 5.44772 6.52933 5.44772 5.99798C5.44772 5.46662 5.55764 4.98112 5.77748 4.54147C6 4.09912 6.31367 3.74848 6.7185 3.48955C7.12332 3.22792 7.57775 3.0971 8.08177 3.0971H8.89812ZM9.75469 8.89885H11.1863V5.50034H11.2024L12.5375 8.08564C12.7198 8.43898 12.8861 8.68038 13.0362 8.80984C13.189 8.93661 13.3633 9 13.559 9C13.7547 9 13.929 8.92178 14.0818 8.76534C14.2373 8.6089 14.315 8.40526 14.315 8.15442V3.0971H12.8834V6.16386H12.8673L11.5885 3.61092C11.4812 3.39784 11.3499 3.24275 11.1944 3.14565C11.0416 3.04855 10.8445 3 10.6032 3C10.3593 3 10.1568 3.07417 9.99598 3.22252C9.83512 3.37087 9.75469 3.56102 9.75469 3.79299V8.89885ZM16.7118 8.89885H15.2802V5.08766C15.2802 4.4673 15.4665 3.96426 15.8391 3.57856C16.2118 3.19285 16.6984 3 17.2989 3C17.8995 3 18.3847 3.19285 18.7547 3.57856C19.1273 3.96426 19.3137 4.4673 19.3137 5.08766V8.89885H17.882V6.87593H16.9853V5.56912H17.882V5.02293C17.882 4.80715 17.8284 4.63452 17.7212 4.50506C17.6166 4.37289 17.4759 4.30681 17.2989 4.30681C17.122 4.30681 16.9799 4.37289 16.8727 4.50506C16.7654 4.63452 16.7118 4.80715 16.7118 5.02293V8.89885ZM23.3874 8.89885V7.50708H22.4062C22.1193 7.50708 21.9249 7.46392 21.8231 7.37761C21.7239 7.2913 21.6743 7.12947 21.6743 6.89211V3.0971H20.2386V7.02562C20.2386 7.68914 20.4035 8.1679 20.7332 8.4619C21.0657 8.7532 21.5845 8.89885 22.2895 8.89885H23.3874ZM23.2306 3.0971H26.7735V4.48887H25.7198V8.89885H24.2842V4.48887H23.2306V3.0971ZM28.4383 8.89885H29.874V6.82738C30.2493 6.69791 30.5308 6.48618 30.7185 6.19218C30.9062 5.89548 31 5.54889 31 5.15239V3.0971H29.5684V5.02293C29.5684 5.19285 29.5322 5.32906 29.4598 5.43156C29.3874 5.53405 29.2748 5.5853 29.122 5.5853C28.9692 5.5853 28.8566 5.53405 28.7842 5.43156C28.7145 5.32906 28.6796 5.19285 28.6796 5.02293V3.0971H27.244V5.15239C27.244 5.52192 27.3324 5.85098 27.5094 6.13958C27.7105 6.47404 28.0201 6.7033 28.4383 6.82738V8.89885ZM26.3806 18V16.8023H27.9715V14.3227C27.9715 13.7383 27.7402 13.5111 27.1598 13.5111H26.5917C26.1331 13.5111 25.8612 13.7667 25.8287 14.2253C25.826 14.2712 25.8269 14.3152 25.8278 14.3599C25.8282 14.3824 25.8287 14.4051 25.8287 14.4282V18H22.7972V13.8763C22.7972 12.2002 23.8361 11.0883 25.5122 11.0233C26.478 10.9868 27.448 10.9949 28.4138 11.0355C29.9032 11.0964 30.9909 12.2408 30.9949 13.7302C30.9992 15.4081 31.0001 17.086 31 18.7639C30.4692 18.2889 29.7684 18 29 18H26.3806ZM19.2605 18.5555C19.6297 18.2923 20.0612 18.1106 20.5286 18.0368V16.015H17.1399V14.3755C17.1399 13.787 17.3996 13.5232 17.9921 13.5232H21.7907V11.0071H21.5878C21.0709 11.0071 20.5544 11.0066 20.0381 11.0062H20.0377C19.0056 11.0053 17.9742 11.0044 16.941 11.0071C16.7543 11.0071 16.5636 11.0193 16.3769 11.0517C14.993 11.2993 14.0921 12.3707 14.0921 13.7789V23.5594H17.1561V18.5555H19.2605ZM4.05996 16.0313H7.4527V18.5474H4.06402V23.5554H1V13.856C1 12.1759 2.10792 11.0314 3.79211 11.0111C4.8933 10.9971 5.99255 11.0006 7.09254 11.004H7.09262L7.09309 11.004C7.58204 11.0056 8.07114 11.0071 8.56062 11.0071C8.6012 11.0071 8.64179 11.0111 8.69454 11.0193V13.5232H4.91626C4.30346 13.5232 4.0559 13.7708 4.0559 14.3877C4.05996 14.9273 4.05996 15.4633 4.05996 16.0313ZM9.79839 23.5513H12.8218V11.0193H9.79839V23.5513ZM19 21C19 19.8954 19.8954 19 21 19H29C30.1046 19 31 19.8954 31 21V29C31 30.1046 30.1046 31 29 31H21C19.8954 31 19 30.1046 19 29V21ZM21 29V27.9304L23.0996 24.0641C23.2062 23.8709 23.267 23.7038 23.2822 23.5627C23.2974 23.4141 23.305 23.2321 23.305 23.0167C23.305 22.9201 23.3012 22.8199 23.2936 22.7159C23.2936 22.6045 23.2746 22.5079 23.2366 22.4262C23.1985 22.3445 23.1415 22.2776 23.0654 22.2256C22.9893 22.1662 22.879 22.1365 22.7345 22.1365C22.5595 22.1365 22.4188 22.1848 22.3123 22.2813C22.2134 22.3779 22.1639 22.519 22.1639 22.7047V23.351H21V22.727C21 22.4893 21.0456 22.2665 21.1369 22.0585C21.2282 21.8505 21.3537 21.6685 21.5135 21.5125C21.6656 21.3565 21.8482 21.234 22.0612 21.1448C22.2742 21.0483 22.5025 21 22.7459 21C23.0502 21 23.3089 21.0557 23.5219 21.1671C23.7425 21.2711 23.9251 21.416 24.0696 21.6017C24.2065 21.7874 24.3054 21.9991 24.3663 22.2368C24.4347 22.4745 24.469 22.727 24.469 22.9944C24.469 23.1876 24.4652 23.351 24.4576 23.4847C24.45 23.611 24.4347 23.7335 24.4119 23.8524C24.3891 23.9712 24.3511 24.0901 24.2978 24.2089C24.2446 24.3278 24.1723 24.4726 24.081 24.6435L22.3693 27.8635H24.469V29H21ZM27.2769 29V27.8189H24.9605V26.7493L26.6379 21.0669H27.8703L26.1244 26.7493H27.2769V24.4875H28.4409V26.7493H29V27.8189H28.4409V29H27.2769Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Penalty Shootout</span>
                                                        <div className="bt158"><span className="bt159">9</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/handball-6">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-handball" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M24.5219 17.4848C25.1988 16.7908 25.761 15.9957 26.1874 15.1296C26.2 14.9374 26.2064 14.7436 26.2064 14.5482C26.2064 13.1537 25.8804 11.8353 25.3004 10.6652C24.2515 10.1129 23.1024 9.76849 21.9053 9.65624L19.9267 13.053C20.5938 14.3465 20.9703 15.7704 21.0347 17.222L24.5219 17.4848ZM25.0568 18.2191V18.8879C25.3023 18.4587 25.5124 18.0067 25.6833 17.5359C25.4854 17.7726 25.2764 18.0006 25.0568 18.2191V18.2191ZM24.16 20.1737V18.3569L20.7921 18.103L18.5164 20.7097L20.1438 22.8811C21.7276 22.3698 23.1142 21.4196 24.16 20.1737ZM19.2072 23.1267L17.7205 21.1431C15.9736 21.1014 14.2977 20.6128 12.8238 19.7347C12.6111 19.6079 12.5414 19.3327 12.6681 19.12C12.7949 18.9072 13.0701 18.8375 13.2828 18.9643C14.6217 19.762 16.1429 20.2065 17.7305 20.2463L20.1459 17.4796C20.1164 16.0549 19.757 14.6538 19.0925 13.3928L13.9947 12.2058V8.06726L18.5412 6.29651C18.6224 6.16102 18.7068 6.02744 18.7943 5.89587C18.3567 5.82852 17.9083 5.79358 17.4518 5.79358C16.0235 5.79358 14.6463 6.13526 13.409 6.78072C12.9699 7.00979 12.4282 6.83951 12.1991 6.40039C11.9701 5.96126 12.1403 5.41958 12.5795 5.19051C14.0714 4.41223 15.733 4 17.4518 4C23.2774 4 28 8.72258 28 14.5482C28 20.3738 23.2774 25.0963 17.4518 25.0963C15.7489 25.0963 14.102 24.6917 12.6205 23.9271C12.1804 23.7 12.0077 23.1591 12.2349 22.7189C12.462 22.2788 13.0029 22.1061 13.4431 22.3333C14.6717 22.9674 16.0367 23.3028 17.4518 23.3028C18.053 23.3028 18.6401 23.2422 19.2072 23.1267ZM21.7331 8.74264C22.6792 8.80719 23.6006 9.00349 24.4758 9.32169C23.3204 7.77144 21.6639 6.61667 19.7461 6.09728C19.6072 6.28901 19.4761 6.48588 19.3528 6.68749L21.7331 8.74264ZM4 27.1029V16.3417L5.79358 8.27065L7.58715 4.6835C7.75738 4.31675 8.07537 3.8831 8.51613 4.12689C8.80997 4.28941 8.79924 4.77388 8.48394 5.58029L7.58715 8.27065V15.445L8.48394 19.0321L11.1743 13.6514C11.3706 13.2533 12.0044 13.039 12.5798 13.3267C13.1552 13.6144 13.0485 14.3022 12.9679 14.5482L11.1743 21.7225L8.48394 24.4128V27.1029H4ZM18.611 7.23176L14.8915 8.68039V11.4939L19.2111 12.4997L21.052 9.33938L18.611 7.23176Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Handball</span>
                                                        <div className="bt158"><span className="bt159">49</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/table-tennis-20">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-tabletennis" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M9.8161 14.9767L19.4209 24.5815C20.79 24.2873 22.0869 23.5854 23.1851 22.4873C26.2327 19.4396 26.1877 14.4441 23.0733 11.3296C19.9588 8.21513 14.9633 8.17012 11.9156 11.2178C10.8158 12.3176 10.1121 13.6118 9.8161 14.9767ZM18.3166 24.7293L9.66661 16.0793C9.58783 17.4849 9.92686 18.9288 10.6957 20.284C10.996 20.8134 10.8325 21.2537 10.4655 21.7205C10.3076 21.9213 10.1625 22.0716 9.75162 22.4778C9.33261 22.892 9.13192 23.0998 8.91331 23.3576C8.05872 24.3655 7.95123 25.0073 8.67337 25.7295C9.39548 26.4516 10.0355 26.3439 11.0431 25.4882C11.2991 25.2708 11.5053 25.0715 11.9173 24.6548C12.3252 24.2422 12.4766 24.0963 12.6787 23.9376C13.1459 23.5709 13.5876 23.4076 14.1169 23.7061C15.4701 24.469 16.9127 24.8062 18.3166 24.7293ZM7.09895 10.1979C5.38745 10.1979 4 8.81045 4 7.09895C4 5.38745 5.38745 4 7.09895 4C8.81045 4 10.1979 5.38745 10.1979 7.09895C10.1979 8.81045 8.81045 10.1979 7.09895 10.1979ZM7.09895 9.31248C8.32145 9.31248 9.31248 8.32145 9.31248 7.09895C9.31248 5.87645 8.32145 4.88541 7.09895 4.88541C5.87645 4.88541 4.88541 5.87645 4.88541 7.09895C4.88541 8.32145 5.87645 9.31248 7.09895 9.31248ZM13.1765 25.8999C12.7291 26.3523 12.4968 26.5768 12.1894 26.838C10.5636 28.2186 8.93267 28.4931 7.4212 26.9817C5.91042 25.4709 6.1838 23.8387 7.56262 22.2124C7.82539 21.9025 8.05157 21.6684 8.5067 21.2185C8.72598 21.0017 8.8571 20.8697 8.9473 20.7722C7.07208 17.115 7.69994 12.9291 10.6634 9.96564C14.4077 6.22131 20.5244 6.27641 24.3254 10.0774C28.1264 13.8785 28.1816 19.9951 24.4372 23.7394C21.4818 26.6948 17.2884 27.32 13.629 25.4536C13.5306 25.5443 13.3972 25.6766 13.1765 25.8999Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Table Tennis</span>
                                                        <div className="bt158"><span className="bt159">5</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/kabaddi-138">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-kabbadi" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M25 5C25 3.89543 24.1046 3 23 3C21.8954 3 21 3.89543 21 5C21 6.10457 21.8954 7 23 7C24.1046 7 25 6.10457 25 5Z">
                                                        </path>
                                                        <path
                                                            d="M12.7782 6.41409C13.5592 5.63304 14.8255 5.63304 15.6066 6.41409C16.3876 7.19514 16.3876 8.46147 15.6066 9.24252C14.8255 10.0236 13.5592 10.0236 12.7782 9.24252C11.9971 8.46147 11.9971 7.19514 12.7782 6.41409Z">
                                                        </path>
                                                        <path
                                                            d="M17 13C18.7271 13 20.0429 12.4883 21 11.805V15.6481L18.2764 18.5037C18.0579 18.7328 17.9608 19.0517 18.0145 19.3636L19.0145 25.1697C19.1083 25.714 19.6255 26.0792 20.1697 25.9855C20.714 25.8918 21.0792 25.3745 20.9855 24.8303L20.0709 19.52L22.4744 17H24.2792L27.0513 25.3163C27.226 25.8402 27.7923 26.1234 28.3162 25.9487C28.8402 25.7741 29.1233 25.2077 28.9487 24.6838L26 15.8378V11.0001L28 12.5001V16.0001C28 16.5523 28.4477 17.0001 29 17.0001C29.5523 17.0001 30 16.5523 30 16.0001V12.0001C30 11.6853 29.8518 11.3889 29.6 11.2001L25.6111 8.20836C25.4785 8.10586 25.3194 8.03593 25.1459 8.01057C25.0978 8.00352 25.0494 8.00002 25.0011 8L22.0219 8C21.9562 7.99854 21.8911 8.00363 21.8275 8.01482C21.6712 8.04201 21.5273 8.1055 21.4049 8.19629C21.2942 8.27805 21.1997 8.38314 21.1296 8.50738C21.0951 8.56811 21.0668 8.6328 21.0456 8.7006C20.8169 9.35764 19.6923 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z">
                                                        </path>
                                                        <path
                                                            d="M11.3638 9.24251C10.9733 8.85198 10.3402 8.85198 9.94963 9.24251L6.32816 12.864C5.52929 13.6628 5.27053 14.8083 5.57081 15.8317L5.96494 20.2115L2.25678 24.3309C1.88728 24.7414 1.9205 25.3737 2.33097 25.7432C2.74145 26.1127 3.37374 26.0795 3.74324 25.669L7.74324 21.2254C7.92933 21.0187 8.02091 20.7438 7.99598 20.4667L7.79206 18.2005L8.47866 17.4965L10 19.7503V25C10 25.5523 10.4477 26 11 26C11.5523 26 12 25.5523 12 25V19.4444C12 19.245 11.9404 19.0502 11.8289 18.885L9.90465 16.0343L12.582 13.289L13.4851 14.1922C14.3265 15.0335 15.6679 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14C16.3321 14 15.4722 13.3508 14.8994 12.778L12.4245 10.3031L12.4176 10.2963L11.3638 9.24251Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Kabaddi</span>
                                                        <div className="bt158"><span className="bt159">3</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/efighting-304">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-e-fighting-b" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M18 10.4884V3.74884C18 3.55024 17.921 3.35977 17.7803 3.21933C17.6397 3.0789 17.4489 3 17.25 3H15.75C15.5511 3 15.3603 3.0789 15.2197 3.21933C15.079 3.35977 15 3.55024 15 3.74884V10.6271C15.24 10.5377 15.4938 10.4908 15.75 10.4884H18ZM24 14.9815C24 14.1871 23.6839 13.4252 23.1213 12.8635C22.5587 12.3017 21.7956 11.9861 21 11.9861H15.7407C15.6435 11.9861 15.5471 12.0053 15.4573 12.0424C15.3674 12.0796 15.2857 12.1341 15.217 12.2028C15.1482 12.2714 15.0936 12.353 15.0564 12.4427C15.0192 12.5324 15 12.6286 15 12.7257C14.9963 13.0206 15.0513 13.3134 15.1618 13.5869C15.2723 13.8604 15.4361 14.1093 15.6437 14.3192C15.8513 14.529 16.0985 14.6956 16.3711 14.8093C16.6436 14.923 16.9361 14.9815 17.2315 14.9815H18.8796C19.3333 14.9815 19.5 15.1479 19.5 15.3606V16.1186C19.4976 16.216 19.4579 16.3087 19.3889 16.3775C19.32 16.4464 19.2271 16.4861 19.1296 16.4884C17.0463 16.5994 16.1204 17.6441 14.6296 19.8814L14.3333 20.3251C14.3063 20.3661 14.2713 20.4014 14.2304 20.4287C14.1896 20.4561 14.1437 20.4751 14.0954 20.4845C14.0472 20.494 13.9975 20.4938 13.9493 20.4839C13.9011 20.474 13.8554 20.4546 13.8148 20.4268L13.1481 20.02C13.0665 19.9622 13.0103 19.8751 12.9914 19.7769C12.9724 19.6788 12.9921 19.5771 13.0463 19.4931L13.3426 19.0493C13.9603 18.0522 14.7041 17.1387 15.5556 16.3313C15.1502 16.2097 14.7754 16.0034 14.4561 15.7261C14.1368 15.4487 13.8803 15.1067 13.7037 14.7227C13.3861 14.8881 13.0341 14.9768 12.6759 14.9815H11.2963C10.7411 14.9804 10.2063 14.7728 9.79629 14.3991C9.38626 14.7728 8.85145 14.9804 8.2963 14.9815H6.75C6.49383 14.9792 6.24003 14.9322 6 14.8428V18.4946C6.00101 20.0831 6.63381 21.6061 7.75926 22.7288L9 23.9676V27H15V21C15 19.3431 16.3431 18 18 18H24V14.9815ZM22.5 5.2188V10.7658C22.0212 10.5791 21.5138 10.4759 21 10.4607H19.5V5.2188C19.5 5.02019 19.579 4.82972 19.7197 4.68929C19.8603 4.54885 20.0511 4.46995 20.25 4.46995H21.75C21.9489 4.46995 22.1397 4.54885 22.2803 4.68929C22.421 4.82972 22.5 5.02019 22.5 5.2188ZM6.75 13.4838H8.25926C8.45817 13.4838 8.64894 13.4049 8.78959 13.2645C8.93024 13.1241 9.00926 12.9336 9.00926 12.735V6.74422C9.00926 6.54562 8.93024 6.35514 8.78959 6.21471C8.64894 6.07427 8.45817 5.99538 8.25926 5.99538H6.75C6.65151 5.99538 6.55398 6.01475 6.46299 6.05238C6.37199 6.09001 6.28931 6.14517 6.21967 6.21471C6.15003 6.28425 6.09478 6.3668 6.05709 6.45765C6.0194 6.54851 6 6.64588 6 6.74422V12.735C6 12.9336 6.07902 13.1241 6.21967 13.2645C6.36032 13.4049 6.55109 13.4838 6.75 13.4838ZM12.7593 13.4838H11.2963C11.0974 13.4838 10.9066 13.4049 10.766 13.2645C10.6253 13.1241 10.5463 12.9336 10.5463 12.735V5.24653C10.5463 5.04793 10.6253 4.85746 10.766 4.71702C10.9066 4.57658 11.0974 4.49769 11.2963 4.49769H12.7593C12.9582 4.49769 13.1489 4.57658 13.2896 4.71702C13.4302 4.85746 13.5093 5.04793 13.5093 5.24653V12.735C13.5093 12.9336 13.4302 13.1241 13.2896 13.2645C13.1489 13.4049 12.9582 13.4838 12.7593 13.4838ZM16 21C16 19.8954 16.8954 19 18 19H26C27.1046 19 28 19.8954 28 21V29C28 30.1046 27.1046 31 26 31H18C16.8954 31 16 30.1046 16 29V21ZM18 29V27.9304L20.0996 24.0641C20.2062 23.8709 20.267 23.7038 20.2822 23.5627C20.2974 23.4141 20.305 23.2321 20.305 23.0167C20.305 22.9201 20.3012 22.8199 20.2936 22.7159C20.2936 22.6045 20.2746 22.5079 20.2366 22.4262C20.1985 22.3445 20.1415 22.2776 20.0654 22.2256C19.9893 22.1662 19.879 22.1365 19.7345 22.1365C19.5595 22.1365 19.4188 22.1848 19.3123 22.2813C19.2134 22.3779 19.1639 22.519 19.1639 22.7047V23.351H18V22.727C18 22.4893 18.0456 22.2665 18.1369 22.0585C18.2282 21.8505 18.3537 21.6685 18.5135 21.5125C18.6656 21.3565 18.8482 21.234 19.0612 21.1448C19.2742 21.0483 19.5025 21 19.7459 21C20.0502 21 20.3089 21.0557 20.5219 21.1671C20.7425 21.2711 20.9251 21.416 21.0696 21.6017C21.2065 21.7874 21.3054 21.9991 21.3663 22.2368C21.4347 22.4745 21.469 22.727 21.469 22.9944C21.469 23.1876 21.4652 23.351 21.4576 23.4847C21.45 23.611 21.4347 23.7335 21.4119 23.8524C21.3891 23.9712 21.3511 24.0901 21.2978 24.2089C21.2446 24.3278 21.1723 24.4726 21.081 24.6435L19.3693 27.8635H21.469V29H18ZM24.2769 29V27.8189H21.9605V26.7493L23.6379 21.0669H24.8703L23.1244 26.7493H24.2769V24.4875H25.4409V26.7493H26V27.8189H25.4409V29H24.2769Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">eFighting</span>
                                                        <div className="bt158"><span className="bt159">10</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/etennis-303">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-aotennis-b" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M7.12211 10.2314C5.39781 10.2314 4 8.83647 4 7.11571C4 5.39495 5.39781 4 7.12211 4C8.8464 4 10.2442 5.39495 10.2442 7.11571C10.2442 8.83647 8.8464 10.2314 7.12211 10.2314ZM6.46101 9.2418C6.62379 8.5513 6.97529 7.91364 7.49185 7.39814C7.98165 6.90935 8.58161 6.56847 9.23298 6.39597C8.99449 5.6992 8.41933 5.15812 7.70112 4.96595C7.52415 5.59635 7.18773 6.1765 6.71087 6.65238C6.2183 7.14394 5.61429 7.48593 4.95858 7.65749C5.14758 8.41158 5.72209 9.01323 6.46101 9.2418ZM7.35941 9.32876C8.42239 9.21656 9.26258 8.35908 9.34546 7.28974C8.88954 7.43057 8.47054 7.6804 8.12261 8.02761C7.75407 8.3954 7.49511 8.84276 7.35941 9.32876ZM4.92378 6.73937C5.35395 6.59531 5.74918 6.35316 6.08011 6.02292C6.3989 5.70477 6.63579 5.32707 6.78179 4.91595C5.83493 5.06064 5.08417 5.79961 4.92378 6.73937ZM23.31 18L23.3407 17.973L21.9264 16.5616L20.485 18H19H18.8886C18.6672 18 18.4522 18.033 18.2488 18.0948C18.2125 18.1042 18.1765 18.1142 18.1407 18.1249L16.5742 16.5616L14.5343 18.5973C15.0645 19.0363 15.6859 19.3618 16.3603 19.5734C16.1305 19.9977 16 20.4836 16 21V22.4438C15.2317 22.7201 14.474 23.004 13.7551 23.2881C13.1108 23.5428 12.5193 23.7893 11.9925 24.0244C10.8735 24.5237 10.0834 24.9579 9.78891 25.2214L7.26587 27.7393C6.91751 28.0869 6.35271 28.0869 6.00435 27.7393L4.74283 26.4803C4.39447 26.1327 4.39447 25.569 4.74283 25.2214L7.23148 22.7378C8.03048 21.7288 9.25958 18.8563 10.8368 14.2335C10.8401 14.2238 10.8436 14.2141 10.8472 14.2046C10.838 11.8619 11.7527 9.41336 13.5735 7.59628C16.9256 4.25104 22.6257 4.04055 25.5579 6.96681C28.2341 9.6375 28.2921 14.6089 25.7336 18H23.31ZM8.58834 23.8951C9.3731 22.9333 10.3484 20.8379 11.5571 17.5497C11.8965 18.2923 12.3581 18.9728 12.9427 19.5562C13.5241 20.1364 14.2017 20.5952 14.9412 20.9334C14.3122 21.1633 13.6931 21.3977 13.0982 21.6328C12.4313 21.8964 11.8165 22.1526 11.2643 22.399C9.97956 22.9723 9.07067 23.4717 8.56061 23.931L8.52739 23.9625L8.58834 23.8951ZM20.5042 6.3816C20.1449 6.36088 19.7798 6.36731 19.4138 6.4014L19.8458 6.91616L20.5042 6.3816ZM20.3902 7.56513L21.6476 6.54433C22.133 6.65674 22.5965 6.82294 23.0247 7.04151L21.2731 8.61732L20.3902 7.56513ZM19.1881 7.4501L17.2683 8.97561L15.8345 7.72633C16.6328 7.15469 17.5261 6.76787 18.4396 6.55803L19.1881 7.4501ZM26.0445 12.4705C26.0417 13.2604 25.8013 13.9722 25.3262 14.603C24.9293 15.1277 24.4206 15.5073 23.8028 15.7474C23.3444 15.9232 22.8721 15.9958 22.3829 15.9707C21.6841 15.9344 21.0552 15.7083 20.4934 15.2868C20.0406 14.9491 19.6884 14.5248 19.4396 14.0168C19.2272 13.5814 19.1126 13.1209 19.0903 12.6352C19.0623 12.0267 19.1825 11.449 19.448 10.9047C19.5906 10.6116 19.7779 10.3464 19.9959 10.1036C20.4151 9.64028 20.9183 9.31371 21.5136 9.1267C22.3074 8.87829 23.0957 8.90899 23.8699 9.2216C24.2249 9.36395 24.5463 9.56491 24.837 9.81891C25.5302 10.433 25.9243 11.2005 26.0194 12.1188C26.0287 12.197 26.033 12.2751 26.0374 12.3532C26.0395 12.3923 26.0417 12.4315 26.0445 12.4705ZM18.9956 15.8537L18.9872 15.8347C18.9834 15.8261 18.9806 15.8198 18.9788 15.8147C18.9006 15.6376 18.8224 15.4598 18.7442 15.282C18.666 15.1041 18.5875 14.9256 18.5092 14.7484L18.2723 14.2084C18.0129 13.6172 17.7532 13.025 17.4918 12.4345C17.3563 12.1262 17.2201 11.8178 17.0838 11.5095C16.9475 11.201 16.8112 10.8925 16.6756 10.584C16.575 10.3551 16.4744 10.1255 16.3738 9.89597C16.2731 9.6664 16.1725 9.43682 16.0719 9.20795C16.0551 9.16887 16.03 9.15492 15.988 9.15492C15.6638 9.15771 15.3368 9.15771 15.0125 9.15492C14.9678 9.15492 14.9483 9.17445 14.9315 9.21074C14.8183 9.47031 14.7044 9.72988 14.5905 9.98945C14.4766 10.249 14.3627 10.5086 14.2495 10.7682L12.2621 15.3067C12.2175 15.4062 12.1737 15.5057 12.1303 15.6043C12.0921 15.691 12.0541 15.7773 12.0162 15.8621H14.1796C14.6184 14.7233 15.0545 13.5957 15.4961 12.4569C15.5942 12.7094 15.6894 12.9579 15.784 13.2048C15.8482 13.3726 15.9124 13.5402 15.9769 13.7073L16.2004 14.2883L16.2008 14.2893C16.3943 14.7919 16.5874 15.2935 16.7791 15.7951C16.7958 15.8426 16.8238 15.8537 16.8713 15.8537H18.9956ZM22.5646 14.0224C23.3975 14.0336 24.1215 13.347 24.1215 12.4789C24.1243 11.6053 23.4339 10.9298 22.6009 10.9131C21.7121 10.8935 21.0161 11.6108 21.0105 12.4538C21.0021 13.3246 21.7149 14.028 22.5646 14.0224ZM17 21C17 19.8954 17.8954 19 19 19H27C28.1046 19 29 19.8954 29 21V29C29 30.1046 28.1046 31 27 31H19C17.8954 31 17 30.1046 17 29V21ZM19 29V27.9304L21.0996 24.0641C21.2062 23.8709 21.267 23.7038 21.2822 23.5627C21.2974 23.4141 21.305 23.2321 21.305 23.0167C21.305 22.9201 21.3012 22.8199 21.2936 22.7159C21.2936 22.6045 21.2746 22.5079 21.2366 22.4262C21.1985 22.3445 21.1415 22.2776 21.0654 22.2256C20.9893 22.1662 20.879 22.1365 20.7345 22.1365C20.5595 22.1365 20.4188 22.1848 20.3123 22.2813C20.2134 22.3779 20.1639 22.519 20.1639 22.7047V23.351H19V22.727C19 22.4893 19.0456 22.2665 19.1369 22.0585C19.2282 21.8505 19.3537 21.6685 19.5135 21.5125C19.6656 21.3565 19.8482 21.234 20.0612 21.1448C20.2742 21.0483 20.5025 21 20.7459 21C21.0502 21 21.3089 21.0557 21.5219 21.1671C21.7425 21.2711 21.9251 21.416 22.0696 21.6017C22.2065 21.7874 22.3054 21.9991 22.3663 22.2368C22.4347 22.4745 22.469 22.727 22.469 22.9944C22.469 23.1876 22.4652 23.351 22.4576 23.4847C22.45 23.611 22.4347 23.7335 22.4119 23.8524C22.3891 23.9712 22.3511 24.0901 22.2978 24.2089C22.2446 24.3278 22.1723 24.4726 22.081 24.6435L20.3693 27.8635H22.469V29H19ZM25.2769 29V27.8189H22.9605V26.7493L24.6379 21.0669H25.8703L24.1244 26.7493H25.2769V24.4875H26.4409V26.7493H27V27.8189H26.4409V29H25.2769Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">eTennis</span>
                                                        <div className="bt158"><span className="bt159">4</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/erocket-league-301">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-rocket-league-b" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M6.77152 10.5002C8.30219 10.5002 9.54304 9.26891 9.54304 7.75008C9.54304 6.23125 8.30219 5 6.77152 5C5.24085 5 4 6.23125 4 7.75008C4 9.26891 5.24085 10.5002 6.77152 10.5002ZM9.95396 22.9541C8.94853 21.866 8.08649 20.6555 7.38853 19.3518C7.3806 19.3371 7.37224 19.323 7.36344 19.3092C7.32548 19.2496 7.22275 19.0632 7.29653 18.8791C7.34736 18.7514 7.45781 18.6761 7.52 18.6414C7.6956 18.5433 7.89485 18.4947 8.09627 18.5008C8.45657 18.5105 8.8173 18.5274 9.17566 18.562C10.8269 18.7285 12.4658 19.1141 14.0126 19.7235C14.0043 19.8145 14 19.9068 14 20V26.1966C12.7576 25.4706 11.3196 24.4308 9.95396 22.9541ZM9.39223 16.4442C11.3363 16.6404 13.2142 17.1023 14.9547 17.8053C15.4906 17.3057 16.2096 17 17 17H17.8881H25H25.1215C25.2284 16.7693 25.3345 16.5305 25.4389 16.2838L25.49 16.1631C25.9552 15.0663 26.5005 13.7804 26.9034 11.1686C26.9034 11.1686 27.0729 10.2574 26.9628 8.06866C26.9626 8.03885 26.9541 8.00967 26.9384 7.98426C26.9227 7.95885 26.9003 7.93815 26.8736 7.92438C23.2374 5.90784 18.3086 5.46435 18.3086 5.46435C14.9016 5.1577 12.754 5.31326 11.1884 5.60204C11.6383 6.51594 11.7896 7.54641 11.6211 8.5497C11.4526 9.553 10.9727 10.4791 10.2484 11.1988C9.5125 11.928 8.56282 12.4072 7.53551 12.5678C6.5082 12.7284 5.45604 12.562 4.52989 12.0926C4.7242 13.6035 5.14391 14.3036 5.14391 14.3036C5.26823 14.4864 5.40662 14.6594 5.55782 14.821C6.84425 16.1898 8.72313 16.3786 9.27638 16.4342L9.27684 16.4342C9.31939 16.4385 9.35525 16.4417 9.37757 16.4437L9.37773 16.4437L9.38408 16.4442H9.39223ZM15 20C15 18.8954 15.8954 18 17 18H25C26.1046 18 27 18.8954 27 20V28C27 29.1046 26.1046 30 25 30H17C15.8954 30 15 29.1046 15 28V20ZM17 28V26.9304L19.0996 23.0641C19.2062 22.8709 19.267 22.7038 19.2822 22.5627C19.2974 22.4141 19.305 22.2321 19.305 22.0167C19.305 21.9201 19.3012 21.8199 19.2936 21.7159C19.2936 21.6045 19.2746 21.5079 19.2366 21.4262C19.1985 21.3445 19.1415 21.2776 19.0654 21.2256C18.9893 21.1662 18.879 21.1365 18.7345 21.1365C18.5595 21.1365 18.4188 21.1848 18.3123 21.2813C18.2134 21.3779 18.1639 21.519 18.1639 21.7047V22.351H17V21.727C17 21.4893 17.0456 21.2665 17.1369 21.0585C17.2282 20.8505 17.3537 20.6685 17.5135 20.5125C17.6656 20.3565 17.8482 20.234 18.0612 20.1448C18.2742 20.0483 18.5025 20 18.7459 20C19.0502 20 19.3089 20.0557 19.5219 20.1671C19.7425 20.2711 19.9251 20.416 20.0696 20.6017C20.2065 20.7874 20.3054 20.9991 20.3663 21.2368C20.4347 21.4745 20.469 21.727 20.469 21.9944C20.469 22.1876 20.4652 22.351 20.4576 22.4847C20.45 22.611 20.4347 22.7335 20.4119 22.8524C20.3891 22.9712 20.3511 23.0901 20.2978 23.2089C20.2446 23.3278 20.1723 23.4726 20.081 23.6435L18.3693 26.8635H20.469V28H17ZM23.2769 28V26.8189H20.9605V25.7493L22.6379 20.0669H23.8703L22.1244 25.7493H23.2769V23.4875H24.4409V25.7493H25V26.8189H24.4409V28H23.2769Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">eRocket League</span>
                                                        <div className="bt158"><span className="bt159">12</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/aussie-rules-13">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-aussierules" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M12.253 15.2492C12.6234 14.8167 13.0004 14.3972 13.384 13.9908L12.7157 13.2946C12.5376 13.1091 12.5437 12.8143 12.7292 12.6362C12.9147 12.4581 13.2095 12.4641 13.3876 12.6497L14.0329 13.3219C14.0425 13.3124 14.052 13.3028 14.0615 13.2933C14.4497 12.9051 14.8474 12.5267 15.2547 12.158L14.5679 11.4425C14.3898 11.257 14.3958 10.9622 14.5813 10.7841C14.7668 10.606 15.0616 10.612 15.2397 10.7975L15.9545 11.5421C18.427 9.42688 21.2347 7.65092 24.3765 6.21446C21.4982 5.0168 14.8186 6.64488 10.7468 10.7167C6.58425 14.8792 4.95465 21.6295 6.28673 24.4594C7.87885 21.2408 9.66734 18.4103 11.6527 15.9687L10.8636 15.1468C10.6855 14.9612 10.6915 14.6665 10.877 14.4884C11.0626 14.3103 11.3573 14.3163 11.5354 14.5018L12.253 15.2492ZM12.3027 16.6458C10.3028 19.1212 8.50436 22.0087 6.90785 25.309C9.20399 27.3041 16.7669 25.7697 21.2833 21.2532C25.7998 16.7367 27.3097 9.01174 25.2915 6.82482C22.0304 8.2583 19.1339 10.055 16.6006 12.2151L17.6104 13.267C17.7885 13.4526 17.7825 13.7473 17.597 13.9254C17.4115 14.1035 17.1167 14.0975 16.9386 13.912L15.9 12.8301C15.497 13.1943 15.1037 13.5682 14.7201 13.9518C14.7061 13.9658 14.692 13.9799 14.678 13.9939L15.7583 15.1192C15.9364 15.3047 15.9304 15.5995 15.7449 15.7776C15.5593 15.9557 15.2646 15.9497 15.0865 15.7641L14.0298 14.6634C13.647 15.0702 13.2707 15.4905 12.9011 15.9244L13.9062 16.9713C14.0843 17.1568 14.0783 17.4516 13.8927 17.6297C13.7072 17.8078 13.4124 17.8018 13.2343 17.6163L12.3027 16.6458ZM5.47851 26.5215C2.46492 23.5079 4.19395 14.6354 9.42972 9.3996C14.6317 4.19764 23.589 2.48581 26.5516 5.44839C29.5142 8.41097 27.8024 17.3683 22.6004 22.5703C17.3646 27.806 8.49211 29.5351 5.47851 26.5215Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Aussie Rules</span>
                                                        <div className="bt158"><span className="bt159">14</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/rugby-12">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-rugby" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M11.6527 15.9687L10.8636 15.1468C10.6855 14.9612 10.6915 14.6665 10.877 14.4884C11.0626 14.3103 11.3573 14.3163 11.5354 14.5018L12.253 15.2492C12.6234 14.8167 13.0004 14.3972 13.384 13.9908L12.7157 13.2946C12.5376 13.1091 12.5437 12.8143 12.7292 12.6362C12.9147 12.4581 13.2095 12.4641 13.3876 12.6497L14.0329 13.3219C14.0425 13.3124 14.052 13.3028 14.0615 13.2933C14.4497 12.9051 14.8474 12.5267 15.2547 12.158L14.5679 11.4425C14.3898 11.257 14.3958 10.9622 14.5813 10.7841C14.7668 10.606 15.0616 10.612 15.2397 10.7975L15.9545 11.5421C17.3577 10.3416 18.869 9.25044 20.488 8.26856C19.4084 7.47802 18.3241 6.94144 17.3751 6.69369C15.0293 7.49631 12.6139 8.84958 10.7468 10.7167C8.96938 12.4941 7.65381 14.7433 6.83344 16.9576C6.97019 17.9995 7.52214 19.275 8.43154 20.5522C9.44059 18.8966 10.5143 17.3687 11.6527 15.9687ZM12.3027 16.6458C11.1485 18.0744 10.0615 19.6402 9.04161 21.3434C9.31306 21.6697 9.60739 21.993 9.92362 22.3092C11.5062 23.8918 13.2644 24.926 14.703 25.2885C17.0255 24.4795 19.4151 23.1215 21.2833 21.2532C23.0624 19.4742 24.3749 17.1973 25.1891 14.9572C24.9702 13.4381 23.8844 11.4385 22.1065 9.66067C21.8316 9.3858 21.5515 9.12747 21.2686 8.88633C19.5953 9.87872 18.0394 10.9883 16.6006 12.2151L17.6104 13.267C17.7885 13.4526 17.7825 13.7473 17.597 13.9254C17.4115 14.1035 17.1167 14.0975 16.9386 13.912L15.9 12.8301C15.497 13.1943 15.1037 13.5682 14.7201 13.9518C14.7061 13.9658 14.692 13.9799 14.678 13.9939L15.7583 15.1192C15.9364 15.3047 15.9304 15.5995 15.7449 15.7776C15.5593 15.9557 15.2646 15.9497 15.0865 15.7641L14.0298 14.6634C13.647 15.0702 13.2707 15.4905 12.9011 15.9244L13.9062 16.9713C14.0843 17.1568 14.0783 17.4516 13.8927 17.6297C13.7072 17.8078 13.4124 17.8018 13.2343 17.6163L12.3027 16.6458ZM6.28673 24.4594C6.80809 23.4054 7.3505 22.3931 7.91399 21.4224C7.20161 20.4831 6.65774 19.5213 6.31089 18.6064C5.68839 20.9697 5.66586 23.1404 6.28673 24.4594ZM6.90785 25.309C8.04538 26.2974 10.4755 26.4196 13.1875 25.742C11.8868 25.1692 10.5156 24.2183 9.26508 22.9677C9.01209 22.7147 8.77135 22.4568 8.54353 22.1955C7.9766 23.189 7.43137 24.2268 6.90785 25.309ZM24.3765 6.21446C23.1051 5.68541 21.0918 5.70775 18.8893 6.24857C19.7011 6.61125 20.5395 7.12051 21.358 7.75732C22.3273 7.20562 23.3335 6.69133 24.3765 6.21446ZM25.2915 6.82482C24.1941 7.30722 23.1379 7.83076 22.123 8.39544C22.3398 8.5889 22.5542 8.79126 22.765 9.00214C24.1411 10.3782 25.1543 11.9002 25.7002 13.3138C26.4319 10.4851 26.3186 7.93777 25.2915 6.82482ZM5.47851 26.5215C2.46492 23.5079 4.19395 14.6354 9.42972 9.3996C14.6317 4.19764 23.589 2.48581 26.5516 5.44839C29.5142 8.41097 27.8024 17.3683 22.6004 22.5703C17.3646 27.806 8.49211 29.5351 5.47851 26.5215Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Rugby</span>
                                                        <div className="bt158"><span className="bt159">45</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/formula-1-40">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-formula-1" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M8.84615 19.6923V27.0769C8.84615 27.5867 8.43288 28 7.92308 28C7.41328 28 7 27.5867 7 27.0769V4.92308C7 4.41328 7.41328 4 7.92308 4C8.43288 4 8.84615 4.41328 8.84615 4.92308H24.5385C25.0483 4.92308 25.4615 5.33635 25.4615 5.84615V18.7692C25.4615 19.279 25.0483 19.6923 24.5385 19.6923H8.84615ZM12.5385 6.76923V10.4615H8.84615V14.1538H12.5385V17.8462H23.6154V6.76923H12.5385ZM16.2308 6.76923H19.9231V10.4615H16.2308V6.76923ZM12.5385 10.4615H16.2308V14.1538H12.5385V10.4615ZM19.9231 10.4615H23.6154V14.1538H19.9231V10.4615ZM16.2308 14.1538H19.9231V17.8462H16.2308V14.1538Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Formula 1</span>
                                                        <div className="bt158"><span className="bt159">1</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/eshooter-308">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-eshooter" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M12.6463 4.07808C12.7991 4.02369 12.9563 4.00001 13.1139 4C13.4686 4.00002 13.8257 4.11986 14.1408 4.27948L14.1617 4.29326C14.4728 4.49907 14.7847 4.7054 15.1332 4.84001C15.1496 4.87166 15.1766 4.92193 15.2015 4.96818L15.2022 4.96947C15.2184 4.9996 15.2336 5.02791 15.2443 5.04812C15.2372 5.06546 15.2269 5.09203 15.2165 5.1186C15.2062 5.14516 15.1958 5.17176 15.1887 5.18909C15.4425 5.78207 15.6048 6.4847 15.3587 7.10778C15.2299 7.26917 15.0281 7.3259 14.8344 7.38036C14.7756 7.39687 14.7176 7.41318 14.6626 7.43213C14.6618 7.63919 14.6838 7.84471 14.7057 8.05007C14.7156 8.14316 14.7256 8.2364 14.7334 8.32955C15.0003 8.37386 15.2455 8.29403 15.4912 8.21406C15.7108 8.14258 15.9307 8.07098 16.1667 8.08788C16.1858 8.00644 16.2038 7.92463 16.2218 7.84277C16.2674 7.63563 16.313 7.42828 16.3772 7.22627C16.4807 7.41311 16.4849 7.62804 16.4861 7.83838C16.6168 7.87642 16.7497 7.91111 16.8835 7.94456C16.8848 7.99614 16.8858 8.09907 16.8858 8.15054C17.8622 8.15652 18.8383 8.15515 19.8145 8.15378C21.0295 8.15208 22.2444 8.15038 23.4598 8.16285C23.4544 8.23982 23.4437 8.39433 23.4393 8.47165L23.5035 8.47189L23.5533 8.4722L23.5544 8.47221C23.5973 8.47249 23.6403 8.47276 23.669 8.47276C23.6677 8.23913 23.6679 8.00506 23.6681 7.77105C23.6682 7.59535 23.6683 7.41869 23.6679 7.24327C23.7234 7.24092 23.8324 7.23757 23.8868 7.23645L23.8873 7.35713C23.8884 7.63913 23.8895 7.92114 23.8924 8.20324C23.9402 8.26365 24.0361 8.38438 24.0842 8.44479C24.1009 8.42453 24.1252 8.39521 24.1501 8.36523L24.1509 8.36427C24.1795 8.32984 24.2087 8.29464 24.2278 8.27137C24.3528 8.39152 24.3307 8.545 24.3087 8.69725C24.3014 8.74788 24.2941 8.79838 24.2923 8.84746C24.5033 8.84511 24.7151 8.84861 24.927 8.85211C25.331 8.85877 25.7355 8.86544 26.1365 8.83169C26.1611 8.81304 26.1989 8.7847 26.2357 8.75711L26.3195 8.69418L26.3399 8.70231C26.4171 8.73307 26.4952 8.76414 26.5722 8.796C26.8379 8.78931 27.1046 8.78824 27.3714 8.78716L27.4012 8.78705C27.3981 8.86713 27.3954 8.94718 27.3927 9.02725L27.3892 9.12958L27.3857 9.22675L27.3561 9.22627C27.0097 9.22067 26.6625 9.21505 26.3214 9.27587C26.1429 9.11812 25.9163 9.12416 25.6944 9.13008C25.6348 9.13168 25.5755 9.13326 25.5175 9.13165C25.387 9.1379 25.2552 9.13488 25.1233 9.13185C24.8303 9.12513 24.5368 9.1184 24.2561 9.21321C24.0141 9.28258 23.7485 9.26591 23.535 9.12482C23.519 9.16536 23.5156 9.22145 23.512 9.27925C23.5041 9.40808 23.4957 9.54536 23.3474 9.53756C22.939 9.54302 22.5309 9.5414 22.1229 9.53979C21.6864 9.53806 21.25 9.53633 20.8136 9.54327C20.6982 9.60592 20.5816 9.66522 20.4664 9.72329C20.3515 10.075 20.035 10.3166 19.75 10.5342L19.6971 10.5746C19.6728 10.9511 19.7596 11.3113 19.8465 11.6718C19.892 11.8608 19.9376 12.05 19.9672 12.2416C19.8006 12.2907 19.6328 12.3413 19.4683 12.3972C19.3844 12.6006 19.3485 12.8305 19.3127 13.0602C19.2476 13.4772 19.1826 13.8939 18.83 14.1516C18.6951 14.2322 18.5749 14.3433 18.455 14.454C18.2022 14.6874 17.9511 14.9193 17.5675 14.861C17.8551 15.1071 17.489 15.0299 17.5272 14.833C16.7177 14.7595 16.0092 14.3581 15.3082 13.961C15.1235 13.8563 14.9392 13.7519 14.7538 13.6539C14.7124 13.9111 14.6471 14.1641 14.5795 14.4158C14.9172 14.4818 15.196 14.7369 15.2559 15.0927C15.3202 15.5548 15.2696 16.0149 15.2189 16.4759C15.1845 16.7884 15.15 17.1014 15.1514 17.4155C15.162 17.6181 15.1304 17.8131 15.0712 18H15C13.3431 18 12 19.3431 12 21V24.0752C11.8519 23.8505 11.7033 23.626 11.5542 23.402C11.5045 23.3986 11.4542 23.3974 11.4037 23.3963C11.2548 23.3928 11.1048 23.3894 10.9682 23.3292C10.802 23.1541 10.6984 22.9332 10.596 22.715C10.5683 22.656 10.5407 22.5971 10.512 22.5395C10.4231 22.642 10.3782 22.7696 10.3332 22.8973C10.2805 23.0469 10.2279 23.1965 10.1046 23.3059C9.74862 23.6567 9.58501 24.1287 9.4227 24.5969C9.36445 24.7649 9.30637 24.9325 9.23964 25.0938C9.14629 25.2846 9.12323 25.4944 9.10023 25.7039C9.0755 25.9289 9.05083 26.1536 8.93898 26.3536C8.88642 26.4483 8.79774 26.5084 8.70952 26.5683C8.60395 26.6399 8.49905 26.711 8.45751 26.8404C8.35729 27.0964 8.23964 27.3616 8.00544 27.5174C7.83683 27.6309 7.75048 27.8124 7.67832 28H5C5.17766 27.6431 5.36725 27.2916 5.6463 27.0082C5.68692 26.8175 5.77965 26.652 5.87238 26.4865C5.95099 26.3462 6.0296 26.2059 6.07648 26.0503C6.13809 25.8807 6.10387 25.7096 6.06945 25.5376C6.04302 25.4055 6.01646 25.2728 6.03312 25.1396C6.10471 24.4282 6.21786 23.7222 6.33097 23.0164C6.36572 22.7996 6.40046 22.5828 6.43399 22.3659C6.2518 22.2097 6.23215 21.9913 6.21221 21.7699C6.2026 21.6631 6.19292 21.5557 6.16493 21.4541C6.20741 21.331 6.26079 21.2136 6.32506 21.0994C6.29307 21.0692 6.26136 21.0387 6.22964 21.0083L6.22878 21.0075C6.19384 20.9739 6.15883 20.9403 6.12353 20.9071C6.13434 20.8528 6.14285 20.7915 6.15174 20.7274C6.19666 20.4037 6.25142 20.0092 6.66057 20.0982C6.67424 19.6111 6.608 19.131 6.54184 18.6515C6.46043 18.0615 6.37915 17.4724 6.44706 16.8724C6.48729 16.9206 6.52706 16.9692 6.56696 17.018L6.56784 17.0191C6.59239 17.0491 6.61726 17.0795 6.64205 17.1096L6.60719 16.7415C6.81198 16.6296 7.02985 16.5435 7.2586 16.4999C6.9515 16.4584 6.65105 16.385 6.35044 16.3116C6.28642 16.2959 6.22227 16.2802 6.15817 16.2649C6.07895 16.0508 6.11056 15.8243 6.14134 15.6037C6.14484 15.5786 6.14832 15.5536 6.15164 15.5287C6.29325 14.7052 6.34554 13.8706 6.37495 13.0359C6.56414 12.9684 6.76225 12.958 6.96016 12.9477C7.19413 12.9356 7.42783 12.9234 7.64618 12.8166C7.52113 11.7728 7.48954 10.6831 7.85097 9.68167C8.14182 8.829 8.69748 8.00666 9.56447 7.70692C9.97405 7.60634 10.4893 7.49322 10.7788 7.9016C10.8186 7.86412 10.8584 7.82608 10.8981 7.78804C10.9379 7.75 10.9776 7.71196 11.0174 7.67447C10.3563 6.32583 11.1461 4.35556 12.6463 4.07808ZM17.937 9.92736C17.7627 10.037 17.5917 10.1624 17.7749 10.3616C17.6856 10.4163 17.596 10.469 17.5056 10.5192C17.465 10.5513 17.4098 10.5794 17.3527 10.6086C17.2107 10.681 17.0565 10.7597 17.0829 10.921C17.242 11.1834 17.3791 11.4592 17.4926 11.7455C17.84 11.4525 18.1167 11.0584 18.3041 10.6413C18.3433 10.5999 18.4229 10.5171 18.462 10.4767C18.4446 10.2854 18.4032 10.0984 18.3302 9.92177C18.1995 9.92412 18.0677 9.92624 17.937 9.92736Z">
                                                        </path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M15 19C13.8954 19 13 19.8954 13 21V29C13 30.1046 13.8954 31 15 31H23C24.1046 31 25 30.1046 25 29V21C25 19.8954 24.1046 19 23 19H15ZM15 27.9304V29H18.469V27.8635H16.3693L18.081 24.6435C18.1723 24.4726 18.2446 24.3278 18.2978 24.2089C18.3511 24.0901 18.3891 23.9712 18.4119 23.8524C18.4347 23.7335 18.45 23.611 18.4576 23.4847C18.4652 23.351 18.469 23.1876 18.469 22.9944C18.469 22.727 18.4347 22.4745 18.3663 22.2368C18.3054 21.9991 18.2065 21.7874 18.0696 21.6017C17.9251 21.416 17.7425 21.2711 17.5219 21.1671C17.3089 21.0557 17.0502 21 16.7459 21C16.5025 21 16.2742 21.0483 16.0612 21.1448C15.8482 21.234 15.6656 21.3565 15.5135 21.5125C15.3537 21.6685 15.2282 21.8505 15.1369 22.0585C15.0456 22.2665 15 22.4893 15 22.727V23.351H16.1639V22.7047C16.1639 22.519 16.2134 22.3779 16.3123 22.2813C16.4188 22.1848 16.5595 22.1365 16.7345 22.1365C16.879 22.1365 16.9893 22.1662 17.0654 22.2256C17.1415 22.2776 17.1985 22.3445 17.2366 22.4262C17.2746 22.5079 17.2936 22.6045 17.2936 22.7159C17.3012 22.8199 17.305 22.9201 17.305 23.0167C17.305 23.2321 17.2974 23.4141 17.2822 23.5627C17.267 23.7038 17.2062 23.8709 17.0996 24.0641L15 27.9304ZM21.2769 27.8189V29H22.4409V27.8189H23V26.7493H22.4409V24.4875H21.2769V26.7493H20.1244L21.8703 21.0669H20.6379L18.9605 26.7493V27.8189H21.2769Z">
                                                        </path>
                                                    </svg>

                                                        <span className="bt157">eShooter</span>
                                                        <div className="bt158"><span className="bt159">4</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/boxing-10">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-boxing" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M15.1939 6.87389C15.274 6.93904 15.3515 7.00892 15.4261 7.08352L17.7909 9.44833C18.9478 10.6052 18.9691 12.4708 17.8243 13.6156C16.6795 14.7604 14.8138 14.7391 13.657 13.5823C13.3133 13.2386 13.3133 12.6814 13.657 12.3377C14.0007 11.994 14.5579 11.994 14.9016 12.3377C15.3773 12.8134 16.1287 12.8219 16.5797 12.371C17.0306 11.92 17.022 11.1687 16.5463 10.693L14.1815 8.32816C13.7058 7.85244 12.9544 7.84387 12.5035 8.29482C12.0645 8.73381 11.9615 8.85125 11.8826 9.00081C11.7881 9.18024 11.7176 9.45891 11.6075 10.1381C11.564 10.4063 11.5968 10.6639 11.7367 11.2743L11.7427 11.3009C12.0787 12.7672 12.0309 13.6303 11.1826 14.5827C11.1585 14.6144 11.1321 14.6447 11.1033 14.6736L8.92515 16.8517L15.1483 23.0749L18.5711 19.6521C19.3088 18.9144 20.0118 18.556 21.1401 18.211C21.2439 18.1793 21.5963 18.0742 21.6074 18.0709C22.8106 17.7088 23.4664 17.3705 24.2889 16.548C26.1761 14.6609 26.1406 11.5541 24.1956 9.60913L21.8308 7.24432C19.9863 5.39979 17.097 5.27262 15.1939 6.87389ZM13.4502 6.20689C13.4932 6.09741 13.5589 5.9948 13.6473 5.90634C16.2283 3.3254 20.4493 3.37355 23.0754 5.99969L25.4402 8.36449C28.0664 10.9906 28.1145 15.2117 25.5336 17.7926C24.4732 18.853 23.572 19.3178 22.1147 19.7564C22.0983 19.7613 21.7516 19.8647 21.6548 19.8942C20.7774 20.1625 20.3134 20.3991 19.8157 20.8967L12.9702 27.7422C12.6265 28.0859 12.0693 28.0859 11.7256 27.7422L4.25777 20.2744C3.91408 19.9307 3.91408 19.3735 4.25777 19.0298L9.73561 13.552C10.2369 13.0506 10.2661 12.7374 10.027 11.694L10.0209 11.6674C9.83119 10.8392 9.77821 10.4228 9.87001 9.85648C10.0096 8.99547 10.1145 8.58035 10.3256 8.18C10.5186 7.81376 10.6852 7.6238 11.2588 7.05018C11.8596 6.44939 12.659 6.16976 13.4502 6.20689ZM14.526 23.6972L8.30283 17.474L6.12472 19.6521L12.3479 25.8753L14.526 23.6972ZM22.4181 15.2019C22.5899 15.0301 22.8685 15.0301 23.0404 15.2019C23.2122 15.3738 23.2122 15.6524 23.0404 15.8242L22.9866 15.878C21.8543 17.0081 19.9785 16.9498 18.7935 15.7668C18.6215 15.5951 18.6213 15.3165 18.793 15.1445C18.9647 14.9725 19.2433 14.9722 19.4153 15.1439C20.2651 15.9923 21.5851 16.0334 22.3646 15.2554L22.4181 15.2019Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Boxing</span>
                                                        <div className="bt158"><span className="bt159">29</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/mma-117">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-mma" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M4.07974 22.6592L4.18312 10.3979L7.0463 10.421L7.82743 17.5549H7.84179L8.74353 10.4355L11.6038 10.4616L11.5005 22.7229L9.65389 22.7084L9.72856 13.9503L8.56835 22.7026L7.01471 22.6882L6.00097 13.9156L5.92343 22.6766L4.07974 22.6592ZM12.497 22.7345L12.6032 10.4702L15.4607 10.4963L16.2447 17.6302H16.259L17.1636 10.5108L20.0239 10.5368L19.9177 22.8011L18.074 22.7837L18.1487 14.0256L16.9827 22.775L15.4291 22.7605L14.4153 13.9909L14.3407 22.749L12.497 22.7345ZM20.179 22.8011L22.4736 10.5571L24.9634 10.5803L27.0512 22.8648L24.8916 22.8445L24.6906 21.4345L22.5684 21.4171L22.3415 22.8184L20.179 22.8011ZM24.2656 18.4408L23.697 14.2775H23.6797L23.0422 18.4264L24.2656 18.4408ZM4 4H27.1429V5.71429H4V4ZM4 26.2857H27.1429V28H4V26.2857Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">MMA</span>
                                                        <div className="bt158"><span className="bt159">69</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/snooker-19">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-snooker" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M6.39693 23.998H25.6031L16 8.48531L6.39693 23.998ZM16.7287 6.40594L27.8703 24.4039C28.2238 24.9749 27.8131 25.7121 27.1416 25.7121H4.85841C4.1869 25.7121 3.77624 24.9749 4.12969 24.4039L15.2713 6.40594C15.6063 5.86469 16.3937 5.86469 16.7287 6.40594ZM10.8577 23.1409C9.88889 23.1409 9.14363 22.3211 9.14363 21.4268C9.14363 20.5325 9.96342 19.7127 10.8577 19.7127C11.752 19.7127 12.5718 20.5325 12.5718 21.4268C12.5718 22.3211 11.8266 23.1409 10.8577 23.1409ZM16 23.1409C15.0312 23.1409 14.2859 22.3211 14.2859 21.4268C14.2859 20.5325 15.1057 19.7127 16 19.7127C16.8943 19.7127 17.7141 20.5325 17.7141 21.4268C17.7141 22.3211 16.9688 23.1409 16 23.1409ZM13.4289 18.8557C12.46 18.8557 11.7148 18.0359 11.7148 17.1416C11.7148 16.2473 12.5346 15.4275 13.4289 15.4275C14.3232 15.4275 15.143 16.2473 15.143 17.1416C15.143 18.0359 14.3977 18.8557 13.4289 18.8557ZM18.5711 18.8557C17.6023 18.8557 16.857 18.0359 16.857 17.1416C16.857 16.2473 17.6768 15.4275 18.5711 15.4275C19.4654 15.4275 20.2852 16.2473 20.2852 17.1416C20.2852 18.0359 19.54 18.8557 18.5711 18.8557ZM21.1423 23.1409C20.1734 23.1409 19.4282 22.3211 19.4282 21.4268C19.4282 20.5325 20.248 19.7127 21.1423 19.7127C22.0366 19.7127 22.8564 20.5325 22.8564 21.4268C22.8564 22.3211 22.1111 23.1409 21.1423 23.1409ZM16 14.5705C15.0312 14.5705 14.2859 13.7507 14.2859 12.8564C14.2859 11.9621 15.1057 11.1423 16 11.1423C16.8943 11.1423 17.7141 11.9621 17.7141 12.8564C17.7141 13.7507 16.9688 14.5705 16 14.5705Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Snooker</span>
                                                        <div className="bt158"><span className="bt159">22</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/waterpolo-26">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-waterpolo" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M11.3596 6.79207C10.3796 8.67332 9.77907 10.7817 9.60964 12.9899C10.6878 12.9434 11.7303 12.7363 12.7109 12.3899C12.865 10.0114 13.6387 7.73476 14.9306 5.7679C13.6566 5.89638 12.452 6.25185 11.3596 6.79207ZM10.0481 7.56577C8.28101 8.79238 6.92821 10.5504 6.23331 12.6003C7.04745 12.8295 7.89057 12.962 8.74989 12.9929C8.88832 11.0918 9.33077 9.25827 10.0481 7.56577ZM16.0101 5.71429C14.662 7.56141 13.8236 9.73844 13.6 12.0302C16.0978 10.8868 18.1027 8.80613 19.1254 6.1863C18.143 5.8807 17.0964 5.71531 16.0101 5.71429ZM5.96716 18.1052C6.09733 18.6826 6.27736 19.2346 6.50629 19.7536C6.69733 20.1867 6.50107 20.6927 6.06794 20.8838C5.63481 21.0748 5.12883 20.8785 4.93779 20.4454C4.3141 19.0313 4 17.4351 4 15.7591C4 9.26047 9.37673 4 16 4C22.6233 4 28 9.26047 28 15.7591C28 17.3926 27.6594 18.9808 27.0081 20.4474C26.816 20.88 26.3095 21.075 25.8769 20.8829C25.4442 20.6907 25.2492 20.1843 25.4414 19.7516C25.9959 18.5029 26.2857 17.1516 26.2857 15.7591C26.2857 11.5744 23.6638 7.98355 19.933 6.47464C19.7005 7.07404 19.4205 7.64741 19.0979 8.19068C22.2969 11.2322 24.1429 15.4204 24.1429 19.9C24.1429 20.0275 24.1414 20.1548 24.1384 20.282C24.1329 20.5186 23.9366 20.706 23.6999 20.7004C23.4633 20.6949 23.276 20.4986 23.2815 20.262C23.2843 20.1415 23.2857 20.0208 23.2857 19.9C23.2857 15.7132 21.5832 11.7961 18.6241 8.92403C17.8907 9.97004 16.9911 10.8839 15.9673 11.6315C18.42 13.8092 19.8571 16.9306 19.8571 20.2857C19.8571 20.5224 19.6653 20.7143 19.4286 20.7143C19.1919 20.7143 19 20.5224 19 20.2857C19 18.7883 18.6911 17.3415 18.1167 16.0186C14.76 17.4145 11.145 18.1429 7.42857 18.1429C6.93982 18.1429 6.45257 18.1303 5.96716 18.1052ZM5.81173 17.2381C6.34842 17.2698 6.88752 17.2857 7.42857 17.2857C11.0152 17.2857 14.503 16.5863 17.7434 15.2455C17.115 14.0677 16.266 13.0088 15.231 12.1271C13.4501 13.2293 11.3579 13.8571 9.14286 13.8571C8.06623 13.8571 7.00929 13.71 5.99391 13.4234C5.81107 14.173 5.71429 14.9551 5.71429 15.7591C5.71429 16.2636 5.74693 16.7579 5.81173 17.2381ZM4.23073 26.2263C3.90761 25.8803 3.92613 25.3379 4.27209 25.0148C4.61805 24.6917 5.16044 24.7102 5.48356 25.0561C5.58612 25.1659 5.899 25.5145 5.91265 25.5295C6.44673 26.1143 6.74503 26.2857 7.37565 26.2857C7.8055 26.2857 7.98864 26.1758 8.48256 25.6805C9.27028 24.8905 9.80129 24.5714 10.7974 24.5714C11.7953 24.5714 12.3256 24.8913 13.1093 25.6807L13.1104 25.6818C13.6019 26.1768 13.7825 26.2857 14.2092 26.2857C14.637 26.2857 14.8208 26.1757 15.3185 25.6798L15.3198 25.6785C16.1111 24.8902 16.6438 24.5714 17.643 24.5714C18.643 24.5714 19.175 24.8907 19.9633 25.68C20.459 26.1763 20.6412 26.2857 21.0691 26.2857C21.4973 26.2857 21.6797 26.1762 22.1753 25.6801C22.9641 24.8906 23.4956 24.5714 24.4951 24.5714C25.7981 24.5714 26.5746 25.0575 27.4914 26.1026C27.5305 26.1472 27.6903 26.3312 27.7307 26.3772C27.751 26.4003 27.751 26.4003 27.7711 26.423C28.0853 26.7771 28.053 27.3188 27.6989 27.633C27.3448 27.9472 26.8031 27.9149 26.4889 27.5608C26.4658 27.5347 26.4658 27.5347 26.443 27.5088C26.3984 27.458 26.2379 27.2732 26.2026 27.2331C25.5793 26.5225 25.2011 26.2857 24.4951 26.2857C24.0665 26.2857 23.884 26.3953 23.3883 26.8915C22.5996 27.681 22.0682 28 21.0691 28C20.0703 28 19.5389 27.6809 18.7511 26.8922C18.2549 26.3953 18.0723 26.2857 17.643 26.2857C17.213 26.2857 17.0283 26.3962 16.5298 26.8929C15.7381 27.6817 15.2064 28 14.2092 28C13.2096 28 12.6783 27.6797 11.8939 26.8896C11.4021 26.3942 11.2222 26.2857 10.7974 26.2857C10.3727 26.2857 10.1913 26.3947 9.69941 26.888L9.69645 26.8909C8.90977 27.6799 8.37637 28 7.37565 28C6.18413 28 5.47519 27.5926 4.64676 26.6854C4.62296 26.6594 4.31944 26.3212 4.23073 26.2263ZM4.23073 22.7977C3.90761 22.4517 3.92613 21.9093 4.27209 21.5862C4.61805 21.2631 5.16044 21.2816 5.48356 21.6276C5.58612 21.7374 5.899 22.0859 5.91265 22.1009C6.44673 22.6857 6.74503 22.8571 7.37565 22.8571C7.8055 22.8571 7.98864 22.7472 8.48256 22.2519C9.27028 21.462 9.80129 21.1429 10.7974 21.1429C11.7953 21.1429 12.3256 21.4627 13.1093 22.2521L13.1104 22.2533C13.6019 22.7483 13.7825 22.8571 14.2092 22.8571C14.637 22.8571 14.8208 22.7471 15.3185 22.2513L15.3198 22.2499C16.1111 21.4616 16.6438 21.1429 17.643 21.1429C18.643 21.1429 19.175 21.4622 19.9633 22.2514C20.459 22.7478 20.6412 22.8571 21.0691 22.8571C21.4973 22.8571 21.6797 22.7477 22.1753 22.2516C22.9641 21.462 23.4956 21.1429 24.4951 21.1429C25.7981 21.1429 26.5746 21.6289 27.4914 22.6741C27.5305 22.7186 27.6903 22.9026 27.7307 22.9486C27.751 22.9717 27.751 22.9717 27.7711 22.9944C28.0853 23.3485 28.053 23.8902 27.6989 24.2044C27.3448 24.5186 26.8031 24.4863 26.4889 24.1322C26.4658 24.1061 26.4658 24.1061 26.443 24.0802C26.3984 24.0294 26.2379 23.8447 26.2026 23.8045C25.5793 23.0939 25.2011 22.8571 24.4951 22.8571C24.0665 22.8571 23.884 22.9667 23.3883 23.4629C22.5996 24.2524 22.0682 24.5714 21.0691 24.5714C20.0703 24.5714 19.5389 24.2524 18.7511 23.4636C18.2549 22.9668 18.0723 22.8571 17.643 22.8571C17.213 22.8571 17.0283 22.9676 16.5298 23.4644C15.7381 24.2531 15.2064 24.5714 14.2092 24.5714C13.2096 24.5714 12.6783 24.2512 11.8939 23.461C11.4021 22.9657 11.2222 22.8571 10.7974 22.8571C10.3727 22.8571 10.1913 22.9661 9.69941 23.4594L9.69645 23.4624C8.90977 24.2513 8.37637 24.5714 7.37565 24.5714C6.18413 24.5714 5.47519 24.1641 4.64676 23.2569C4.62296 23.2308 4.31944 22.8927 4.23073 22.7977Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Waterpolo</span>
                                                        <div className="bt158"><span className="bt159">14</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/cross-country-46">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-skirace" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M23.0915 13.7778H20.5556C20.503 13.7778 20.4512 13.7747 20.4002 13.7688C20.1975 13.7579 19.9943 13.7003 19.8064 13.5919L16.2186 11.5204L13.8506 15.6219L18.0341 18.236C18.6586 18.6262 18.8485 19.4488 18.4583 20.0733C18.4451 20.0944 18.4314 20.115 18.4172 20.1352C18.3893 20.2181 18.3529 20.2994 18.3074 20.3781L14.9333 26.2222H24.5556C24.7626 26.2222 25.4444 25.5396 25.4444 25.3333C25.4445 24.8424 25.8425 24.4444 26.3334 24.4444C26.8243 24.4445 27.2222 24.8425 27.2222 25.3334C27.2222 26.521 25.7448 28 24.5556 28H5.88889C5.39797 28 5 27.602 5 27.1111C5 26.6202 5.39797 26.2222 5.88889 26.2222H12.3113C12.2204 25.8907 12.257 25.5244 12.4425 25.2031L15.5468 19.8263L11.3442 17.2002C10.7197 16.81 10.5298 15.9874 10.9201 15.3629C10.9318 15.3441 10.9439 15.3258 10.9564 15.3078C10.9699 15.2802 10.9844 15.2529 11 15.2259L14.5556 9.06752C14.8735 8.51686 15.5249 8.27877 16.1074 8.46107C16.2492 8.48848 16.3889 8.53957 16.521 8.61583L20.8429 11.1111H23.821L24.0963 10.1049C24.1611 9.86818 24.4055 9.72876 24.6423 9.79353C24.8791 9.85831 25.0185 10.1027 24.9537 10.3395L24.7046 11.2501C25.1431 11.4685 25.4444 11.9213 25.4444 12.4444C25.4444 13.1808 24.8475 13.7778 24.1111 13.7778H24.013L21.3898 23.3658C21.3251 23.6025 21.0806 23.742 20.8439 23.6772C20.6071 23.6124 20.4677 23.368 20.5325 23.1312L23.0915 13.7778ZM16.5556 7.55463C15.5737 7.55463 14.7778 6.7589 14.7778 5.77731C14.7778 4.79573 15.5737 4 16.5556 4C17.5374 4 18.3333 4.79573 18.3333 5.77731C18.3333 6.7589 17.5374 7.55463 16.5556 7.55463Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Cross-Country</span>
                                                        <div className="bt158"><span className="bt159">2</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/floorball-7">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-floorball" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M8.56328 19.3788V26.0213L10.316 26.02V19.9031L8.91739 19.4619C8.80144 19.4253 8.68307 19.3976 8.56328 19.3788V19.3788ZM7.68692 19.4016C6.59611 19.6312 5.77372 20.5952 5.76558 21.7555L5.75277 23.5818C5.75272 23.5912 5.75272 23.5912 5.75272 23.6006C5.75361 24.7707 6.58378 25.7464 7.68692 25.9723V19.4016ZM11.1924 20.1796V26.0193L12.9451 26.018V20.7326L11.1924 20.1796ZM13.8214 21.0091V26.0173L15.5154 26.016C16.2636 26.0154 16.9497 25.5993 17.296 24.936L26.0634 8.14366C26.4638 7.37683 26.1886 6.43071 25.4395 5.99819C25.4148 5.98415 25.4148 5.98415 25.3897 5.97077C24.6967 5.60691 23.84 5.87371 23.4761 6.56668L16.2598 20.3102C15.877 21.0393 15.027 21.3895 14.2418 21.1417L13.8214 21.0091ZM7.31278 10.9021C7.27149 10.8004 7.24874 10.6892 7.24874 10.5727C7.24874 10.0887 7.6411 9.69633 8.1251 9.69633C8.6091 9.69633 9.00146 10.0887 9.00146 10.5727C9.00146 10.6892 8.97871 10.8004 8.93742 10.9021C9.97847 10.617 10.7984 9.79698 11.0836 8.75593C10.9819 8.79723 10.8707 8.81997 10.7542 8.81997C10.2702 8.81997 9.87782 8.42761 9.87782 7.94361C9.87782 7.45961 10.2702 7.06725 10.7542 7.06725C10.8707 7.06725 10.9819 7.09 11.0836 7.13129C10.7984 6.09024 9.97847 5.27027 8.93742 4.98508C8.97871 5.08679 9.00146 5.19801 9.00146 5.31454C9.00146 5.79854 8.6091 6.1909 8.1251 6.1909C7.6411 6.1909 7.24874 5.79854 7.24874 5.31454C7.24874 5.19801 7.27149 5.08679 7.31278 4.98508C6.27173 5.27027 5.45176 6.09024 5.16657 7.13129C5.26828 7.09 5.37949 7.06725 5.49603 7.06725C5.98002 7.06725 6.37238 7.45961 6.37238 7.94361C6.37238 8.42761 5.98002 8.81997 5.49603 8.81997C5.37949 8.81997 5.26828 8.79723 5.16657 8.75593C5.45176 9.79698 6.27173 10.617 7.31278 10.9021ZM8.1251 11.8872C5.9471 11.8872 4.18149 10.1216 4.18149 7.94361C4.18149 5.76562 5.9471 4 8.1251 4C10.3031 4 12.0687 5.76562 12.0687 7.94361C12.0687 10.1216 10.3031 11.8872 8.1251 11.8872ZM8.1251 8.81997C7.6411 8.81997 7.24874 8.42761 7.24874 7.94361C7.24874 7.45961 7.6411 7.06725 8.1251 7.06725C8.6091 7.06725 9.00146 7.45961 9.00146 7.94361C9.00146 8.42761 8.6091 8.81997 8.1251 8.81997ZM21.9243 5.75187C22.7382 4.20186 24.6545 3.6051 26.2045 4.41896C26.2606 4.44888 26.2606 4.44888 26.3158 4.48029C27.8783 5.38236 28.4521 7.35557 27.6171 8.95485L18.8497 25.7472C18.2015 26.9888 16.9173 27.7677 15.5167 27.7687L8.17878 27.7743C5.87267 27.7761 4.00176 25.9081 4 23.6019C4.00001 23.5857 4.00001 23.5857 4.0001 23.5695L4.01291 21.7432C4.02908 19.4371 5.91161 17.5808 8.21767 17.597C8.63405 17.5999 9.04766 17.6651 9.44476 17.7904L14.728 19.4573L21.9243 5.75187Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Floorball</span>
                                                        <div className="bt158"><span className="bt159">11</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/cycling-17">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-cycling" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M17.7366 14.9495C18.2112 15.2389 18.4596 15.8159 18.3085 16.38L17.1993 20.5197C17.0155 21.2056 16.3105 21.6126 15.6246 21.4288C14.9387 21.245 14.5317 20.54 14.7155 19.8542L15.5952 16.5708L11.9344 14.3827C11.3409 14.0279 11.142 13.2624 11.4877 12.6636C11.4908 12.6582 11.4939 12.6529 11.4971 12.6476C11.5658 12.5327 11.6503 12.433 11.7462 12.3498C11.7528 12.3429 11.7595 12.3361 11.7663 12.3293L16.615 7.48057C16.9035 7.19205 17.2951 7.06932 17.6712 7.11238C18.0474 7.06932 18.4389 7.19205 18.7274 7.48057L23.5761 12.3293C24.0782 12.8314 24.0782 13.6455 23.5761 14.1476C23.074 14.6497 22.26 14.6497 21.7579 14.1476L17.6712 10.0609L14.6377 13.0944L17.6693 14.9064C17.6923 14.9202 17.7148 14.9345 17.7366 14.9495ZM9.14286 16.8571C11.979 16.8571 14.2857 19.1643 14.2857 22C14.2857 24.8368 11.9789 27.1429 9.14286 27.1429C6.3058 27.1429 4 24.8367 4 22C4 19.1643 6.30675 16.8571 9.14286 16.8571ZM9.14286 18.5714C7.25359 18.5714 5.71429 20.111 5.71429 22C5.71429 23.89 7.25263 25.4286 9.14286 25.4286C11.0323 25.4286 12.5714 23.8899 12.5714 22C12.5714 20.111 11.0321 18.5714 9.14286 18.5714ZM17.7143 22C17.7143 19.1633 20.0198 16.8571 22.8567 16.8571C25.6933 16.8571 28 19.1641 28 22C28 24.8372 25.6939 27.1429 22.8567 27.1429C20.0195 27.1429 17.7143 24.8373 17.7143 22ZM19.4286 22C19.4286 23.8906 20.9664 25.4286 22.8567 25.4286C24.7472 25.4286 26.2857 23.8904 26.2857 22C26.2857 20.1108 24.7465 18.5714 22.8567 18.5714C20.9667 18.5714 19.4286 20.11 19.4286 22ZM21.1429 7.42857C20.1961 7.42857 19.4286 6.66106 19.4286 5.71429C19.4286 4.76751 20.1961 4 21.1429 4C22.0896 4 22.8571 4.76751 22.8571 5.71429C22.8571 6.66106 22.0896 7.42857 21.1429 7.42857Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Cycling</span>
                                                        <div className="bt158"><span className="bt159">4</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/specials-18">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-specials" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M24.1102 14.6035L25.8704 17.6521C26.3607 18.5014 26.0697 19.5874 25.2204 20.0777C24.9591 20.2286 24.6636 20.3103 24.3619 20.3153L18.8205 20.4068C18.6169 20.4101 18.4151 20.3995 18.2163 20.3756L19.9269 23.3384C20.785 24.8247 20.2757 26.7251 18.7895 27.5832C17.3033 28.4412 15.4029 27.932 14.5448 26.4458L12.5472 22.9859C10.424 24.2117 7.7091 23.4842 6.48328 21.3611L5.59547 19.8233C4.36965 17.7001 5.0971 14.9852 7.22028 13.7594L12.0575 10.9666C12.1583 10.4972 12.336 10.0406 12.5905 9.61615L15.4404 4.86284C15.9447 4.02177 17.0353 3.74874 17.8764 4.25302C18.1352 4.40819 18.3502 4.62676 18.501 4.88809L20.7051 8.7056C22.0425 8.43849 23.5299 9.15928 24.3298 10.5448C25.1297 11.9302 25.0103 13.5788 24.1102 14.6035ZM23.6277 13.7678C24.0968 13.024 24.1106 11.9406 23.561 10.9887C23.0114 10.0367 22.0663 9.50697 21.1876 9.54126L23.6277 13.7678ZM12.5533 14.1184L11.9525 13.0776L8.1081 15.2972C6.83419 16.0326 6.39772 17.6616 7.13321 18.9355L8.02103 20.4732C8.75652 21.7471 10.3855 22.1836 11.6594 21.4481L15.5037 19.2286L14.9029 18.1878L12.5533 14.1184ZM16.4406 17.3C16.9242 18.1377 17.824 18.6473 18.7912 18.6314L24.3326 18.5399L16.9633 5.7759L14.1134 10.5292C13.616 11.3588 13.6075 12.3929 14.0911 13.2305L16.4406 17.3ZM16.3916 20.7663L14.0849 22.0981L16.0825 25.558C16.4503 26.1949 17.2647 26.4132 17.9017 26.0454C18.5386 25.6777 18.7569 24.8632 18.3891 24.2263L16.3916 20.7663ZM27.4665 14.5209C27.3818 14.751 27.1267 14.8689 26.8966 14.7842C26.6665 14.6996 26.5486 14.4444 26.6332 14.2144C27.2212 12.616 27.084 10.8369 26.216 9.33337C25.3478 7.82976 23.8756 6.82134 22.1972 6.53144C21.9556 6.48972 21.7936 6.26005 21.8353 6.01846C21.8771 5.77687 22.1067 5.61485 22.3483 5.65658C24.2837 5.99086 25.9835 7.15518 26.9848 8.88947C27.986 10.6236 28.1445 12.6777 27.4665 14.5209Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Specials</span>
                                                        <div className="bt158"><span className="bt159">30</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/darts-22">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-darts" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M21.2414 12.5714C20.3872 13.4373 19.4972 14.2945 18.5714 15.1429H17.472L17.4662 15.1371L15.8747 16.7314C15.7075 16.8989 15.4362 16.8991 15.2686 16.7319C15.1011 16.5647 15.1009 16.2933 15.2681 16.1258L16.8571 14.534V13.4286C17.8481 12.3423 18.8481 11.3096 19.8571 10.3305V7.42857C19.8571 7.29368 19.9207 7.16665 20.0286 7.08571L23.4571 4.51429C23.7397 4.30239 24.1429 4.50398 24.1429 4.85714V6.53786C24.4033 6.32906 24.6644 6.12365 24.926 5.92165C25.2928 5.63842 25.8753 5.6333 26.1396 5.98098C26.4039 6.32866 26.2859 6.82777 25.9754 7.22209C25.6951 7.578 25.4093 7.93254 25.1179 8.28571H27.5714C27.9532 8.28571 28.1445 8.74735 27.8745 9.01733L24.4459 12.4459C24.3655 12.5263 24.2565 12.5714 24.1429 12.5714H21.2414ZM22.0725 11.7143H23.9653L26.5368 9.14286H24.3973C23.6563 10.0083 22.8814 10.8655 22.0725 11.7143ZM20.7143 9.5137C21.5651 8.71774 22.4222 7.9595 23.2857 7.23899V5.71429L20.7143 7.64286V9.5137ZM17.8395 8.06588C18.0701 8.11915 18.2139 8.34929 18.1606 8.57991C18.1074 8.81053 17.8772 8.95431 17.6466 8.90104C17.1111 8.77734 16.5598 8.71429 16 8.71429C11.9762 8.71429 8.71429 11.9762 8.71429 16C8.71429 20.0238 11.9762 23.2857 16 23.2857C20.0238 23.2857 23.2857 20.0238 23.2857 16C23.2857 15.482 23.2317 14.9713 23.1256 14.4735C23.0763 14.242 23.224 14.0143 23.4554 13.965C23.6869 13.9157 23.9146 14.0633 23.9639 14.2948C24.0825 14.8513 24.1429 15.4219 24.1429 16C24.1429 20.4972 20.4972 24.1429 16 24.1429C11.5028 24.1429 7.85714 20.4972 7.85714 16C7.85714 11.5028 11.5028 7.85714 16 7.85714C16.6248 7.85714 17.2408 7.9276 17.8395 8.06588ZM16 11.2857C16.2367 11.2857 16.4286 11.4776 16.4286 11.7143C16.4286 11.951 16.2367 12.1429 16 12.1429C13.8698 12.1429 12.1429 13.8698 12.1429 16C12.1429 18.1302 13.8698 19.8571 16 19.8571C18.1302 19.8571 19.8571 18.1302 19.8571 16C19.8571 15.7633 20.049 15.5714 20.2857 15.5714C20.5224 15.5714 20.7143 15.7633 20.7143 16C20.7143 18.6036 18.6036 20.7143 16 20.7143C13.3964 20.7143 11.2857 18.6036 11.2857 16C11.2857 13.3964 13.3964 11.2857 16 11.2857ZM18.8163 4.33252C19.2765 4.44325 19.5599 4.90612 19.4492 5.36638C19.3384 5.82663 18.8756 6.10998 18.4153 5.99926C17.631 5.81058 16.8221 5.71429 16 5.71429C10.3194 5.71429 5.71429 10.3194 5.71429 16C5.71429 21.6806 10.3194 26.2857 16 26.2857C21.6806 26.2857 26.2857 21.6806 26.2857 16C26.2857 15.1014 26.1707 14.2187 25.9458 13.367C25.825 12.9093 26.0981 12.4403 26.5558 12.3195C27.0135 12.1986 27.4825 12.4717 27.6033 12.9294C27.8658 13.9237 28 14.9534 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C16.9575 4 17.9009 4.11231 18.8163 4.33252Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Darts</span>
                                                        <div className="bt158"><span className="bt159">26</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/alpine-skiing-43">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-alpineskiing" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M11.4683 8.54318L8.21349 6.66402C8.00804 6.54541 7.93765 6.28271 8.05627 6.07726C8.17488 5.87182 8.43758 5.80143 8.64303 5.92004L11.1741 7.38136C11.1111 6.76337 11.5035 6.17335 12.1229 6.0074C12.1286 6.00536 12.1342 6.0034 12.1398 6.00148L14.8434 5.07056C15.2491 4.93083 15.6769 5.00544 16.0034 5.23425C16.0832 5.26547 16.1615 5.30295 16.2374 5.34678L20.9675 8.0777C21.3012 8.27039 21.5575 8.56775 21.7001 8.91883L23.9153 12.7556L27.3555 14.7418C27.9718 15.0976 28.183 15.8857 27.8271 16.502C27.4713 17.1184 26.6832 17.3295 26.0669 16.9737L23.1172 15.2707C23.1059 15.2655 23.0948 15.2596 23.0837 15.2533L14.626 10.3702L15.618 14.0726C15.6331 14.1289 15.6442 14.1853 15.6516 14.2416C15.8005 14.5995 15.7869 15.0203 15.5781 15.3819L13.4304 19.1018C13.0746 19.7182 12.2865 19.9294 11.6702 19.5735C11.0538 19.2177 10.8426 18.4296 11.1985 17.8132L13.0793 14.5556L11.4683 8.54318ZM14.3115 9.19668L21.1712 13.1571L20.3105 11.6663L14.0691 8.06287L14.0129 8.08223L14.3115 9.19668ZM4.42968 18.3692C4.01879 18.1319 3.87801 17.6065 4.11524 17.1956C4.35247 16.7847 4.87787 16.644 5.28876 16.8812C10.9306 20.1385 10.9306 20.1385 19.7962 25.2571C20.0469 25.4017 20.8218 25.1994 20.9699 24.9428C21.2072 24.5319 21.7326 24.3911 22.1435 24.6283C22.5544 24.8655 22.6951 25.3909 22.4579 25.8018C21.8329 26.8844 20.0057 27.3616 18.9373 26.7452L4.42968 18.3692ZM23.5092 9.68284C22.6874 9.20838 22.4058 8.15757 22.8803 7.33579C23.3547 6.51401 24.4056 6.23245 25.2273 6.7069C26.0491 7.18136 26.3307 8.23217 25.8562 9.05395C25.3818 9.87573 24.331 10.1573 23.5092 9.68284Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Alpine Skiing</span>
                                                        <div className="bt158"><span className="bt159">6</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/biathlon-44">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-biathlon" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path
                                                            d="M18.85 11.6311L21.0938 9.38725C21.6145 8.86655 22.4587 8.86655 22.9794 9.38725C23.5001 9.90795 23.5001 10.7522 22.9794 11.2729L19.8367 14.4156C19.5652 14.6871 19.2057 14.817 18.85 14.8054C18.4943 14.817 18.1348 14.6871 17.8633 14.4156L16.6278 13.1801L15.3923 14.4156C15.1208 14.6871 14.7613 14.817 14.4056 14.8054C14.0499 14.817 13.6904 14.6871 13.4188 14.4156L10.2761 11.2729C9.75544 10.7522 9.75544 9.90795 10.2761 9.38725C10.7968 8.86655 11.6411 8.86655 12.1618 9.38725L14.4056 11.6311L16.6494 9.38725C17.1701 8.86655 18.0143 8.86655 18.535 9.38725C19.0557 9.90795 19.0557 10.7522 18.535 11.2729L18.5134 11.2945L18.85 11.6311ZM16.5338 19.4917L19.9543 25.4162C20.1007 25.6699 20.1544 25.9517 20.1257 26.2222H24.4442C24.7437 26.2221 25.3333 25.6399 25.3333 25.3333C25.3333 24.8424 25.7313 24.4444 26.2222 24.4444C26.7131 24.4444 27.1111 24.8424 27.1111 25.3333C27.1111 26.6267 25.7207 27.9996 24.4444 28H4.88889C4.39797 28 4 27.602 4 27.1111C4 26.6202 4.39797 26.2222 4.88889 26.2222H11.2004V18.6667V14.6667L13.4528 16.8946C13.9735 17.4153 14.8623 17.4153 15.383 16.8946L16.5338 15.7439V19.4917ZM13.8671 26.2222H17.3404L13.8671 20.2063V26.2222ZM14.6005 8.88889H13.7778C13.5323 8.88889 13.3333 8.6899 13.3333 8.44444C13.3333 8.19898 13.5323 8 13.7778 8H25.7778V7.55556H26.6667V8H27.1111C27.3566 8 27.5556 8.19898 27.5556 8.44444C27.5556 8.6899 27.3566 8.88889 27.1111 8.88889H15.64C15.6368 8.89479 15.6334 8.90065 15.6298 8.90646L15.0673 9.83239C15.0124 9.92283 14.927 9.99069 14.8265 10.0238L14.264 10.209C14.0308 10.2857 13.7796 10.1589 13.7028 9.9258C13.6261 9.69265 13.7529 9.44142 13.986 9.36466L14.3928 9.23075L14.6005 8.88889ZM14.6667 7.55556C13.6848 7.55556 12.8889 6.75962 12.8889 5.77778C12.8889 4.79594 13.6848 4 14.6667 4C15.6485 4 16.4444 4.79594 16.4444 5.77778C16.4444 6.75962 15.6485 7.55556 14.6667 7.55556Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Biathlon</span>
                                                        <div className="bt158"><span className="bt159">4</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/ski-jumping-48">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-skijumping" width="32" height="32"
                                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M15.7695 10.4968H10.5726C9.79982 10.4968 9.17334 9.87029 9.17334 9.09749C9.17334 8.3247 9.79982 7.69823 10.5726 7.69823H19.9011C20.6738 7.69823 21.3003 8.3247 21.3003 9.09749C21.3003 9.42976 21.1845 9.73497 20.9911 9.97497C20.9457 10.0434 20.8936 10.1088 20.8348 10.1702L8.38822 23.1777C7.86559 23.7239 6.99914 23.743 6.45296 23.2204C6.44569 23.2134 6.43851 23.2064 6.4314 23.1993L6.40984 23.1777C5.87188 22.6398 5.86231 21.7706 6.38828 21.2209L12.6153 14.7133C12.4649 14.2322 12.5802 13.6861 12.9613 13.305L15.7695 10.4968ZM21.8799 7.18493C21.1513 6.45633 21.1513 5.27504 21.8799 4.54645C22.6085 3.81785 23.7898 3.81785 24.5184 4.54645C25.247 5.27504 25.247 6.45633 24.5184 7.18493C23.7898 7.91353 22.6085 7.91353 21.8799 7.18493ZM7.54984 27.8749C7.10367 28.1325 6.53315 27.9796 6.27555 27.5334C6.01795 27.0872 6.17082 26.5167 6.617 26.2591L24.3996 15.9924C24.7494 15.7959 24.9402 15.0776 24.7358 14.7309C24.4741 14.2871 24.6218 13.7152 25.0656 13.4536C25.5094 13.1919 26.0813 13.3396 26.343 13.7834C27.0769 15.0283 26.5774 16.909 25.3229 17.6136L7.54984 27.8749Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Ski Jumping</span>
                                                        <div className="bt158"><span className="bt159">1</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                        <div className="bt143" data-editor-id="verticalNavbarSportItem">
                                            <div className="bt147">
                                                <div className="bt148" data-editor-id="verticalNavbarToggleButton"></div>
                                            </div><a className="bt145" href="/wrestling-86">
                                                <div className="bt150">
                                                    <div className="bt153"><svg className="bt154" data-editor-id="expandedNavbarIcon"
                                                        data-cy="sport-wrestling" width="32" height="32" viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ fill: 'currentcolor', color: 'rgb(255, 255, 255)', width: 'auto', height: '32px' }}>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M22.3188 5C21.1363 5 20.1777 5.95588 20.1777 7.13118C20.1777 8.31372 21.1363 9.26236 22.3188 9.26236C23.4939 9.26236 24.4497 8.31372 24.45 7.13118C24.45 5.95581 23.4941 5 22.3188 5ZM12.9531 8.26591C11.7777 8.26591 10.8219 9.22179 10.8219 10.3971C10.8222 11.5796 11.778 12.5283 12.9531 12.5283C14.1356 12.5283 15.0942 11.5796 15.0942 10.3971C15.0942 9.22172 14.1356 8.26591 12.9531 8.26591ZM24.623 9.25252C24.2348 9.23912 23.8375 9.31998 23.464 9.50574C23.026 9.72375 22.6852 10.0558 22.4568 10.4475C22.2207 10.915 22.0848 11.4207 21.4902 11.7515C21.2331 11.8783 20.9528 11.943 20.6388 11.9755C19.7311 12.0695 18.4811 11.7433 17.1309 11.3512C16.0594 11.0402 15.5929 12.6476 16.6646 12.9583C18.018 13.3514 19.4119 13.7842 20.8112 13.6394C21.1574 13.6035 21.4997 13.5211 21.8308 13.3904C21.7743 13.5697 21.7138 13.7322 21.6473 13.8659C21.4109 14.3408 21.1607 14.5464 20.8281 14.6744C20.1632 14.9303 18.9077 14.7173 17.3762 14.0806C16.3373 13.6305 15.682 15.2063 16.7339 15.6255C18.4035 16.3197 19.9963 16.7872 21.4296 16.2354C22.1461 15.9593 22.7577 15.3892 23.1449 14.6109C23.1727 14.5551 23.1975 14.4958 23.2233 14.4378L24.6903 17.3857L21.3845 20.3926C21.2344 20.5293 21.1213 20.7019 21.0563 20.8944L19.4661 25.6005C18.9254 27.125 21.2356 27.9056 21.7304 26.3654L23.2217 21.9524L26.3033 19.1491C26.6491 18.8346 26.8083 18.843 26.7664 19.2724L26.4827 22.1927C26.4512 22.5137 26.5509 22.8339 26.7589 23.0804L29.8644 26.7552C30.8917 27.9874 32.7336 26.4306 31.69 25.2123L28.9102 21.9228L29.3296 17.6175V17.614C29.471 16.1654 29.4708 16.1611 28.7907 14.7943C28.7875 14.7943 28.787 14.7946 28.787 14.7899L26.6975 10.5917C26.2882 9.76953 25.4787 9.28363 24.6241 9.25341L24.623 9.25252ZM9.05847 10.9107C8.44166 10.9075 7.82431 11.1421 7.3499 11.6129L4.34297 14.5956C2.51211 16.4116 2.51236 16.4113 2.77452 19.0996L3.10066 22.4475L0.320909 25.7377C-0.751283 26.9582 1.12224 28.541 2.14656 27.2801L5.25248 23.6052C5.46056 23.3587 5.56027 23.0388 5.52877 22.7176L5.24628 19.8216C5.18576 19.2 5.18576 19.2 5.72917 19.6946L8.78892 22.4781L10.2802 26.8918C10.7758 28.4302 13.0835 27.6505 12.5446 26.1269L10.9543 21.4195C10.8893 21.2271 10.7765 21.0545 10.6262 20.9178L7.59743 18.1628L9.26683 16.5065C9.84768 17.3434 10.5406 17.9964 11.3514 18.4341C12.5129 19.0616 13.8678 19.234 15.3286 19.0489C16.4326 18.9066 16.2227 17.2513 15.1183 17.3889C13.9075 17.5422 12.9479 17.3949 12.1463 16.9621C11.5196 16.6236 10.965 16.0928 10.4764 15.3076L10.5897 15.195C10.8204 15.372 11.06 15.5333 11.313 15.6699C12.4744 16.2974 13.8294 16.4705 15.2902 16.2855C16.3941 16.1431 16.1843 14.4879 15.0799 14.6255C13.8691 14.7788 12.8229 14.7101 12.1079 14.1979C11.3926 13.6857 11.3128 12.2096 10.7616 11.626C10.2909 11.1515 9.67505 10.9132 9.05847 10.9107Z">
                                                        </path>
                                                    </svg>
                                                        <span className="bt157">Wrestling</span>
                                                        <div className="bt158"><span className="bt159">6</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="bt141"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="simplebar-placeholder" style={{ width: '320px', height: '2515px' }}></div>
                </div>
                <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                    <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div>
                </div>
                <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
                    <div className="simplebar-scrollbar"
                        style={{ height: '91px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar