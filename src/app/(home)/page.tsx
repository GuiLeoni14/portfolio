'use client'
import { Button } from '@/components/Button'
import { TechnologySlide } from '@/components/TechnologySlide'
import { CaseContainer } from './components/CaseContainer'
import { DepositionsContainer } from './components/DepositionsContainer'
import { TypeAnimation } from 'react-type-animation'
import { ServiceContainer } from './components/ServiceContainer'

export default function Home() {
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
            />
            <h1 className="text-4xl font-semibold lg:text-6xl">
              Construindo a solução digital para{' '}
            </h1>
            <TypeAnimation
              className="relative bg-gradient-title bg-clip-text text-center text-4xl font-bold text-transparent after:absolute after:bottom-0 after:left-0 after:h-2
              after:w-full after:bg-white lg:text-6xl"
              sequence={[
                'seu problema!',
                2000,
                'sua empresa!',
                2000,
                'seu negócio!',
                2000,
              ]}
              wrapper="strong"
              cursor={false}
              repeat={Infinity}
            />
            <p className="mt-4 text-base text-gray-200 lg:text-2xl">
              Olá! Sou Guilherme dos Reis Leoni, especializado em criar soluções
              web personalizadas, desde landing pages envolventes até e-commerce
              eficientes. Minha paixão pela tecnologia e inovação impulsiona
              resultados excepcionais para elevar a presença online do seu
              negócio. Vamos transformar suas ideias em realidade e destacar sua
              marca no mundo digital. Entre em contato e vamos começar!
            </p>
            <div className="my-10 flex h-fit flex-col gap-2 md:flex-row md:gap-4 lg:my-20">
              <Button>Meu currículo</Button>
              <div className="w-[2px] bg-gray-200/40"></div>
              <Button variant="outline">Minhas informações de contato</Button>
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
                <span className="font-belle self-start text-4xl text-gray-50">
                  &lt;h1&gt;
                </span>
                <span className="bg-gradient-title bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl">
                  Full-stack <strong className="text-gray-50">Developer</strong>
                </span>
                <span className="font-belle self-end text-4xl text-gray-50">
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
      <CaseContainer />
      <DepositionsContainer />
    </main>
  )
}
