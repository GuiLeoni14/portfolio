import { CallToAction } from '@/components/CallToAction'
import { CasesList } from './components/CasesList'
import { DepositionsContainer } from '@/components/DepositionsContainer'

export default async function ProjectsPage() {
  return (
    <main className="pt-[80px]">
      <section className="py-20">
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
