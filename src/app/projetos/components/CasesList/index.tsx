'use client'

import { CardContainer } from '@/components/ui/3d-card'
import { useCases } from '@/hooks/fetch/useCases'
import { useTags } from '@/hooks/fetch/useTags'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface CasesListProps {
  title?: string
}
export function CasesList({ title }: CasesListProps) {
  const params = useParams<{ tagSlug: string }>()

  const { data: cases, isLoading } = useCases({
    identifier: ['cases-page', params.tagSlug ?? ''],
    variables: {
      last: 20,
      where: {
        tags_some: {
          slug: params.tagSlug,
        },
      },
    },
  })

  const { data: tags } = useTags({
    identifier: 'cases-page',
    variables: {
      last: 20,
    },
  })

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl  font-bold lg:text-6xl">
          <span className="hidden bg-gradient-title bg-clip-text font-belle font-bold text-transparent sm:inline-block">
            {'<>'}
          </span>{' '}
          {title || 'Projetos recentes'}{' '}
          <span className="hidden bg-gradient-title bg-clip-text font-belle font-bold text-transparent sm:inline-block">
            {'</>'}
          </span>
        </h1>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gradient-title p-2 ">
          <span>Escolha os filtros</span>
        </div>
        <Link
          href={`/projetos`}
          className="flex items-center gap-2 rounded-md border border-gray-200 p-2 transition-all hover:bg-gray-500 data-[active=true]:bg-gradient-title"
          data-active={!params.tagSlug}
        >
          <span>Todos os projetos</span>
        </Link>
        {tags?.map((tag) => {
          return (
            <Link
              key={tag.slug}
              href={`/projetos/tag/${tag.slug}`}
              className="flex items-center gap-2 rounded-md border border-gray-200 p-2 transition-all hover:bg-gray-500 data-[active=true]:bg-gradient-title"
              data-active={tag.slug === params.tagSlug}
            >
              {tag.icon && (
                <img
                  src={tag.icon.url}
                  alt={`Desenvolvedor de sites | Tag: ${tag.name}`}
                />
              )}
              <span>{tag.name}</span>
            </Link>
          )
        })}
      </div>
      <div className="mt-8 grid  grid-cols-2 gap-4 md:grid-cols-3">
        {cases?.map((job) => {
          return (
            <CardContainer key={job.slug}>
              <Link href={`/projetos/${job.slug}`}>
                <div className="group overflow-hidden rounded-md bg-gray-900">
                  <div className="h-[162px] w-full overflow-hidden md:h-[286px]">
                    <Image
                      quality={100}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      src={job.cover.url}
                      width={400}
                      height={300}
                      alt={`Imagem de thumbnail do projeto ${job.name} | Desenvolvedor de sites`}
                    />
                  </div>
                  <div className="p-4">
                    <strong className="text-xl font-bold md:text-2xl">
                      {job.name}
                    </strong>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => {
                        return (
                          <div
                            key={tag.slug}
                            className="flex items-center gap-2 rounded-full border border-gray-200 bg-gradient-title p-2"
                          >
                            {tag.icon && (
                              <img
                                src={tag.icon.url}
                                alt={`Desenvolvedor de sites | Tag: ${tag.name}`}
                              />
                            )}
                            <span className="text-sm md:text-base">
                              {tag.name}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </CardContainer>
          )
        })}
        {isLoading &&
          Array(6)
            .fill('')
            .map((_, index) => {
              return (
                <div
                  className="flex w-full flex-col gap-4 overflow-hidden rounded-md bg-gray-900 shadow-xl"
                  key={index}
                >
                  <div className="h-[250px] w-full animate-pulse bg-gray-600"></div>
                  <div className="flex flex-col gap-4 p-4">
                    <div className="h-[40px] w-[60%] animate-pulse rounded-lg bg-gray-600"></div>
                    <div className="h-[20px] w-[80%] animate-pulse rounded-lg bg-gray-600"></div>
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}
