import Link from 'next/link'
import { Button } from '../Button'

interface CaseContentProps {
  title: string
  slug: string
  description: string
  logo: string
  thumbnail: string
  link?: string | null
  color: string
}

export function CaseContent({
  title,
  description,
  link,
  logo,
  thumbnail,
  slug,
  color,
}: CaseContentProps) {
  return (
    <div className="relative h-full">
      <div
        className="container sticky top-0 mx-auto flex w-full flex-col items-center rounded-lg border-4 bg-[#0d1117]  p-0 transition-all lg:flex-row lg:p-20"
        style={{
          borderColor: color,
          boxShadow: `0 0 10px 0 ${color}`,
        }}
      >
        <div className="p-4 lg:max-w-[45%] lg:p-0 2xl:max-w-[60%]">
          <img
            src={logo}
            className="max-w-[120px]"
            alt={`Logo ${title} | Desenvolvedor de sites`}
          />
          <h2 className="mt-4 text-4xl font-bold lg:text-6xl">{title}</h2>
          <p className="mt-2 text-lg lg:text-2xl">{description}</p>
          <Link href={`/projetos/${slug}`} className="mt-8 inline-block">
            <Button variant="outline">Confira mais informações</Button>
          </Link>
        </div>
        <div className="group left-[50vw] right-0 top-0 mt-4 h-full w-full overflow-hidden bg-cover bg-center lg:absolute lg:mt-0 lg:max-w-[50vw]">
          <div className="relative h-full w-full">
            <img
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              src={thumbnail}
              alt={`Imagem de apresentação ${title} | Desenvolvedor de sites`}
            />
            {link && (
              <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <a
                  className="rounded-full bg-gradient-title p-2"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visualizar projeto
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
