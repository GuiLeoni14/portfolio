import { CallToAction } from '@/components/CallToAction'

import { DepositionsContainer } from '@/components/DepositionsContainer'
import { CasesList } from '../../components/CasesList'
import { TagFragment } from '@/graphql/generated'
import { fetchTags } from '@/hooks/fetch/useTags'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface TagPageProps {
  params: {
    tagSlug: string
  }
}
async function getTag(slug: string): Promise<TagFragment> {
  const tags = await fetchTags({
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

  const job = tags[0] ?? null

  if (!job) {
    return notFound()
  }

  return job
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const tag = await getTag(params.tagSlug)

  if (!tag) {
    return {}
  }

  if (tag.seo) {
    return {
      title: tag.seo.title,
      description: tag.seo.description,
      keywords: tag.seo?.keywords,
    }
  }

  return {
    title: tag.name,
  }
}

export default async function TagPage() {
  return (
    <main className="pt-[80px]">
      <section className="py-10">
        <div className="container mx-auto">
          <CasesList />
        </div>
      </section>
      <section className="container mx-auto max-w-5xl py-20 md:py-40">
        <CallToAction />
      </section>
      <DepositionsContainer />
    </main>
  )
}
