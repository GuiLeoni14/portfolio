import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { CardHover } from '@/components/CardHover'
import { CaseContainer } from '@/components/CaseContainer'
import { DepositionsContainer } from '@/components/DepositionsContainer'
import { ProcessCards } from '@/components/ProcessCards'
import { fetchCases } from '@/hooks/fetch/useCases'
import { Metadata } from 'next'

const platforms = [
  {
    name: 'Shopfiy',
    imageUrl: '/img/platforms/shopify.svg',
  },
  {
    name: 'Loja integrada',
    imageUrl: '/img/platforms/li.jpg',
  },
  {
    name: 'Vtex',
    imageUrl: '/img/platforms/vtex.svg',
  },
  {
    name: 'Tray',
    imageUrl: '/img/platforms/tray.svg',
  },
  {
    name: 'Wordpress',
    imageUrl: '/img/platforms/wp.png',
  },
]

export const metadata: Metadata = {
  title: 'Criação de ecommerce',
  description:
    'Transforme meu negócio digital com meu serviço especializado em criação de e-commerce. Desenvolvo plataformas personalizadas, intuitivas e seguras, proporcionando aos meus clientes uma experiência de compra única. Vamos juntos construir uma loja virtual de sucesso para impulsionar suas vendas online. Estou pronto para transformar sua visão em realidade digital!',
}

export default async function EcServicePage() {
  const cases = await fetchCases({
    variables: {
      last: 4,
      where: {
        tags_every: {
          slug: 'ecommerce',
        },
      },
    },
  })

  return (
    <main className="pt-[80px]">
      <section className="container mx-auto flex flex-col items-center py-20 text-center">
        <span className="inline-block rounded-full bg-gradient-title p-2 text-white">
          Levando seu produto ao proximo nível!
        </span>
        <h1 className="mt-2 text-4xl font-semibold md:text-7xl">
          Criação de{' '}
          <span className="bg-gradient-title bg-clip-text font-bold text-transparent">
            E-commerce{' '}
          </span>
        </h1>
        <p className="mt-4 text-base text-gray-200 md:text-2xl">
          Potencialize sua presença online: serviço exclusivo de criação de
          e-commerce nas principais plataformas, incluindo Loja Integrada, Tray,
          VTEX, Shopify e mais. Desenvolvemos sua loja com expertise,
          personalização e tecnologia de ponta para garantir o sucesso do seu
          comércio eletrônico.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block"
        >
          <Button>Me chame pelo WhatsApp</Button>
        </a>
        <div className="mt-10">
          <CardHover>
            <img
              className="max-w-full lg:max-w-4xl"
              src="https://nextjs.org/static/images/commerce/ecommerce.png"
              alt="Imagem de um ecommerce"
            />
          </CardHover>
        </div>
      </section>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto flex flex-col gap-10 lg:flex-row">
          <div className="text-center lg:w-fit lg:text-start">
            <span className="inline-block rounded-full bg-gradient-title p-2 text-white">
              Levando seu produto ao proximo nível!
            </span>
            <h2 className="mt-2 text-4xl font-bold md:text-6xl">Plataformas</h2>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-3">
            {platforms.map((platform) => {
              return (
                <CardHover key={platform.name}>
                  <div className="flex h-full flex-col items-center justify-center gap-4 rounded-md border border-gray-100 bg-gray-700 p-4">
                    <img
                      className="max-w-[120px]"
                      src={platform.imageUrl}
                      alt={`Imagem da plataforma ${platform.name} | Desenvolvedor de sites`}
                    />
                    <span className="inline-block rounded-full bg-gradient-title p-2 text-sm text-white lg:text-xl">
                      {platform.name}
                    </span>
                  </div>
                </CardHover>
              )
            })}
            <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-gray-100 bg-gray-900 p-4">
              <span className="inline-block rounded-full bg-gradient-title p-2 text-sm text-white lg:text-xl">
                E muito mais...
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto flex flex-col gap-10 lg:flex-row">
          <div className="text-center lg:w-fit lg:text-start">
            <span className="inline-block rounded-full bg-gradient-title p-2 text-white">
              Entenda o meu processo
            </span>
            <h2 className="mt-2 text-4xl font-bold md:text-6xl">Processo</h2>
          </div>
          <ProcessCards />
        </div>
      </section>
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gradient-title p-2 text-white">
              Confira empresas que já transformei com meu trabalho
            </span>
            <h2 className="mt-2 text-4xl font-bold md:text-6xl">
              Alguns cases
            </h2>
          </div>
        </div>
        <CaseContainer cases={cases} />
      </section>
      <section className="container mx-auto max-w-5xl py-20 lg:py-40">
        <CallToAction />
      </section>
      <DepositionsContainer />
    </main>
  )
}
