import Header from '@/components/Header'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col h-screen font-sans">
      <Head>
        <title>Sean Patrick Studios</title>
        <meta name="description" content="Generated by create next app" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐠</text></svg>"
        />
      </Head>
      <Header />
      <main className="flex-1 flex flex-col relative top-20">
        {children}
      </main>
      <footer className="w-full h-24 border-t border-[#eaeaea] flex justify-center items-center">
        <p>
          Created with ❤️ by Sean O'Reilly, developer, explorer, and artist. 🐳
        </p>
      </footer>
    </div>
  )
}

export default Layout
