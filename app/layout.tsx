import './globals.css'
import { Inter } from 'next/font/google'
import "@fontsource/poppins"
import "@fontsource/merriweather"
//import "@fontsource/poppins/400.css"
//import "@fontsource/poppins/600.css"
//import "@fontsource/poppins/700.css"
//import "@fontsource/merriweather/400.css"
//import "@fontsource/merriweather/700.css"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
