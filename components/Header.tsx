"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

function Header() {

    const pathname = usePathname();

    return (
        <div className="pg3er1y" id="header">
            <div className="header-wrap">
                <div className="header-inner page-max-width-wrap">
                    <div className="pdjiuoz left">
                        <div className="cfzn5qq"><a href="/casino" keep-scroll-position="true" className={`header-link-item casino ${pathname == "/casino" ? "active is-active" : ""}`}>
                            <div className="img-wrap">
                                <svg className="s1ff97qc icon">
                                <use xlinkHref='/images/symbol-defs.ef6a79c4.svg#icon_Casino'></use>
                            </svg>
                            </div>
                            <p>Casino</p>
                        </a><a href="/sports" keep-scroll-position="true" className={`header-link-item sports ${pathname == "/sports" ? "active is-active" : ""}`}>
                                <div className="img-wrap">
                                    <svg className="s1ff97qc icon">
                                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Sports"></use>
                                </svg>
                                </div>
                                <p>Sports</p>
                            </a><a href="/racing" keep-scroll-position="true" className={`header-link-item racing ${pathname == "/racing" ? "active is-active" : ""}`}>
                                <div className="img-wrap">
                                    <svg className="s1ff97qc icon">
                                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Horse"></use>
                                    </svg>
                                </div>
                                <p>Racing</p>
                            </a><a href="/lottery" keep-scroll-position="true" className={`header-link-item lottery ${pathname == "/lottery" ? "active is-active" : ""}`}>
                                <div className="img-wrap">
                                    <svg className="s1ff97qc icon">
                                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Lottery"></use>
                                    </svg>
                                </div>
                                <p>Lottery</p>
                            </a></div>
                        <div className="page-search-enter"></div>
                    </div>
                    <div className="sign-in-up">
                        <div className="page-search-enter small-search-enter"><button><svg className="s1ff97qc icon">
                            <use xlinkHref="/assets/symbol-defs.ef6a79c4.svg#icon_Search"></use>
                        </svg></button></div>
                        <p className="sign-in">Sign in</p>
                        <div className="sign-up-wrap"><button className="ui-button button-normal s-conic">
                            <div className="button-inner">Sign up</div>
                        </button></div><button className="c1ymzoc4" id="chat">
                            <div className="chat-btn "><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Chat"></use>
                            </svg>
                                <div className="chat-green-dont"></div>
                            </div>
                        </button>
                        <div className="hnaog2c">
                            <div className="header-language header-lanitem"><svg className="s1ff97qc icon">
                                <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Language"></use>
                            </svg></div>
                            <div className="line"></div>
                            <div className="header-fiat header-lanitem"><span className="ttu">₹ INR</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header