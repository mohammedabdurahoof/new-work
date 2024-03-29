import React from 'react'

function Tab() {
    return (
        <div className="bt265 bt259" style={{ height: '32px', margin: '16px 0px' }}>
            <div className="bt267">
                <div className="bt266" style={{ height: '32px' }}>
                    <div className="bt260">
                        {/* Highlights Tab */}
                        <div className="bt268 bt261 bt279 bt272 bt262" data-editor-id="headerNavigationButton">
                            <div className="bt275 bt264" data-editor-id="pillTabsIcon">
                                <div data-editor-id="subHeaderPillButtonsHotIcon" className="bt285">
                                    <svg
                                        data-cy="ic-hot-title"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '14px' }}
                                    >
                                        <path d="M1 2C1 1.44772 1.44772 1 2 1H5C5.55228 1 6 1.44772 6 2V7C6 7.55228 5.55228 8 5 8H2C1.44772 8 1 7.55228 1 7V2Z"></path>
                                        <path d="M8 8C8 7.44772 8.44772 7 9 7H14C14.5523 7 15 7.44772 15 8V14C15 14.5523 14.5523 15 14 15H9C8.44772 15 8 14.5523 8 14V8Z"></path>
                                        <path d="M1 11C1 10.4477 1.44772 10 2 10H5C5.55228 10 6 10.4477 6 11V14C6 14.5523 5.55228 15 5 15H2C1.44772 15 1 14.5523 1 14V11Z"></path>
                                        <path d="M8 2C8 1.44772 8.44772 1 9 1H14C14.5523 1 15 1.44772 15 2V4C15 4.55228 14.5523 5 14 5H9C8.44772 5 8 4.55228 8 4V2Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="bt276">
                                <div className="bt278">Highlights</div>
                            </div>
                        </div>

                        {/* Schedule Tab */}
                        <div className="bt268 bt261 bt279" data-editor-id="headerNavigationButton">
                            <div className="bt275 bt264" data-editor-id="pillTabsIcon">
                                <div data-editor-id="subHeaderPillButtonsScheduleIcon" className="bt288">
                                    <svg
                                        data-cy="ic-schedule-title"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '14px' }}
                                    >
                                        <g opacity="1">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1 4C1 3.89645 1.00525 3.79412 1.01549 3.69327C1.16912 2.1805 2.4467 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4ZM13 6H3V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6Z"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="bt276">
                                <div className="bt278">Schedule</div>
                            </div>
                        </div>

                        {/* Bets Feed Tab */}
                        <div className="bt268 bt261 bt279" data-editor-id="headerNavigationButton">
                            <div className="bt275 bt264" data-editor-id="pillTabsIcon">
                                <div data-editor-id="subHeaderPillButtonsTopBetsIcon" className="bt292">
                                    <svg
                                        data-cy="ic-top-bets"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ fill: 'currentcolor', color: 'inherit', width: 'auto', height: '14px' }}
                                    >
                                        <path
                                            d="M1 0C0.447715 0 0 0.447715 0 1V4C0 4.55228 0.447716 5 1 5H13C13.5523 5 14 4.55228 14 4V1C14 0.447715 13.5523 0 13 0H1Z"
                                        ></path>
                                        <path
                                            d="M0 8C0 7.44771 0.447715 7 1 7H13C13.5523 7 14 7.44772 14 8V9C14 9.55229 13.5523 10 13 10H1C0.447716 10 0 9.55228 0 9V8Z"
                                        ></path>
                                        <path
                                            d="M0 13C0 12.4477 0.447715 12 1 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H1C0.447716 14 0 13.5523 0 13Z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="bt276">
                                <div className="bt278">Bets Feed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab