import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { SingleCharacterResponse } from '../api/people/[id]'

export interface Response {
  description: string
  properties: {
    name: string
    films: string[]
    gender: string
    homework: string
    skin_color: string
    hair_color: string
    eye_color: string
  }
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL! + `/people/${context.params!.uid}`
  )

  const data = (await response.json()) as Response

  return {
    props: {
      data,
    },
  }
}

export default function Person({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='relative isolate overflow-hidden bg-white'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <p className='text-base/7 font-semibold text-indigo-600 dark:text-indigo-400'>
            {data.properties.gender === 'n/a'
              ? 'Gender not specified'
              : data.properties.gender}
          </p>
          <h1 className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
            {data.properties.name}
          </h1>

          <div className='flex flex-row gap-2 mt-1'>
            <span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20'>
              {data.properties.skin_color}
            </span>

            <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-500/20'>
              {data.properties.eye_color}
            </span>

            <span className='inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20'>
              {data.properties.hair_color}
            </span>
          </div>

          <p className='mt-6 text-xl/8 text-gray-700 dark:text-gray-300'>
            {data.description}
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12'>
          <div className='max-w-xl text-base/7 text-gray-600 lg:col-span-7 dark:text-gray-400'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Films
            </h2>
            {data.properties.films.map((film) => (
              <p key={film} className='mt-6'>
                {film}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
