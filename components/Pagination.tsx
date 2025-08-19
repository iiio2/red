import Link from 'next/link'

const Pagination = () => {
  return (
    <nav
      aria-label='Pagination'
      className='flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 dark:border-white/10'
    >
      <div className='hidden sm:block'>
        <p className='text-sm text-gray-700 dark:text-gray-300'>
          Showing <span className='font-medium'>1</span> to{' '}
          <span className='font-medium'>10</span> of{' '}
          <span className='font-medium'>20</span> results
        </p>
      </div>
      <div className='flex flex-1 justify-between sm:justify-end'>
        <Link
          href='#'
          className='relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:ring-white/5 dark:hover:bg-white/20'
        >
          Previous
        </Link>
        <Link
          href='#'
          className='relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:ring-white/5 dark:hover:bg-white/20'
        >
          Next
        </Link>
      </div>
    </nav>
  )
}

export default Pagination
