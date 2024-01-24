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
                                <h2>Start your game journey</h2>
                                <p>Can I register on your website?</p>
                                <p>
                                    You must be at least 18 years old or reach the age of majority under your
                                    jurisdiction. You must be permitted to play online games by the laws
                                    applicable to you. For more information, please read our terms and
                                    conditions.
                                </p>
                                <p>Games might be addictive, and players are advised to be self-control.</p>
                            </section>

                            <section>
                                <h2>Account Information</h2>
                                <p className="em">1. What if I forget my password?</p>
                                <p>
                                    If you forget your password, you could reset it within 15 seconds through
                                    our “Forget password” link. After applying for password reset, please follow
                                    the instructions in the email we send to you to reset your password.
                                </p>
                                <p className="em">
                                    2. I have lost my mobile phone. How do I reset my Google authenticator?
                                </p>
                                <p>
                                    If you want to remove your Google authenticator 2FA, please contact us.
                                    After we receive your application, for the safety of your account, you are
                                    required to answer several security questions correctly in order to remove
                                    the 2FA.
                                </p>
                                <p className="em">3. Can I change my username or registered email address?</p>
                                <p>
                                    Sorry, but we are not able to update this information. If you insist on
                                    changing your username and/or registered email, we suggest you close the
                                    current account and register a new one.
                                </p>
                                <p className="em">4. How do I become a VIP?</p>
                                <p>
                                    The exclusive VIP club is by invitation only. After you embark on your
                                    journey of the game, you will be notified of your VIP status by email soon.
                                </p>
                            </section>

                            <section>
                                <h2>My wallet</h2>
                                <p>
                                    『My wallet』 is part of the player account. You can view the balance of all
                                    cooperative cryptocurrencies, deposit and withdraw and query transaction
                                    records. Furthermore, you can also get access to BC Swap without review and
                                    Vault Pro with an annual percentage rate (APR) of 5%.
                                </p>
                            </section>

                            <section>
                                <h2>How to deposit</h2>
                                <p>
                                    1. Find the『My wallet』 page, click the deposit page, copy the wallet
                                    address, or scan QR code for payment.
                                </p>
                                <p>
                                    2. Use Buy Crypto to deposit any supported currencies provided by MoonPay and Banxa.
                                </p>
                                <p>3. Quickly deposit and withdrawal directly from the cooperative wallet.</p>
                                <p>
                                    <a className="cl-primary" href="#/deposit">Deposit<svg className="hashbet cl-primary" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path
                                            d="M365.386 83.556c31.44 0 56.926 25.486 56.926 56.926 0 30.897-24.617 56.046-55.307 56.904l-1.62 0.022h-170.777v629.186h629.186v-170.777c0-30.897 24.617-56.046 55.307-56.904l1.62-0.022c30.897 0 56.045 24.617 56.904 55.307l0.022 1.62v179.768c0 57.258-45.887 103.796-102.894 104.848l-1.968 0.017h-647.16c-57.258 0-103.796-45.887-104.848-102.894l-0.017-1.968v-647.16c0-57.258 45.887-103.796 102.894-104.848l1.968-0.017h179.768zM611.108 84.556l1.62 0.013 227.481 4.701c57.907 1.009 104.028 48.774 103.019 106.677l-1.176 62.495-1.198 54.931-1.442 62.539-0.437 21.864c-0.034 1.776-0.066 3.547-0.094 5.315-0.549 31.434-26.475 56.472-57.909 55.926s-56.472-26.475-55.926-57.909l0.308-16.334 2.11-93 0.246-11.744-360.933 330.867c-23.176 21.246-59.187 19.678-80.428-3.495-20.849-22.748-19.728-57.854 2.233-79.234l1.267-1.193 355.396-325.787-134.861-2.783c-30.889-0.638-55.524-25.77-55.748-56.469l0.013-1.62c0.638-30.889 25.77-55.524 56.469-55.748z">
                                        </path>
                                    </svg></a>
                                </p>
                            </section>

                            <section>
                                <h2>What is BC Swap</h2>
                                <p>
                                    You can use BC Swap to exchange cryptocurrencies without waiting for review.
                                </p>
                            </section>

                            <section>
                                <h2>What is Vault Pro</h2>
                                <p>
                                    This is the BC exclusive bank that you can get annual percentage rate (APR)
                                    of 5% from your deposit in the Vault Pro.
                                </p>
                            </section>

                            <section>
                                <h2>How to withdraw</h2>
                                <p>
                                    Find the『My wallet』page, open the withdraw page, enter the address of the wallet you need to
                                    withdraw and the amount
                                    of cryptocurrency (pay attention to the fee).
                                </p>
                                <p>
                                    <a className="cl-primary" href="/wallet/withdraw">Withdraw<svg className="hashbet cl-primary"
                                        version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path
                                            d="M365.386 83.556c31.44 0 56.926 25.486 56.926 56.926 0 30.897-24.617 56.046-55.307 56.904l-1.62 0.022h-170.777v629.186h629.186v-170.777c0-30.897 24.617-56.046 55.307-56.904l1.62-0.022c30.897 0 56.045 24.617 56.904 55.307l0.022 1.62v179.768c0 57.258-45.887 103.796-102.894 104.848l-1.968 0.017h-647.16c-57.258 0-103.796-45.887-104.848-102.894l-0.017-1.968v-647.16c0-57.258 45.887-103.796 102.894-104.848l1.968-0.017h179.768zM611.108 84.556l1.62 0.013 227.481 4.701c57.907 1.009 104.028 48.774 103.019 106.677l-1.176 62.495-1.198 54.931-1.442 62.539-0.437 21.864c-0.034 1.776-0.066 3.547-0.094 5.315-0.549 31.434-26.475 56.472-57.909 55.926s-56.472-26.475-55.926-57.909l0.308-16.334 2.11-93 0.246-11.744-360.933 330.867c-23.176 21.246-59.187 19.678-80.428-3.495-20.849-22.748-19.728-57.854 2.233-79.234l1.267-1.193 355.396-325.787-134.861-2.783c-30.889-0.638-55.524-25.77-55.748-56.469l0.013-1.62c0.638-30.889 25.77-55.524 56.469-55.748z">
                                        </path>
                                    </svg></a>
                                </p>
                            </section>

                            <section>
                                <h2>Minimum Withdraw amount</h2>
                                <p>
                                    Because the value of each cryptocurrency is different, the minimum Withdraw
                                    amount is also different
                                </p>
                            </section>

                            <section>
                                <h2>How long does it take to deposit and withdraw?</h2>
                                <p>
                                    Each transaction on the blockchain requires several cycles to confirm the
                                    transfer has been recorded successfully.
                                </p>
                                <p>
                                    Generally speaking, each transaction requires 5-10 minutes before it can be
                                    confirmed by the blockchain network.
                                </p>
                                <p>
                                    If you encounter any problem during deposit or Withdraw, you can visit
                                    <a href="https://blockchain.info/">www.blockchain.info<svg className="hashbet " version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path
                                            d="M365.386 83.556c31.44 0 56.926 25.486 56.926 56.926 0 30.897-24.617 56.046-55.307 56.904l-1.62 0.022h-170.777v629.186h629.186v-170.777c0-30.897 24.617-56.046 55.307-56.904l1.62-0.022c30.897 0 56.045 24.617 56.904 55.307l0.022 1.62v179.768c0 57.258-45.887 103.796-102.894 104.848l-1.968 0.017h-647.16c-57.258 0-103.796-45.887-104.848-102.894l-0.017-1.968v-647.16c0-57.258 45.887-103.796 102.894-104.848l1.968-0.017h179.768zM611.108 84.556l1.62 0.013 227.481 4.701c57.907 1.009 104.028 48.774 103.019 106.677l-1.176 62.495-1.198 54.931-1.442 62.539-0.437 21.864c-0.034 1.776-0.066 3.547-0.094 5.315-0.549 31.434-26.475 56.472-57.909 55.926s-56.472-26.475-55.926-57.909l0.308-16.334 2.11-93 0.246-11.744-360.933 330.867c-23.176 21.246-59.187 19.678-80.428-3.495-20.849-22.748-19.728-57.854 2.233-79.234l1.267-1.193 355.396-325.787-134.861-2.783c-30.889-0.638-55.524-25.77-55.748-56.469l0.013-1.62c0.638-30.889 25.77-55.524 56.469-55.748z">
                                        </path>
                                    </svg></a> to check your
                                    transaction, or contact technical support.
                                </p>
                            </section>

                            <section>
                                <h2>Before Withdraw, how many confirmations is required on my deposit?</h2>
                                <p>
                                    At least 3 confirmations of your entire deposit are required before a withdrawal. You may check
                                    the current
                                    confirmation progress by clicking on the deposit link in the cashier page.
                                </p>
                            </section>

                            <section>
                                <h2>Where do transaction confirmations come from?</h2>
                                <p>
                                    All confirmation information comes from the wallet supplier, the blockchain
                                    and miners.
                                </p>
                            </section>

                            <section>
                                <h2>How long does it take to confirm a transaction?</h2>
                                <p>
                                    It depends on the blockchain and your transfer fee. It might take 10 minutes
                                    or several hours.
                                </p>
                            </section>

                            <section>
                                <h2>Is your game fair and just?</h2>
                                <p>
                                    We are based on the Ethereum smart contract. All data and core logic on the
                                    blockchain are transparent, and manipulation is not possible. Every single
                                    transaction on the blockchain can be tracked on etherscan. The fairness,
                                    openness, and justness of us gaming platform are guaranteed.
                                </p>
                            </section>

                            <section>
                                <h2>What should I do if my game hangs or there is a problem?</h2>
                                <p>
                                    If you encounter any technical problem while playing our games, please try
                                    to refresh the game. Normally it will work after refresh. Should the problem
                                    persist, please contact us.
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