import React from 'react'
import '../../../styles/GroupPageLayout.6f234913.css'
import '../../../styles/index-58be9981.css'
import { HelpSideBar } from '@/components'

function page() {
    return (
        <HelpSideBar>
            <div className="right-info">
                <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="doc-page snxvmcx">
                        <div className="item">
                            <section>
                                <h2>Self-exclusion</h2>
                                <p>
                                    Looking for a respite from BCgame? Begin the automated self-exclusion process by setting a
                                    limit, and you will be temporarily excluded from your account for the chosen duration. Please
                                    note that you won&apos;t have access to any products available on the website, and any remaining
                                    balances will be inaccessible during this period.
                                </p>
                                <p>
                                    An email will be sent to you for confirmation of your request.
                                </p>
                            </section>
                        </div>
                        <div className="ac2kcq0">
                            <section className="top-section">
                                <div className="select-bar">
                                    <p>Select the period you would like to self-exclude</p>
                                    <div className="ui-select select">
                                        <div className="select-trigger">1 Month<div className="arrow "><svg className="s1ff97qc icon">
                                            <use xlinkHref="/assets/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                        </svg></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="button-bar">
                                <div>
                                    <div className="ui-checkbox"></div><span>By requesting self-exclusion, I am acknowledge the
                                    </span><span className="link">rules of self-exclusion</span>&amp; and take full responsibility
                                </div><button className="ui-button button-normal s-conic" disabled>
                                    <div className="button-inner">Request Self-exclusion</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelpSideBar>
    )
}

export default page