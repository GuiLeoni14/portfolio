import {
  TagFragment,
  GetTagsQuery,
  GetTagsQueryVariables,
} from '@/graphql/generated'
import { gqlClient } from '@/lib/gqlRequest'
import { graphqlApi } from '@/lib/graphqlApi'
import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'

export const getTagQueryDocument = gql`
  fragment seo on Seo {
    title
    description
    keywords
  }

  fragment tag on Tag {
    name
    slug
    icon {
      url
    }
    createdAt
    updatedAt
    seo {
      ...seo
    }
  }

  query getTags(
    $where: TagWhereInput
    $orderBy: TagOrderByInput
    $first: Int
    $skip: Int
    $last: Int
    $after: String
    $before: String
  ) {
    tags(
      orderBy: $orderBy
      first: $first
      skip: $skip
      where: $where
      last: $last
      after: $after
      before: $before
    ) {
      ...tag
    }
  }
`

interface UseTagsProps {
  variables?: GetTagsQueryVariables
  identifier?: string | string[]
  options?: any
}

interface FetchTagsParams {
  variables?: GetTagsQueryVariables
  init?: RequestInit
}

export const fetchTags = async ({
  variables,
  init,
}: FetchTagsParams): Promise<TagFragment[]> => {
  return await graphqlApi({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getTagQueryDocument,
      variables,
    }),
    ...init,
  })
    .then((response) => response.json())
    .then((json) => json.data.tags)
}

export const getTags = async (variables?: GetTagsQueryVariables) => {
  const response = await gqlClient.request<GetTagsQuery>(
    getTagQueryDocument,
    variables,
  )
  return response.tags
}

export const useTags = ({ variables, identifier, options }: UseTagsProps) => {
  return useQuery<GetTagsQuery['tags']>({
    queryKey: ['tags-query', identifier],
    queryFn: () => getTags(variables),
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  })
}
