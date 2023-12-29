import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { CardHover } from '@/components/CardHover'
import { Case, CaseContainer } from '@/components/CaseContainer'
import { DepositionsContainer } from '@/components/DepositionsContainer'
import { ProcessCards } from '@/components/ProcessCards'
import { TechnologySlide } from '@/components/TechnologySlide'
import { Chrome, LayoutTemplate } from 'lucide-react'

const cases: Case[] = [
  {
    caseFlag: {
      title: 'Banco Neon',
      color: '#00c3ff',
      subTitle: 'Landing page, responsividade e muito mais',
    },
    caseContent: {
      title: 'Banco Neon',
      description:
        'Criei uma landing page irada para a empresa Neon como parte do meu projeto de estudos. Mergulhei de cabeça no design, buscando uma estética chamativa e uma experiência do usuário de primeira. Foi incrível colocar em prática o que venho aprendendo. Dê uma olhada na minha criação para a Neon e me conte o que achou!',
      logo: '/img/projects/logo_neon.png',
      thumbnail: '/img/projects/neon.png',
      link: 'https://staage.com/',
      color: '#00c3ff',
    },
  },
  {
    caseFlag: {
      title: 'Baiuca',
      color: '#ff8800',
      subTitle: 'Landing page, site institucional e muito mais',
    },
    caseContent: {
      title: 'Baiuca Móveis Rústicos',
      description:
        'Com muito entusiasmo, contribuí para a criação da landing page e do site institucional da Baiuca Móveis Rústicos. Focamos no design para capturar toda a autenticidade e beleza dos móveis, criando uma experiência única. Explore a landing page e o site para sentir a essência acolhedora da Baiuca.',
      logo: '/img/projects/logo_baiuca.png',
      thumbnail: '/img/projects/baiuca.png',
      link: 'https://staage.com/',
      color: '#ff8800',
    },
  },
]

export default async function LpServicePage() {
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
          <Button className="mt-8">Solicitar orçamento</Button>
          <div className="relative mt-10">
            <TechnologySlide />
            <div className="mt-2 flex items-center gap-5 text-sm lg:text-base">
              <img
                className="max-w-[60px] translate-y-5"
                src="/img/icons/arrow.svg"
                width={120}
                height={100}
                alt=""
              />
              <span>Eu tenho as ferramentas para criar sua solução</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://assets-global.website-files.com/58cbec12bff1e813281c2d6e/64c13721ea9725b8dd2625eb_sale-landing-page-c.webp" />
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
          <div className="flex gap-8 pt-40">
            <CardHover className="w-full max-w-[348px]">
              <div
                className="flex h-[644px] w-full max-w-[348px] flex-col items-start gap-2 rounded-md border border-transparent
          bg-gray-700 bg-cover bg-center bg-no-repeat p-8 transition-all hover:border-gray-200"
                style={{
                  backgroundImage: `url('/img/mobile.svg')`,
                }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <LayoutTemplate size={42} />
                  <strong className="text-2xl">Site responsivo</strong>
                  <p className="text-center text-base">
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
                marca. Sacou?
              </p>
              <img
                className="mt-auto"
                src="https://zyro.com/cdn-cgi/image/w=1100,q=95,f=auto/images/landingWebsite/hero.png"
              />
            </div>
          </div>
          <div className="flex gap-8 pt-40">
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
            <CardHover className="w-full max-w-[836px]">
              <div
                className="flex h-[645px] w-full max-w-full flex-col items-start gap-2 rounded-md border border-transparent
          bg-gray-700 bg-cover bg-center bg-no-repeat p-8 transition-all hover:border-gray-200"
                style={{
                  backgroundImage: `url('/img/desktop.svg')`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                  <Chrome size={42} />
                  <strong className="text-2xl">Cross-browser</strong>
                  <p className="text-center text-base">
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
