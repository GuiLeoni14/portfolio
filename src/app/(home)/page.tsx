import { Button } from '@/components/Button'
import { TechnologySlide } from '@/components/TechnologySlide'

import { ServiceContainer } from './components/ServiceContainer'
import { DepositionsContainer } from '@/components/DepositionsContainer'
import { Metadata } from 'next'
import { TitleAnimation } from './components/TitleAnimation'
import { CallToAction } from '@/components/CallToAction'
import { CaseContainer } from '@/components/CaseContainer'
import { fetchCases } from '@/hooks/fetch/useCases'
import { Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Página Inicial',
  description:
    'Como desenvolvedor de sites, especializo-me na criação de soluções digitais personalizadas, desde landing pages envolventes até plataformas de e-commerce eficientes e muito mais. Transforme sua presença online com design exclusivo, funcionalidades avançadas e uma abordagem centrada no usuário. Vamos juntos construir uma experiência digital única para impulsionar seu sucesso online',
}

export default async function Home() {
  const cases = await fetchCases({
    variables: {
      last: 6,
    },
    init: {
      next: {
        revalidate: 60 * 60, // 1hr
      },
    },
  })

  return (
    <main className="pt-[80px]">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp')`,
        }}
      >
        <div className="container relative mx-auto pb-20 pt-72 md:pb-40">
          <div className="lg:ml-[7.5rem]">
            <img
              src="/img/icons/lines-hero.svg"
              className="pointer-events-none absolute left-[3.25rem] top-0 hidden lg:block"
              alt="Linhas"
            />
            <h1 className="hidden text-4xl font-semibold lg:text-6xl">
              Desenvolvedor de sites
            </h1>
            <h2 className="text-4xl font-semibold lg:text-6xl">
              Construindo a solução digital para{' '}
            </h2>
            <TitleAnimation />
            <p className="mt-4 text-base text-gray-200 lg:text-2xl">
              Olá! Sou Guilherme dos Reis Leoni, especializado em criar soluções
              web personalizadas, desde landing pages envolventes até e-commerce
              eficientes. Minha paixão pela tecnologia e inovação impulsiona
              resultados excepcionais para elevar a presença online do seu
              negócio. Vamos transformar suas ideias em realidade e destacar sua
              marca no mundo digital. Entre em contato e vamos começar!
            </p>
            <div className="my-10 flex h-fit flex-col gap-2 md:flex-row md:gap-4">
              <Button asChild>
                <a href="/cv.pdf" download="cv.pdf">
                  Meu currículo
                </a>
              </Button>
              <div className="w-[2px] bg-gray-200/40"></div>
              <a
                href="https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Entre em contato comigo, vamos nessa!
                </Button>
              </a>
            </div>
          </div>
          <div className="relative z-10 pt-10">
            <div>
              <TechnologySlide />
            </div>
            <div className="relative my-10">
              <span className="block text-2xl font-bold text-gray-400 lg:text-4xl">
                I&apos;m a <strong>Guilherme leoni</strong>
              </span>
              <div className="mt-4 flex w-full max-w-[442px]">
                <span className="self-start font-belle text-4xl text-gray-50">
                  &lt;h1&gt;
                </span>
                <span className="bg-gradient-title bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl">
                  Full-stack <strong className="text-gray-50">Developer</strong>
                </span>
                <span className="self-end font-belle text-4xl text-gray-50">
                  &lt;/h1&gt;
                </span>
              </div>
            </div>
            <div>
              <TechnologySlide />
            </div>
          </div>
        </div>
      </div>
      <ServiceContainer />
      <section className="relative">
        <div className="container mx-auto flex">
          <div className="relative hidden h-20 w-20 items-center justify-center md:flex">
            <Code2 className="h-10 w-10 text-white" />
            <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-title opacity-50 blur-lg"></span>
          </div>
          {/* Cases - start */}
          <div className="pt-10 md:ml-10">
            <div className="flex flex-col justify-between lg:flex-row">
              <h2 className="w-full text-4xl font-bold text-gray-100 lg:text-6xl">
                Meus{' '}
                <strong className="bg-gradient-title bg-clip-text text-transparent">
                  cases
                </strong>
              </h2>
              <div className="mt-4 flex w-full flex-col-reverse lg:mt-0 lg:flex-row lg:items-end lg:gap-4">
                <img
                  className="max-w-[60px] translate-y-4 lg:max-w-[initial]"
                  src="/img/icons/arrow.svg"
                  width={120}
                  height={100}
                  alt="Icon de uma arrow"
                />
                <span className="block text-lg font-medium text-gray-300 lg:text-2xl">
                  As melhores tecnologia aliadas as melhores práticas constroem
                  soluções de outro planeta!
                </span>
              </div>
            </div>
          </div>
          {/* Cases - end */}
        </div>
        <div className="-mt-16 md:-mt-36">
          <CaseContainer cases={cases} />
        </div>
      </section>
      <div className="container py-20 md:py-40">
        <CallToAction />
      </div>
      <DepositionsContainer />
    </main>
  )
}
