import { useState, useEffect } from 'react'
import { CharacterResponse } from '@/pages/api/people'

interface SearchResult {
  name: string
  uid: string
}

interface SearchBoxProps {
  data: CharacterResponse
  onSearchResults: (results: SearchResult[]) => void
}

const SearchBox = ({ data, onSearchResults }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (searchTerm.trim() === '') {
        onSearchResults(data.results)
        return
      }
      const performSearch = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/search`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: searchTerm }),
            }
          )

          if (!response.ok) {
            throw new Error('Failed to fetch search results')
          }

          const searchData = await response.json()
          onSearchResults(searchData.results)
        } catch (error) {
          console.error('Search error:', error)
          onSearchResults(data.results)
        }
      }

      performSearch()
    }, 600)
    return () => clearTimeout(debounceTimeout)
  }, [searchTerm, data.results, onSearchResults])

  return (
    <div className='flex justify-end mb-2'>
      <input
        type='text'
        id='name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-64'
        placeholder='Search by name...'
      />
    </div>
  )
}

export default SearchBox
