import { Chat, Footer, Header, Providers, Race, Recommended, Search, SideBar, Slider, Tab, TopButton } from '@/components'
import React from 'react'

function page() {
  return (
      <div className="s1r31mst">
        <Slider />
        <div className="page-max-width-wrap casino-container">
          <Search />
          <Tab />
          <Recommended title='BC Originals' />
          <Recommended title='Slots' />
          <Recommended title='Feature Buy-in' />
          <Recommended title='Live Casino' />
          <Providers />
          <Recommended title='New Releases' />
          <Recommended title='Hot Games' />
          <Recommended title='Blackjack' />
          <Recommended title='BC Exclusives' />
          <Recommended title='Megaways' />
          <Race />
        </div>
      </div>
  )
}

export default page