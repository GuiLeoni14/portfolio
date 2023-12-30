import { Button } from '@/components/Button'
import {
  Layout,
  LayoutTemplate,
  MonitorSmartphone,
  ShoppingCart,
} from 'lucide-react'
import Link from 'next/link'

export function ServiceContainer() {
  return (
    <section className="bg-gray-900 py-20 lg:py-40">
      <div className="container mx-auto flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:max-w-[520px]">
          <span className="inline-block rounded-full bg-gradient-title p-2 text-white">
            Meus serviços
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-6xl">Oque eu faço?</h2>
          <p className="mt-4 text-lg md:text-2xl">
            Trabalho com uma linha de criação e estratégia adaptada para o
            perfil de cada cliente.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <Button variant="primary">Me chame pelo Whatsapp</Button>
          </a>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            className="flex flex-col items-start gap-2 rounded-md border border-transparent bg-gray-700 p-8 transition-all
          hover:border-gray-200"
            href="/servicos/criacao-de-landing-page"
          >
            <MonitorSmartphone />
            <strong className="text-xl">Landing Pages</strong>
            <p className="text-base">
              Quer converter visitantes em clientes? Com meu serviço de Landing
              Page, criarei uma experiência envolvente e focada em conversões.
            </p>
          </Link>
          <Link
            className="flex flex-col items-start gap-2 rounded-md border border-transparent bg-gray-700 p-8 transition-all
          hover:border-gray-200"
            href="/servicos/criacao-de-ecommerce"
          >
            <ShoppingCart />
            <strong className="text-xl">E-commerce</strong>
            <p className="text-base">
              Desenvolvo soluções de e-commerce adaptadas às suas necessidades,
              garantindo uma experiência de compra eficiente e intuitiva.
            </p>
          </Link>
          <div
            className="flex flex-col items-start gap-2 rounded-md border border-transparent bg-gray-700 p-8 transition-all
          hover:border-gray-200"
          >
            <Layout />
            <strong className="text-xl">Site institucional</strong>
            <p className="text-base">
              Construo sites institucionais que destacam a identidade única da
              sua empresa, fortalecendo sua presença online.
            </p>
          </div>
          <div
            className="flex flex-col items-start gap-2 rounded-md border border-transparent bg-gray-700 p-8 transition-all
          hover:border-gray-200"
          >
            <LayoutTemplate />
            <strong className="text-xl">Consultoria</strong>
            <p className="text-base">
              Guiarei sua jornada digital, fornecendo insights e estratégias
              personalizadas para alcançar o sucesso online.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
