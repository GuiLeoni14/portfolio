export function graphqlApi(init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL as string
  const url = new URL(baseUrl)

  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      ...init?.headers,
    },
  })
}
