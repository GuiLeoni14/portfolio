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
        <a
          href="https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full md:w-fit"
        >
          <Button className="w-full">Estou pronto, vamos nessa!</Button>
        </a>
        <div className="w-[2px] bg-gray-200/40"></div>
        <a href="/cv.pdf" download="cv.pdf" className="block w-full md:w-fit">
          <Button variant="outline" className="w-full">
            Conferir informações do piloto
          </Button>
        </a>
      </div>
    </div>
  )
}
