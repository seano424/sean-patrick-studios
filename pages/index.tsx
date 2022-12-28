import Head from 'next/head'
import { Inter, Shippori_Mincho } from '@next/font/google'
import { GetStaticProps } from 'next'
import { getPets } from '../lib/queries'

const inter = Inter({ subsets: ['latin'] })
const shippori = Shippori_Mincho({ weight: '400' })

export interface PetsProps {
  pets: {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    name: string
  }[]
}

export default function Home({ pets }: PetsProps) {
  return (
    <>
      <Head>
        <title>Sean Patrick Studios</title>
        <meta
          name='description'
          content="Sean Patrick O'Reilly's Personal Project"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className="border">
        <p>hello world</p>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const pets = await getPets(preview)

  return {
    props: { pets },
  }
}
