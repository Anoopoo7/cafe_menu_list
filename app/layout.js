import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import './globals.css'
import { StoreProvider } from '@/redux/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UNI Resto Cafe',
  description: '"UNI Resto Cafe-Riyadh',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main>
            {children}
          </main>
        </body>
      </html>
    </StoreProvider>
  )
}
