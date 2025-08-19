import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import { CharacterResponse } from './api/people'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let { page = 1, limit = 10 } = context.query

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/people?page=${page}&limit=${limit}`
  )
  const data: CharacterResponse = await response.json()

  return {
    props: {
      data,
      currentPage: Number(page),
      limit: Number(limit),
    },
  }
}

export default function Home({
  data,
  currentPage,
  limit,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid`}
    >
      <main className='flex flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {data.results.map((result) => (
            <Card key={result.uid} {...result} />
          ))}
        </div>
        <div className='pagination mt-5'>
          <Pagination data={data} currentPage={currentPage} limit={limit} />
        </div>
      </main>
    </div>
  )
}
