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
                                <h2>Google Authenticator</h2>
                                <p>
                                    Google authenticator could provide an additional layer of security
                                    protection for your account. It is a software token that implements a 2-step
                                    verification program. In order to use Google authenticator, you must have a
                                    mobile phone because it will be installed as a mobile application. You can
                                    also use Google authenticator when offline.
                                </p>
                                <p>
                                    Google authenticator uses an algorithm to calculate one-time passwords based
                                    on time. Simply put, once the application is started, Google authenticator
                                    will display a randomly generated 6-digit sequence of numbers, ie, a
                                    one-time password. If you have enabled 2FA in your account, then in addition
                                    to entering your usual password, you also need to enter the randomly
                                    generated one-time password. 2FA provides additional security protection
                                    because it makes sure that others cannot login to your account with your
                                    username and password alone.
                                </p>
                                <p>
                                    We highly values the security of the players, so we strongly recommend you
                                    to use Google authenticator. This small extra step could protect you against
                                    necessary headache and anxiety.
                                </p>
                                <p>
                                    If you have enabled Google authenticator, you will be prompted to complete
                                    2FA every time you login or withdraw. Furthermore, please print out the QR
                                    code or write down the manual code that could recover your account. In case
                                    of mobile phone breakdown or loss, this will help you to a great extent.
                                </p>
                                <p>
                                    To know more about Google authenticator.
                                    <a href="https://support.google.com/accounts/answer/1066447" target="_blank"
                                        rel="noopener noreferrer">
                                        Google authenticator
                                        <svg className="hashbet " version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1024 1024">
                                            <path
                                                d="M365.386 83.556c31.44 0 56.926 25.486 56.926 56.926 0 30.897-24.617 56.046-55.307 56.904l-1.62 0.022h-170.777v629.186h629.186v-170.777c0-30.897 24.617-56.046 55.307-56.904l1.62-0.022c30.897 0 56.045 24.617 56.904 55.307l0.022 1.62v179.768c0 57.258-45.887 103.796-102.894 104.848l-1.968 0.017h-647.16c-57.258 0-103.796-45.887-104.848-102.894l-0.017-1.968v-647.16c0-57.258 45.887-103.796 102.894-104.848l1.968-0.017h179.768zM611.108 84.556l1.62 0.013 227.481 4.701c57.907 1.009 104.028 48.774 103.019 106.677l-1.176 62.495-1.198 54.931-1.442 62.539-0.437 21.864c-0.034 1.776-0.066 3.547-0.094 5.315-0.549 31.434-26.475 56.472-57.909 55.926s-56.472-26.475-55.926-57.909l0.308-16.334 2.11-93 0.246-11.744-360.933 330.867c-23.176 21.246-59.187 19.678-80.428-3.495-20.849-22.748-19.728-57.854 2.233-79.234l1.267-1.193 355.396-325.787-134.861-2.783c-30.889-0.638-55.524-25.77-55.748-56.469l0.013-1.62c0.638-30.889 25.77-55.524 56.469-55.748z">
                                            </path>
                                        </svg></a>
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