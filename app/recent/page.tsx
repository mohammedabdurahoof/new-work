import { Chat, Footer, GameList, Header, Recommended, SideBar, TopButton } from '@/components'
import React from 'react'
import '../../styles/index.8c75d3e3.css'
import '../../styles/GameList.4fceab7d.css'
import '../../styles/GameNavPath.e1cc4a4a.css'

function page() {
    return (
        <div id="root" className="base-layout side-unfold g6">
            <Header />
            <SideBar />
            <div className="s1m5fjkg">
                <div className="slots-container page-max-width-wrap">
                    <div className="game-opt-wrap">
                        <div className="path-wrap">
                            <div className="nsy8oc0 game-nav-path">
                                <a href="/casino" keep-scroll-position="true" className="path hover" title="Casino">Casino</a>
                                <svg className="s1ff97qc icon">
                                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                                </svg>
                                <a keep-scroll-position="true" className="path active" title="Recent">Recent</a>
                            </div>
                        </div>
                    </div>
                    <div className="s1qvj928">
                        <div style={{height: '50vh'}}>
                            <div className="empty sowd61n "><img src="https://bc.game/modules/assets/common/empty.png" />
                                <div className="msg">Oops! There is no data yet!</div>
                            </div>
                        </div>
                        <Recommended title='Recommended Games' />
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