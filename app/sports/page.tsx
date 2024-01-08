import { Chat, Footer, Navbar, SportsHeader, TopButton } from '@/components'
import React from 'react'

function page() {
    return (
        <div id="root" className="sports-layout g7">
            <SportsHeader />
            <div id="betby" style={{ minHeight: '80vh', '--swiper-theme-color': 0, '--title-color': 0, '--text-color': 0, '--sub-text-color': 0, '--placeholder-color': 0, '--background-color': 0, '--standard-color': 0, '--shadow-color': 0, '--page-shadow': 0, '--autofill-color': 0, '--yellow-color': 0, '--primary-color': 0, "--border-radius": 0 } as React.CSSProperties}>
                <div id="bt-inner-page" style={{ fontFamily: 'inherit', backgroundColor: 'rgb(23, 24, 27)' }}>
                    <div dir='ltr' className="">
                        <div id="bt-root" className="bt1" style={{ minHeight: 'calc(100vh - 64px)' }}>
                            <div className="bt27">
                                <div className="bt28">
                                    <Navbar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Chat />
            <TopButton />
        </div>
    )
}

export default page