import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { CardHover } from '@/components/CardHover'
import { CaseContainer } from '@/components/CaseContainer'
import { DepositionsContainer } from '@/components/DepositionsContainer'
import { ProcessCards } from '@/components/ProcessCards'
import { TechnologySlide } from '@/components/TechnologySlide'
import { fetchCases } from '@/hooks/fetch/useCases'
import { Chrome, LayoutTemplate } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Criação de landing pages',
  description:
    'Como especialista em criação de landing pages, estou aqui para transformar sua mensagem em conversões. Desenvolvo páginas envolventes, otimizadas e focadas em resultados. Seja para campanhas específicas ou captação contínua, conte comigo para criar uma experiência que transforma visitantes em clientes. Vamos construir juntos landing pages que impulsionam seu sucesso online.',
}

export default async function LpServicePage() {
  const cases = await fetchCases({
    variables: {
      last: 4,
      where: {
        tags_some: {
          slug: 'landing-page',
        },
      },
    },
  })

  return (
    <main className="pt-[80px]">
      <section className="container mx-auto flex gap-10 py-20">
        <div className="w-full max-w-[600px]">
          <span className="inline-block rounded-full bg-gradient-title p-2 text-white">
            Dando vida ao seu negócio!
          </span>
          <h1 className="mt-2 text-4xl font-bold font-semibold lg:text-7xl">
            Criação de{' '}
            <span className="bg-gradient-title bg-clip-text font-bold text-transparent">
              landing pages{' '}
            </span>
          </h1>
          <p className="mt-4 text-base text-gray-200 lg:text-2xl">
            Ter um site já não é uma exclusividade, porém ter um projeto
            exclusivo e que atue como um facilitador de negócios entre sua
            empresa e o consumidor é um diferencial necessário para destacar-se
            no mercado.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <Button>Me chame pelo Whatsapp</Button>
          </a>
          <div className="relative mt-10">
            <TechnologySlide />
            <div className="mt-2 flex items-center gap-5 text-sm lg:text-base">
              <img
                className="max-w-[60px] translate-y-5"
                src="/img/icons/arrow.svg"
                width={120}
                height={100}
                alt="Icon de uma arrow"
              />
              <span>Eu tenho as ferramentas para criar sua solução</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://assets-global.website-files.com/58cbec12bff1e813281c2d6e/64c13721ea9725b8dd2625eb_sale-landing-page-c.webp"
            alt="Imagem de uma landing page | Desenvolvedor de sites"
          />
        </div>
      </section>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto">
          <span className="block bg-gradient-title bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl">
            Entenda o meu processo
          </span>
          <h2 className="mt-2 text-center text-2xl font-bold md:text-4xl">
            Entenda o que engloba o processo de criação de uma landing page
          </h2>
          <div className="mt-16">
            <ProcessCards />
          </div>
          <div className="flex flex-col items-center gap-8 pt-20 md:flex-row md:pt-40">
            <CardHover className="mx-auto w-full max-w-[174px] md:max-w-[348px] lg:mx-0">
              <div
                className="mx-auto flex h-[322px] max-w-[174px] flex-col items-start gap-2 rounded-md border border-transparent bg-gray-700 bg-cover bg-center bg-no-repeat
          p-8 transition-all hover:border-gray-200 md:mx-0 md:h-[644px] md:w-full md:max-w-[348px]"
                style={{
                  backgroundImage: `url('/img/mobile.svg')`,
                }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <LayoutTemplate size={42} />
                  <strong className="block text-center text-sm md:text-2xl">
                    Site responsivo
                  </strong>
                  <p className="text-center text-sm md:text-base">
                    Seu site preparado para dispositivos móveis.
                  </p>
                </div>
              </div>
            </CardHover>
            <div className="flex flex-1 flex-col">
              <h2 className="text-2xl font-bold md:text-4xl">
                Sua landing page se encaixando em qualquer dispositivo
              </h2>
              <p className="mt-4 text-xl">
                Site responsivo é aquele que se dá bem em qualquer tamanho de
                tela. Essa adaptação não é só técnica, ela também manda na
                experiência que você tem no site e na satisfação geral com a
                marca.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 pt-20 md:pt-40 lg:flex-row">
            <div className="flex-1">
              <h2 className="text-2xl font-bold md:text-4xl">
                Sua landing page se encaixando em qualquer navegador
              </h2>
              <p className="mt-4 text-xl">
                Faça sua landing page brilhar em qualquer navegador! Ela é tipo
                um camaleão da web, se encaixa bem em qualquer lugar. Navegue
                tranquilo e curta a vibe, não importa se você tá usando Chrome,
                Firefox, ou até o navegador do tio lá que ninguém lembra o nome.
                Sua página, suas regras, em qualquer lugar
              </p>
            </div>
            <CardHover className="w-full max-w-full md:max-w-[836px]">
              <div
                className="flex h-[322px] w-full max-w-full flex-col items-start gap-2 rounded-md border border-transparent bg-gray-700
          bg-cover bg-center bg-no-repeat p-8 transition-all hover:border-gray-200 md:h-[645px]"
                style={{
                  backgroundImage: `url('/img/desktop.svg')`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                  <Chrome size={42} />
                  <strong className="block text-center text-sm md:text-2xl">
                    Cross-browser
                  </strong>
                  <p className="text-center text-sm md:text-base">
                    Seu site com funcionalidade em qualquer navegador.
                  </p>
                </div>
              </div>
            </CardHover>
          </div>
        </div>
      </section>
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gradient-title p-2 text-white">
              Confira empresas que já transformei com meu trabalho
            </span>
            <h2 className="mt-2 text-4xl font-bold lg:text-6xl">
              Alguns cases
            </h2>
          </div>
        </div>
        <CaseContainer cases={cases} />
      </section>
      <section className="container mx-auto max-w-5xl py-20 md:py-40">
        <CallToAction />
      </section>
      <DepositionsContainer />
    </main>
  )
}
