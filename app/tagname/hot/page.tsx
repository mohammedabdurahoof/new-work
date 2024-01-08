import { Chat, Footer, GameList, Header, SideBar, TopButton } from '@/components'
import React from 'react'
import '../../../styles/index.8c75d3e3.css'
import '../../../styles/GameList.4fceab7d.css'
import '../../../styles/GameNavPath.e1cc4a4a.css'

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
                <a keep-scroll-position="true" className="path active" title="Hot Games">Hot Games</a>
              </div>
              {/* <div className="region-block">
                <div className="ui-switch">
                  <div className="dot"></div>
                </div>Show Blocked
              </div> */}
            </div>
            <div className="filter-wrap">
              {/* <div className="filter-sort">
                <div className="label">Sort by</div>
                <div className="ui-select">
                  <div className="select-trigger">You may like<div className="arrow "><svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                  </svg></div>
                  </div>
                </div>
              </div> */}
              <div className="filter-provider">
                <div className="label">Provider</div>
                <div className="ui-select sle65vm">
                  <div className="select-trigger">
                    <div className="all-provider">All Providers</div>
                    <div className="arrow "><svg className="s1ff97qc icon">
                      <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s1qvj928">
            <GameList />
            <div className="l1d038jc load-more-wrap">
              <span className="current">40</span>&nbsp; / &nbsp;<span className="total">711</span>
              <div className="progress">
                <div className="green" style={{ width: '6%' }}></div>
              </div>6%
            </div>
            <div className="more-btn-wrap">
              <button className="ui-button button-normal show-more">
                <div className="button-inner">
                  <a href="/gamelist/picks-for-you?page=2" keep-scroll-position="true" className="">Load
                    More</a>
                </div>
              </button>
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