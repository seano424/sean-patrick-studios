import { ReactNode, FC, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>Sean Patrick Studios</title>
        <meta
          name='description'
          content="Sean Patrick O'Reilly's Personal Project"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='flex justify-between p-4 text-[#f428f9] font-bold text-xl'>
        <Link href='/'>S — P</Link>
        <button onClick={() => setIsOpen((prevState) => !prevState)}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>
      <main className=''>{children}</main>
      <footer className='mt-auto'>hello footer</footer>
    </div>
  )
}

export default Layout
