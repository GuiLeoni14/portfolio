import { getCases } from '@/hooks/fetch/useCases'
import { getTags } from '@/hooks/fetch/useTags'
import { ISitemapField, getServerSideSitemap } from 'next-sitemap'

export async function GET() {
  const jobs = await getCases({
    last: 100,
  })

  const tags = await getTags({
    last: 100,
  })

  const fieldsThemes: ISitemapField[] = jobs.map((job) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/projetos/${job.slug}`,
    lastmod: job.updatedAt,
  }))

  const fieldsServices: ISitemapField[] = tags.map((tag) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/projetos/tag/${tag.slug}`,
    lastmod: tag.updatedAt,
  }))

  return getServerSideSitemap([...fieldsThemes, ...fieldsServices])
}
