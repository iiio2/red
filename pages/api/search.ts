import type { NextApiRequest, NextApiResponse } from 'next'

export interface SearchResponse {
  message: string
  result: {
    properties: {
      name: string
    }
    uid: string
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    process.env.API_URL! + '/people/?name=' + req.body.name
  )
  const r = (await response.json()) as SearchResponse

  if (r.message !== 'ok') {
    throw new Error('failed to fetch data')
  }

  // if (r.result.length === 0) {
  //   res.status(200).json({
  //     message: 'no data found',
  //   })
  // }

  res.status(200).json({
    results: r.result.map(({ uid, properties }) => ({
      name: properties.name,
      uid,
    })),
  })
}
