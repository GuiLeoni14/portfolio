import { Button } from '@/components/Button'
import { TechnologySlide } from '@/components/TechnologySlide'

import { ServiceContainer } from './components/ServiceContainer'
import { DepositionsContainer } from '@/components/DepositionsContainer'
import { Metadata } from 'next'
import { CallToAction } from '@/components/CallToAction'
import { CaseContainer } from '@/components/CaseContainer'
import { fetchCases } from '@/hooks/fetch/useCases'
import { Code2 } from 'lucide-react'
import { Cover } from '@/components/ui/cover'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

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
      <BackgroundBeamsWithCollision className="h-[60rem] lg:h-[40rem]">
        <div className="container relative mx-auto grid grid-cols-1 gap-5 py-40 text-center lg:grid-cols-2 lg:text-start">
          <div>
            {' '}
            <h1 className="hidden text-4xl font-semibold lg:text-6xl">
              Desenvolvedor de sites
            </h1>
            <h2 className="text-4xl font-semibold lg:text-6xl">
              Elevando sua ideia ao próximo nível,{' '}
              <span className="cursor-pointer">
                <Cover>
                  além das{' '}
                  <span className="bg-gradient-title bg-clip-text text-transparent">
                    estrelas
                  </span>
                </Cover>
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-200 lg:text-2xl">
              Desenvolvo soluções tecnológicas personalizadas que impulsionam o
              sucesso do seu negócio. Não perca tempo com genéricos, invista na
              inovação que seu projeto merece.
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
      </BackgroundBeamsWithCollision>
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
