import { Chat, Footer, Navbar, SportsHeader, TopButton } from '@/components'
import React from 'react'

function page() {
    return (
        <div id="root" className="sports-layout g7">
            <SportsHeader />
            
            <Footer />
            <Chat />
            <TopButton />
        </div>
    )
}

export default page