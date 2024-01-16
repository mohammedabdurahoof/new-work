import { Banner, Cards, Chat, Deposit, Footer, Header, Race, Recent, Recommended, Register, SideBar, TopButton, TopRated } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="s16lovai">
      <Banner />
      <div className="home-container page-max-width-wrap">
        <Cards />
        <Recent />
        <TopRated />
        <Deposit />
        <Race />
        <Register />
        <Recommended title='Recommended' />
      </div>
    </div>
  )
}