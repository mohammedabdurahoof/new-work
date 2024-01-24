import React from 'react'
import '../../../styles/GroupPageLayout.6f234913.css'
import { HelpSideBar } from '@/components'

function page() {
    return (
        <HelpSideBar>
            <div className="right-info">
                <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="doc-page snxvmcx">
                        <div className="item">
                            <section>
                                <h2>BCSwap Policy</h2>
                                <p>
                                    BC.GAME has a strict anti-money laundering policy. This is in accordance
                                    with our AML procedures outlined in our terms of service.
                                </p>
                                <p>
                                    If deposits &amp; withdrawals are suspected of being attempts to Swap coins we
                                    reserve the right to hold withdrawals until completion of one of the
                                    following procedures
                                </p>
                                <p>
                                    1. Withdrawal is sent after full completion of account verification &amp; KYC
                                </p>
                                <p>2. Withdrawal refunded &amp; 1x gameplay is reached.</p>
                                <p>
                                    BCSwap will always try to ensure every matter is resolved &amp; the above can be
                                    modified to suit specific situations.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </HelpSideBar>
    )
}

export default page