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
                                <h2>Registration and Login</h2>
                                <p>
                                    You must be at least 18 years old to register. If you want to add your email
                                    address, please make sure the email address you entered is correct so that
                                    later it can be used in KYC account verification.
                                </p>
                                <p>
                                    You can login at any time. For added security, we recommend you to add 2FA.
                                    To know more about Google authenticator.
                                </p>
                                <p>
                                    If you need to change your registered email, we are so sorry, but we are not
                                    able to update this information. If you insist on changing your username
                                    and/or registered email, we suggest you close the current account and
                                    register a new one.
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