import { Code2 } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <div className="container mx-auto flex">
        <div className="flex flex-col">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <Code2 className="h-10 w-10 text-white" />
            <span className="bg-gradient-title absolute inset-0 h-full w-full rounded-full opacity-50 blur-lg"></span>
          </div>
          <div className="mx-auto mt-5 h-full w-1 bg-gradient-to-b from-indigo-500"></div>
        </div>
        {/* Cases - start */}
        <div className="pt-5">
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
                grandes soluções!
              </span>
            </div>
          </div>
          <div className="mt-40">
            <div className="relative flex h-96 flex-col justify-center pl-10">
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
        </div>
        {/* Cases - end */}
      </div>
    </div>
  )
}
