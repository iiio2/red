import type { NextApiRequest, NextApiResponse } from 'next'

export interface CharacterResponse {
  message: string
  next: string | null
  previous: string | null
  total_pages: number
  total_records: number
  results: {
    uid: string
    name: string
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, limit } = req.query

  const response =
    page && limit
      ? await fetch(
          process.env.API_URL! + `/people?page=${page}&limit=${limit}`
        )
      : await fetch(process.env.API_URL! + '/people')
  const r = (await response.json()) as CharacterResponse

  if (r.message !== 'ok') {
    throw new Error('failed to fetch data')
  }

  res.status(200).json({
    next: r.next,
    previous: r.previous,
    results: r.results.map(({ uid, name }) => ({ uid, name })),
    total_pages: r.total_pages,
    total_records: r.total_records,
  })
}
