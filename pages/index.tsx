import Head from 'next/head'
import { Inter } from '@next/font/google'
import { createClient } from 'next-sanity'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

const client = createClient({
  projectId: 'lhds5hbh',
  dataset: 'production',
  apiVersion: '2022-12-27',
  useCdn: false,
})

const inter = Inter({ subsets: ['latin'] })

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
      <main className='border border-red-50'>{pets[0].name}</main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pets = await client.fetch(`*[_type == "pet"]`)

  return {
    props: { pets },
  }
}
