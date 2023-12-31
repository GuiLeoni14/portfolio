import { CallToAction } from '@/components/CallToAction'
import { CasesList } from './components/CasesList'
import { DepositionsContainer } from '@/components/DepositionsContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meus projetos',
  description:
    'Dê um pulo na minha página de projetos e confira algumas criações incríveis que rolaram por aqui. De sites maneiros a ideias que deram muito certo, tem de tudo um pouco. Bora dar uma espiada? Quem sabe a gente não embarca junto em algum desses projetos bacanas!',
}

export default async function ProjectsPage() {
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
