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
      <div
        className="container sticky top-0 mx-auto flex w-full flex-col items-center rounded-lg border-4 bg-[#0d1117]  p-0 transition-all lg:flex-row lg:p-20"
        style={{
          borderColor: color,
          boxShadow: `0 0 10px 0 ${color}`,
        }}
      >
        <div className="space-y-10 p-4 lg:max-w-[45%] lg:p-0">
          <img src={logo} className="max-w-[120px]" />
          <h2 className="text-4xl font-bold lg:text-6xl">{title}</h2>
          <p className="text-lg lg:text-2xl">{description}</p>
        </div>
        <div className="group left-[50vw] right-0 top-0 mt-4 h-full w-full overflow-hidden bg-cover bg-center lg:absolute lg:mt-0 lg:max-w-[50vw]">
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
