import {
  CaseFragment,
  GetCasesQuery,
  GetCasesQueryVariables,
} from '@/graphql/generated'
import { gqlClient } from '@/lib/gqlRequest'
import { graphqlApi } from '@/lib/graphqlApi'
import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'

export const getCaseQueryDocument = gql`
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

  fragment case on Case {
    name
    title
    slug
    description
    resume
    logo {
      url
    }
    cover {
      url
    }
    content {
      html
      text
    }
    createdAt
    updatedAt
    tags {
      ...tag
    }
    seo {
      ...seo
    }
  }

  query getCases(
    $where: CaseWhereInput
    $orderBy: CaseOrderByInput
    $first: Int
    $skip: Int
    $last: Int
    $after: String
    $before: String
  ) {
    cases(
      orderBy: $orderBy
      first: $first
      skip: $skip
      where: $where
      last: $last
      after: $after
      before: $before
    ) {
      ...case
    }
  }
`

interface UseCasesProps {
  variables?: GetCasesQueryVariables
  identifier?: string | string[]
  options?: any
}

interface FetchCasesParams {
  variables?: GetCasesQueryVariables
  init?: RequestInit
}

export const fetchCases = async ({
  variables,
  init,
}: FetchCasesParams): Promise<CaseFragment[]> => {
  return await graphqlApi({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getCaseQueryDocument,
      variables,
    }),
    ...init,
  })
    .then((response) => response.json())
    .then((json) => json.data.cases)
}

export const getCases = async (variables?: GetCasesQueryVariables) => {
  const response = await gqlClient.request<GetCasesQuery>(
    getCaseQueryDocument,
    variables,
  )
  return response.cases
}

export const useCases = ({ variables, identifier, options }: UseCasesProps) => {
  return useQuery<GetCasesQuery['cases']>({
    queryKey: ['cases-query', identifier],
    queryFn: () => getCases(variables),
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  })
}
