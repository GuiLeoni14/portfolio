import { Button } from '@/components/Button'

export interface SlideCardProps {
  title: string
  logoUrl: string
  pictureUrl: string
  redirectUrl: string
  name: string
  job: string
}

export function SlideCard({
  title,
  redirectUrl,
  job,
  logoUrl,
  name,
  pictureUrl,
}: SlideCardProps) {
  return (
    <div className="relative h-full w-full">
      <div className="container relative z-20 mx-auto flex flex-col justify-between gap-10 py-10 md:py-20 lg:flex-row">
        <div className="flex w-full flex-col items-start lg:ml-[200px]">
          <h3 className="text-3xl font-bold text-white md:text-6xl">{title}</h3>
          <div className="my-10">
            <div className="flex gap-5">
              <img
                className="w-full max-w-[200px]"
                src={pictureUrl}
                alt="Imagem de picture"
              />
              <div className="flex flex-col gap-2">
                <strong className="bg-gradient-title bg-clip-text text-2xl text-transparent">
                  {name}
                </strong>
                <span className="mt-4 w-full text-lg text-gray-200">{job}</span>
                <img
                  className="w-full max-w-[200px]"
                  src={logoUrl}
                  alt="Logo da empresa"
                />
              </div>
            </div>
          </div>
          {redirectUrl && (
            <a href={redirectUrl}>
              <Button>Saber mais sobre a empresa</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
