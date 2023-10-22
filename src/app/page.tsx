import { Button } from '@/components/Button'
import { Code2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp')`,
        }}
      >
        <div className="container relative mx-auto pt-72">
          <div className="ml-[7.5rem]">
            <img
              src="/img/icons/lines-hero.svg"
              className="pointer-events-none absolute left-[3.25rem] top-0"
            />
            <h1 className="text-6xl font-semibold">
              Vamos iniciar nossa jornada
            </h1>
            <p className="mt-4 text-2xl text-gray-200">
              Antes de embarcar no foguete confira algumas instruções
            </p>
            <div className="my-20 flex h-fit gap-4">
              <Button>Meu currículo</Button>
              <div className="w-[2px] bg-gray-200/40"></div>
              <Button variant="outline">Minhas informações de contato</Button>
            </div>
            <div className="relative">
              <span className="block text-4xl font-bold text-gray-400">
                I&apos;m a <strong>Guilherme leoni</strong>
              </span>
              <div className="mt-4 flex w-full max-w-[442px]">
                <span className="font-belle self-start text-4xl text-gray-50">
                  &lt;h1&gt;
                </span>
                <span className="bg-gradient-title bg-clip-text text-center text-6xl font-bold text-transparent">
                  Full-stack <strong className="text-gray-50">Developer</strong>
                </span>
                <span className="font-belle self-end text-4xl text-gray-50">
                  &lt;/h1&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full overflow-hidden">
        <div className="container absolute left-1/2 top-0 mx-auto h-full -translate-x-1/2">
          <div className="ml-10 mt-24 h-full w-1 bg-indigo-500"></div>
        </div>
        <div className="container mx-auto flex">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <Code2 className="h-10 w-10 text-white" />
            <span className="bg-gradient-title absolute inset-0 h-full w-full rounded-full opacity-50 blur-lg"></span>
          </div>
          {/* Cases - start */}
          <div className="ml-10 pt-5">
            <div className="flex justify-between">
              <h2 className="w-full text-6xl font-bold text-gray-100">
                Meus{' '}
                <strong className="bg-gradient-title bg-clip-text text-transparent">
                  cases
                </strong>
              </h2>
              <div className="flex w-full items-end gap-4">
                <img
                  className="translate-y-4"
                  src="/img/icons/arrow.svg"
                  width={120}
                  height={100}
                  alt=""
                />
                <span className="block text-2xl font-medium text-gray-300">
                  As melhores tecnologia aliadas as melhores práticas constroem
                  soluções de outro planeta!
                </span>
              </div>
            </div>
          </div>
          {/* Cases - end */}
        </div>
        <div className="container relative mx-auto">
          <div className="my-20 ml-20">
            <div className="relative flex h-96 flex-col justify-center pl-10 ">
              <strong className="text-6xl font-semibold text-indigo-500">
                Beep theme
              </strong>
              <span className="mt-2 text-2xl text-gray-200">
                e-commerce para venda de temas!
              </span>
              <img
                src="/img/icons/gradient-arrow.svg"
                className="absolute -left-10 top-0 h-full"
              />
            </div>
          </div>
          <div
            className="absolute right-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')`,
            }}
          ></div>
        </div>
        <div className="relative h-full">
          <div className="sticky top-0 flex items-center">
            <div className="container mx-auto w-full rounded-lg border-4 border-indigo-600 bg-gray-900 py-20">
              <div className="max-w-[45%] space-y-10">
                <img
                  src="https://www.beeptheme.com.br/logo.svg"
                  className="max-w-[120px]"
                />
                <h2 className="text-6xl font-bold">
                  Seu e-commerce em outro patamar!
                </h2>
                <p className="text-2xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  eos dolore, iste velit enim maxime sint officia reiciendis
                  amet cum vel nesciunt soluta libero doloremque cumque nam
                  placeat ex dolorem.
                </p>
              </div>
            </div>
            <div className="group absolute left-[50vw] right-0 top-0 h-full w-full max-w-[50vw] overflow-hidden bg-cover bg-center">
              <div className="relative h-full w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  src="https://insany.design/wp-content/uploads/2021/08/clarice-02.jpg"
                />
                <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="m-auto block">Visualizar projeto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative mx-auto">
          <div className="my-20 ml-20">
            <div className="relative flex h-96 flex-col justify-center pl-10 ">
              <strong className="text-6xl font-semibold text-indigo-500">
                Beep theme
              </strong>
              <span className="mt-2 text-2xl text-gray-200">
                e-commerce para venda de temas!
              </span>
              <img
                src="/img/icons/gradient-arrow.svg"
                className="absolute -left-10 top-0 h-full"
              />
            </div>
          </div>
          <div
            className="absolute right-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')`,
            }}
          ></div>
        </div>
      </div>
    </main>
  )
}
