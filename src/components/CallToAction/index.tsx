import { Button } from '../Button'

export function CallToAction() {
  return (
    <div className="flex flex-col font-bold">
      <h2 className="text-center text-4xl md:text-5xl">
        Já entreguei{' '}
        <strong className="bg-gradient-title bg-clip-text text-transparent">
          soluções
        </strong>{' '}
        de outro planeta
      </h2>
      <span className="mx-auto mt-4 inline-block w-fit rounded-full bg-gradient-title p-2 text-white md:text-2xl">
        E agora está na hora de entregar a sua
      </span>
      <p className="mt-4 text-center text-lg font-normal text-gray-200 md:text-2xl">
        Convido você a embarcar em nossa emocionante jornada espacial, na qual
        lançaremos um foguete em busca de concretizar sua visão, deixando para
        trás o papel e tornando-a realidade.
      </p>
      <div className="mx-auto mt-10 flex h-fit flex-col gap-2 md:mt-20 md:flex-row md:gap-4">
        <Button>Estou pronto, vamos nessa!</Button>
        <div className="w-[2px] bg-gray-200/40"></div>
        <Button variant="outline">Conferir informações do piloto</Button>
      </div>
    </div>
  )
}
