import { Chat, Dashboard, Footer, Navbar, SportsHeader, SportsNavbar, SportsNavigation, TopButton } from '@/components'
import React from 'react'
import './../../styles/sports.css'

function page() {
    return (
        <div
            id="betby"
            style={{
                minHeight: '80vh',
                '--title-color': 0,
                '--text-color': 0,
                '--sub-text-color': 0,
                '--placeholder-color': 0,
                '--background-color': 0,
                '--standard-color': 0,
                '--shadow-color': 0,
                '--page-shadow': 0,
                '--autofill-color': 0,
                '--yellow-color': 0,
                '--primary-color': 0,
                '--border-radius': 0,
            } as React.CSSProperties}
        >
            <div
                id="bt-inner-page"
                style={{ fontFamily: 'inherit', backgroundColor: 'rgb(28, 30, 34)' }}
            >
                <div dir="ltr" className="">
                    <div id="bt-root" className="bt1" style={{ minHeight: 'calc(100vh - 64px)' }}>
                        <SportsNavbar />
                        <SportsNavigation />
                        <Dashboard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page