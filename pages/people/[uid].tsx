import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { SingleCharacterResponse } from '../api/people/[id]'

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL! + `/people/${context.params!.uid}`
  )

  const data = (await response.json()) as SingleCharacterResponse

  return {
    props: {
      data,
    },
  }
}

const Person = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data)

  return <h3>single response</h3>
}

export default Person
