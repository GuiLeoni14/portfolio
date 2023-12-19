import { Button } from '@/components/Button'
import { CardHover } from '@/components/CardHover'
import { TechnologySlide } from '@/components/TechnologySlide'
import { Chrome, LayoutTemplate } from 'lucide-react'

export default async function LpServicePage() {
  return (
    <main>
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
          <div className="flex justify-between">
            <h2 className="mt-2 text-2xl font-bold md:text-4xl">
              Entenda o que engloba o processo de Desenvolvimento de Site:
            </h2>
            <span className="block max-w-[420px] text-lg md:text-xl">
              Desenvolvimento de sites exclusivos, adaptados para uma gama de
              dispositivos e planejados para sua empresa conquistar novos
              clientes.
            </span>
          </div>
          <div className="flex justify-between gap-8 pt-20">
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
    </main>
  )
}
