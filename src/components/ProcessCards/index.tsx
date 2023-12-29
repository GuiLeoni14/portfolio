import { PackageOpen, PaintBucket, TrendingUp } from 'lucide-react'

export function ProcessCards() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="flex h-full flex-col items-start justify-center rounded-md bg-gray-700 p-8">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md border border-gray-200 bg-gray-700 shadow-2xl">
          <TrendingUp />
        </div>
        <strong className="mt-8 text-4xl font-bold">
          <span className="bg-gradient-title bg-clip-text text-transparent">
            01.
          </span>{' '}
          Start
        </strong>
        <p className="mt-4 text-base">
          Entendemos as suas demandas e o fluxo de telas, para montar um projeto
          personalizado.
        </p>
      </div>
      <div className="flex h-full flex-col items-start justify-center bg-gray-700 p-8">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md border border-gray-200 bg-gray-700 shadow-2xl">
          <PaintBucket />
        </div>
        <strong className="mt-8 text-4xl font-bold">
          <span className="bg-gradient-title bg-clip-text text-transparent">
            02.
          </span>{' '}
          Design
        </strong>
        <p className="mt-4 text-base">
          Desenvolvemos o layout de telas focadas na usabilidade e em atender às
          suas demandas.
        </p>
      </div>
      <div className="flex h-full flex-col items-start justify-center bg-gray-700 p-8">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md border border-gray-200 bg-gray-700 shadow-2xl">
          <PackageOpen />
        </div>
        <strong className="mt-8 text-4xl font-bold">
          <span className="bg-gradient-title bg-clip-text text-transparent">
            03.
          </span>{' '}
          Entrega
        </strong>
        <p className="mt-4 text-base">
          Evoluímos e estamos disponíveis para sempre atualizar seu projeto.
        </p>
      </div>
    </div>
  )
}
