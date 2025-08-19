export const getQueryFromUrl = (url: string | null) => {
  if (!url) return null
  const searchParams = new URL(url).searchParams
  return {
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
  }
}
