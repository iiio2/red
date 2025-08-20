import Link from 'next/link'

export interface CharacterList {
  uid: string
  name: string
}

const Card = ({ uid, name }: CharacterList) => {
  return (
    <div className='flex gap-4 items-center flex-col sm:flex-row'>
      <div className='rounded overflow-hidden shadow-lg  w-full h-32'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 truncate'>{name}</div>
          <Link className='underline' href={`/people/${uid}`}>
            See More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
