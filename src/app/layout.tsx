import Header from '@/components/view/Header/Header';
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import Footer from '@/components/view/Footer';

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
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
      <body className={`${sora.className} overflow-x-hidden bg-white`}>
      <div className='flex min-h-screen flex-col '>
         <Header />
          <main className='mt-14 flex-grow flex-wrap py-4 md:mt-[88px] md:py-8 lg:mt-[110px]'>{children}</main>
          <Footer />
          </div>
          </body>
    </html>
  )
}
