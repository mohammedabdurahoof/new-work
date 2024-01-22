"use client"

import { BottomBar, Chat, Footer, Header, Login, MobileFooter, MobileHeader, MobileNav, SideBar, TopButton } from '@/components'
import React, { ReactNode, useState } from 'react'
import '../styles/enter-87695937.css'
import '../styles/index-7df30de5.css'
import '../styles/signin-8fa3fd7d.css'
import '../styles/index.bfcb7d91.css'
import { useMediaQuery } from 'react-responsive'



interface Props {
    children: ReactNode;
}

function BaseLayout({ children }: Props) {

    const [open, setOpen] = useState(false)
    const [lOpen, setLOpen] = useState(false)
    const [nOpen, setNOpen] = useState(false)
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });


    return (
        <div id="root" className={`base-layout ${isMobile ? "mb-show-header g3" : open ? "side-unfold  g7" : "side-fold  g6"} `}>
            <div className="s1u0fsnz"></div>
            <Login open={lOpen} setOpen={setLOpen} isMobile={isMobile} />
            {isMobile ?
                <>
                    <MobileHeader setOpen={setLOpen} />
                    <MobileNav open={nOpen} />
                    <BottomBar open={nOpen} setOpen={setNOpen} />
                </>
                :
                <>
                    <Header setOpen={setLOpen} />
                    <SideBar open={open} setOpen={setOpen} />
                </>}

            {children}
            {
                isMobile ? <MobileFooter /> : <Footer />
            }
            {isMobile ? '' : <Chat />}
            <TopButton />
        </div>
    )
}

export default BaseLayout