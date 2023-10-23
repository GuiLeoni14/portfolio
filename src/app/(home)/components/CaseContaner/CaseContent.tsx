import { useContext } from 'react'
import { CaseContainerContext } from '.'

interface CaseContentProps {
  title: string
  description: string
  logo: string
  thumbnail: string
  link: string
  color: string
}

export function CaseContent({
  title,
  description,
  link,
  logo,
  thumbnail,
  color,
}: CaseContentProps) {
  return (
    <div className="relative h-full">
      <div className="sticky top-0 flex items-center">
        <div
          className={`container mx-auto w-full rounded-lg border-4  bg-[#0d1117] py-20 transition-all`}
          style={{
            borderColor: color,
            boxShadow: `0 0 10px 0 ${color}`,
          }}
        >
          <div className="max-w-[45%] space-y-10">
            <img src={logo} className="max-w-[120px]" />
            <h2 className="text-6xl font-bold">{title}</h2>
            <p className="text-2xl">{description}</p>
          </div>
        </div>
        <div className="group absolute left-[50vw] right-0 top-0 h-full w-full max-w-[50vw] overflow-hidden bg-cover bg-center">
          <div className="relative h-full w-full">
            <img
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              src={thumbnail}
            />
            <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visualizar projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
