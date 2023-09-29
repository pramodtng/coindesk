import './globals.css'
import { Poppins } from 'next/font/google'

const poppin = Poppins({
  weight: '500',
  subsets: ['latin']
})
export const metadata = {
  title: 'CoinDesk',
  description: 'Displaying details from API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppin.className}>{children}</body>
    </html>
  )
}
