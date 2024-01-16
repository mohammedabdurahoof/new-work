"use client"

import { Chat, Footer, Header, Login, SideBar, TopButton } from '@/components'
import React, { ReactNode, useState } from 'react'
import '../styles/index.3d6a1388.css'
import '../styles/enter-87695937.css'
import '../styles/index-7df30de5.css'
import '../styles/signin-8fa3fd7d.css'


interface Props {
    children: ReactNode;
}

function BaseLayout({ children }: Props) {

    const [open, setOpen] = useState(false)
    const [lOpen, setLOpen] = useState(false)

    return (
        <div id="root" className={`base-layout ${open ? "side-unfold  g7" : "side-fold  g6"}`}>
            <div className="s1u0fsnz"></div>
            <Login open={lOpen} setOpen={setLOpen} />
            <Header setOpen={setLOpen} />
            <SideBar open={open} setOpen={setOpen} />
            {children}
            <Footer />
            <Chat />
            <TopButton />
        </div>
    )
}

export default BaseLayout