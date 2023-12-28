import { Chat, Footer, Header, SideBar, TopButton } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div id="root" className="side-unfold base-layout g6">
      <Header />
      <SideBar />
      <Footer />
      <Chat />
      <TopButton />
    </div>
  )
}