import type { InferGetServerSidePropsType } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Card from '@/components/Card'
import { CharacterResponse } from './api/people'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/people')
  const data: CharacterResponse = await response.json()

  return { props: { data } }
}

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid`}
    >
      <main className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {data.results.map((result) => (
          <Card key={result.uid} {...result} />
        ))}
      </main>
    </div>
  )
}
