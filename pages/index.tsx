import { GetStaticProps } from 'next'
import { getPets } from '../lib/queries'
import Layout from '@/components/Layout'

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

export default function Home() {
  return (
    <Layout>
      <p>hello home</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const pets = await getPets(preview)

  return {
    props: { pets },
  }
}
