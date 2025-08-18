import type { NextApiRequest, NextApiResponse } from 'next'

export interface SingleCharacterResponse {
  message: string
  result: {
    description: string
    properties: {
      name: string
      films: string[]
      gender: string
      homeworld: string
      skin_color: string
      eye_color: string
      hair_color: string
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(process.env.API_URL! + '/people/' + req.query.id)
  const r = (await response.json()) as SingleCharacterResponse

  if (r.message !== 'ok') {
    throw new Error('failed to fetch data')
  }

  const keys = [
    'name',
    'films',
    'gender',
    'homeworld',
    'skin_color',
    'hair_color',
    'eye_color',
  ]

  res.status(200).json({
    description: r.result.description,
    properties: keys.reduce((obj, key) => {
      if (r.result.properties && r.result.properties.hasOwnProperty(key)) {
        obj[key] = (r.result.properties as Record<string, any>)[key]
      }
      return obj
    }, {} as Record<string, any>),
  })
}
