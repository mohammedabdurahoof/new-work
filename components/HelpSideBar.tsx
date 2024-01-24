"use client"

import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

function HelpSideBar({ children }: Props) {
    const pathname = usePathname();

    return (
        <div id="helpcenter" className="page-max-width-wrap s143gsbw">
            <div className="gnkt6sx">
                <p className="title">
                    <svg className="s1ff97qc icon">
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Fairness"></use>
                    </svg>
                    <span className="ttc">help center</span>
                </p>
                <button className="close-icon i1gm0mn8">
                    <svg className="s1ff97qc icon">
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Close"></use>
                    </svg>
                </button>
            </div>
            <div className="pyqxnkg">
                <div className="content-area false">
                    <div className="menu">
                        <a href="/help/provably-fair" keep-scroll-position="true" className={pathname == "/help/provably-fair" ? "select is-active" : ""}>
                            Provably Fair
                        </a>
                        <a href="/help/privacy" keep-scroll-position="true" className={pathname == "/help/privacy" ? "select is-active" : ""}>
                            Privacy Policy
                        </a>
                        <a href="/help/terms-service" keep-scroll-position="true" className={pathname == "/help/terms-service" ? "select is-active" : ""}>
                            Terms Of Service
                        </a>
                        <a href="/help/terms-sports" keep-scroll-position="true" className={pathname == "/help/terms-sports" ? "select is-active" : ""}>
                            Terms Of Sports
                        </a>
                        <a href="/help/bonus" keep-scroll-position="true" className={pathname == "/help/bonus" ? "select is-active" : ""}>
                            Bonus Terms
                        </a>
                        <a href="/help/coinlimit" keep-scroll-position="true" className={pathname == "/help/coinlimit" ? "select is-active" : ""}>
                            Coin Accuracy Limit
                        </a>
                        <a href="/help/contactus" keep-scroll-position="true" className={pathname == "/help/contactus" ? "select is-active" : ""}>
                            Support
                        </a>
                        <a href="/help/fee" keep-scroll-position="true" className={pathname == "/help/fee" ? "select is-active" : ""}>
                            Fee
                        </a>
                        <a href="/help/googlecheck" keep-scroll-position="true" className={pathname == "/help/googlecheck" ? "select is-active" : ""}>
                            Google Authenticator
                        </a>
                        <a href="/help/faq" keep-scroll-position="true" className={pathname == "/help/faq" ? "select is-active" : ""}>
                            FAQs
                        </a>
                        <a href="/help/passcurrency" keep-scroll-position="true" className={pathname == "/help/passcurrency" ? "select is-active" : ""}>
                            Currency
                        </a>
                        <a href="/help/reglog" keep-scroll-position="true" className={pathname == "/help/reglog" ? "select is-active" : ""}>
                            Registration and Login
                        </a>
                        <a href="/help/swappolicy" keep-scroll-position="true" className={pathname == "/help/swappolicy" ? "select is-active" : ""}>
                            Swap Policy
                        </a>
                        <a href="/help/gameble-aware" keep-scroll-position="true" className={pathname == "/help/gameble-aware" ? "select is-active" : ""}>
                            Gamble Aware
                        </a>
                        <a href="/help/protect-minors" keep-scroll-position="true" className={pathname == "/help/protect-minors" ? "select is-active" : ""}>
                            Protecting Minors
                        </a>
                        <a href="/help/providers" keep-scroll-position="true" className={pathname == "/help/providers" ? "select is-active" : ""}>
                            Providers
                        </a>
                        <a href="/help/aml" keep-scroll-position="true" className={pathname == "/help/aml" ? "select is-active" : ""}>
                            AML
                        </a>
                        <a href="/help/self-exclusion" keep-scroll-position="true" className={pathname == "/help/self-exclusion" ? "select is-active" : ""}>
                            Self-exclusion
                        </a>
                        <a href="/help/responsible-gambling" keep-scroll-position="true" className={pathname == "/help/responsible-gambling" ? "select is-active" : ""}>
                            Responsible Gambling
                        </a>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HelpSideBar