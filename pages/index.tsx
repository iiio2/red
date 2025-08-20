import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import { CharacterResponse } from './api/people'
import SearchBox from '@/components/Search'

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { page = 1, limit = 10 } = context.query

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
  const [characters, setCharacters] = useState(data.results)
  const handleSearchResults = (results: { name: string; uid: string }[]) => {
    setCharacters(results)
  }

  return (
    <>
      <Head>
        <title>Home - The Star Wars Characters</title>
      </Head>

      <main className='flex flex-col'>
        <SearchBox data={data} onSearchResults={handleSearchResults} />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {characters.length === 0 ? (
            <p>No data found</p>
          ) : (
            characters.map((result) => <Card key={result.uid} {...result} />)
          )}
        </div>
        {characters.length > 0 && (
          <div className='pagination mt-5'>
            <Pagination data={data} currentPage={currentPage} limit={limit} />
          </div>
        )}
      </main>
    </>
  )
}
