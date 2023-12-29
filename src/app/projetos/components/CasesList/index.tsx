'use client'

import { useCases } from '@/hooks/fetch/useCases'
import { useTags } from '@/hooks/fetch/useTags'
import Image from 'next/image'
import Link from 'next/link'

export function CasesList() {
  const { data: cases } = useCases({
    identifier: 'cases-page',
    variables: {
      last: 20,
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
        <h1 className="text-4xl font-bold  lg:text-6xl">
          <span className="bg-gradient-title bg-clip-text font-belle font-bold text-transparent">
            {'<>'}
          </span>{' '}
          Projetos recentes{' '}
          <span className="bg-gradient-title bg-clip-text font-belle font-bold text-transparent">
            {'</>'}
          </span>
        </h1>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gradient-title p-2 ">
          <span>Escolha os filtros</span>
        </div>
        {tags?.map((tag) => {
          return (
            <div key={tag.slug}>
              <Link
                href={`/projetos/tag/${tag.slug}`}
                className="flex items-center gap-2 rounded-md border border-gray-200 p-2 hover:bg-gray-500"
              >
                {tag.icon && (
                  <img
                    src={tag.icon.url}
                    alt={`Desenvolvedor de sites | Tag: ${tag.name}`}
                  />
                )}
                <span>{tag.name}</span>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {cases?.map((job) => {
          return (
            <Link href={`/projetos/${job.slug}`} key={job.slug}>
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
                  <strong className="text-2xl font-bold">{job.name}</strong>
                  <div className="mt-4 flex flex-wrap">
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
                          <span>{tag.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
