import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/index.ecad4d73.css'
import '../styles/index.18257fd8.css'
import '../styles/index.page.274d5a15.css'
import '../styles/hooks.331a9899.css'
import '../styles/index.74861cf6.css'
import '../styles/AwardBall.9c1b7ab7.css'
import '../styles/app.45cfe5da.css'
import '../styles/_default.page.client.694535e5.css'
import '../styles/index.page.9b307262.css'
import '../styles/index.page.2750914e.css'
import '../styles/style.css'

import BaseLayout from './BaseLayout'
import { ReduxProvider } from './GlobalRedux/Provider'
import { useAppSelector } from './GlobalRedux/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BC.GAME: Crypto Casino Games & Casino Slot Games - Crypto Gambling',
  description: 'BC.GAME: Crypto Casino Games & Casino Slot Games - Crypto Gambling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (
    <html lang="en">
      <ReduxProvider>
        <BaseLayout>
          {children}
        </BaseLayout>
      </ReduxProvider>
    </html>
  )
}
