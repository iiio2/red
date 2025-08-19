import Link from 'next/link'
import { CharacterResponse } from '@/pages/api/people'
import { getQueryFromUrl } from '@/utils/query'

const Pagination = ({
  data,
  currentPage,
  limit,
}: {
  data: CharacterResponse
  currentPage: number
  limit: number
}) => {
  const nextQuery = getQueryFromUrl(data.next)
  const prevQuery = getQueryFromUrl(data.previous)

  const from = (currentPage - 1) * limit + 1
  const to = Math.min(currentPage * limit, data.total_records)

  return (
    <nav
      aria-label='Pagination'
      className='flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 dark:border-white/10'
    >
      <div className='hidden sm:block'>
        <p className='text-sm text-gray-700 dark:text-gray-300'>
          Showing <span className='font-medium'>{from}</span> to{' '}
          <span className='font-medium'>{to}</span> of{' '}
          <span className='font-medium'>{data.total_records}</span> results
        </p>
      </div>
      <div className='flex flex-1 justify-between sm:justify-end'>
        <Link
          href={
            prevQuery ? { pathname: '/', query: prevQuery } : { pathname: '/' }
          }
          className={`relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:ring-white/5 dark:hover:bg-white/20 ${
            !prevQuery ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </Link>
        <Link
          href={
            nextQuery ? { pathname: '/', query: nextQuery } : { pathname: '/' }
          }
          className={`relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:ring-white/5 dark:hover:bg-white/20 ${
            !nextQuery ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </Link>
      </div>
    </nav>
  )
}

export default Pagination
