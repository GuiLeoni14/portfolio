import { CaseFragment } from '@/graphql/generated'
import { fetchCases } from '@/hooks/fetch/useCases'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: {
    slug: string
  }
}
async function getCase(slug: string): Promise<CaseFragment> {
  const cases = await fetchCases({
    variables: {
      where: {
        slug,
      },
    },
    init: {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    },
  })

  const job = cases[0] ?? null

  if (!job) {
    return notFound()
  }

  return job
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const job = await getCase(params.slug)

  if (!job) {
    return {}
  }
  if (job.seo) {
    return {
      title: job.seo.title,
      description: job.seo.description,
      keywords: job.seo?.keywords,
    }
  }

  return {
    title: job.title,
    description: job.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const job = await getCase(params.slug)
  return (
    <main className="pt-[80px]">
      <div
        className="relative min-h-[320px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${job.cover.url}')`,
        }}
      >
        <div className="absolute inset-0 h-full w-full bg-black/40"></div>
      </div>
      <section>
        <div className="container relative z-10 mx-auto rounded-md bg-gray-700 p-8 shadow-2xl sm:-mt-20">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <img
              className="w-full max-w-[120px]"
              src={job.logo.url}
              alt={`Logo ${job.name} | Desenvolvedor de sites`}
            />
            <h1 className="text-4xl font-bold lg:text-7xl">{job.name}</h1>
          </div>
          <p className="mt-4 text-justify text-lg md:text-xl lg:text-2xl">
            {job.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {job.tags.map((tag) => {
              return (
                <div
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-gradient-title p-2 "
                  key={tag.slug}
                >
                  <span>{tag.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto">
          <div
            className="prose lg:prose-xl max-w-full"
            dangerouslySetInnerHTML={{ __html: job.content.html }}
          />
        </div>
      </section>
    </main>
  )
}
