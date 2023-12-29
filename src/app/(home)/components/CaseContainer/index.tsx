'use client'
import { CaseFlag } from './CaseFlag'
import { CaseContent } from './CaseContent'
import { ReactNode, createContext, useState } from 'react'
import { Code2 } from 'lucide-react'
import { CaseLine } from './CaseLine'
import { Button } from '@/components/Button'
import { AccordionAbout } from '../AccordionAbout'

interface CaseContainerContextData {
  activeColor: string
  setActiveColor: (color: string) => void
}

interface CaseContainerContextProviderProps {
  children: ReactNode
}

export const CaseContainerContext = createContext(
  {} as CaseContainerContextData,
)

function CaseContainerContextProvider({
  children,
}: CaseContainerContextProviderProps) {
  const [activeColor, setActiveColor] = useState<string>('#000')
  return (
    <CaseContainerContext.Provider
      value={{
        activeColor,
        setActiveColor,
      }}
    >
      {children}
    </CaseContainerContext.Provider>
  )
}

export function CaseContainer() {
  return (
    <CaseContainerContextProvider>
      <div className="relative h-full overflow-hidden">
        <CaseLine />
        <div className="container mx-auto flex">
          <div className="relative hidden h-20 w-20 items-center justify-center md:flex">
            <Code2 className="h-10 w-10 text-white" />
            <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-title opacity-50 blur-lg"></span>
          </div>
          {/* Cases - start */}
          <div className="pt-10 md:ml-10">
            <div className="flex flex-col justify-between lg:flex-row">
              <h2 className="w-full text-4xl font-bold text-gray-100 lg:text-6xl">
                Meus{' '}
                <strong className="bg-gradient-title bg-clip-text text-transparent">
                  cases
                </strong>
              </h2>
              <div className="mt-4 flex w-full flex-col-reverse lg:mt-0 lg:flex-row lg:items-end lg:gap-4">
                <img
                  className="max-w-[60px] translate-y-4 lg:max-w-[initial]"
                  src="/img/icons/arrow.svg"
                  width={120}
                  height={100}
                  alt=""
                />
                <span className="block text-lg font-medium text-gray-300 lg:text-2xl">
                  As melhores tecnologia aliadas as melhores práticas constroem
                  soluções de outro planeta!
                </span>
              </div>
            </div>
          </div>
          {/* Cases - end */}
        </div>
        <CaseFlag
          title="Primo Rico"
          subTitle="Site institucional, blog e muito mais"
          color="#f97316"
        />
        <CaseContent
          title="Uma parceria com o Primo Rico"
          description="Trabalhamos no design e front-end do site e plataforma e criamos a interface do app, somando forças com o time do Grupo Primo para lançar a Plataforma Staage."
          logo="https://insany.design/wp-content/uploads/2021/08/finclass.svg"
          thumbnail="https://insany.design/wp-content/uploads/2021/08/finclass-02.jpg"
          link="https://staage.com/"
          color="#f97316"
        />
        <CaseFlag
          title="Beep digital - Base"
          subTitle="Uma plataforma para customização de temas!"
          color="#6366f1"
          message="A luz do Sol leva cerca de 8 minutos e 20 segundos para chegar à Terra."
        />
        <CaseContent
          title="Uma parceria com o Beep digital"
          description="Trabalhamos no design e front-end do site e plataforma e criamos a interface do app, somando forças com o time da Beep digital para lançar a Plataforma Apollo."
          logo="https://insany.design/wp-content/uploads/2021/08/finclass.svg"
          thumbnail="https://insany.design/wp-content/uploads/2021/08/finclass-02.jpg"
          link="https://staage.com/"
          color="#6366f1"
        />
        <CaseFlag
          title="Beep theme - Base"
          subTitle="Uma plataforma para customização de temas!"
          color="#ec4899"
          message="O universo é composto por aproximadamente 73% de energia escura."
        />
        <CaseContent
          title="Uma parceria com o Beep theme"
          description="Trabalhamos no design e front-end do site e plataforma e criamos a interface do app, somando forças com o time da Beep digital para lançar a Plataforma Apollo."
          logo="https://insany.design/wp-content/uploads/2021/08/finclass.svg"
          thumbnail="https://insany.design/wp-content/uploads/2021/08/finclass-02.jpg"
          link="https://staage.com/"
          color="#ec4899"
        />
        <CaseFlag
          title="Dream bike"
          subTitle="Uma plataforma para customização de temas!"
          color="#ffffff"
          message="Vênus tem uma atmosfera mortal com chuva de ácido."
        />
        <CaseContent
          title="Uma parceria com o Dream bike"
          description="Trabalhamos no design e front-end do site e plataforma e criamos a interface do app, somando forças com o time da Beep digital para lançar a Plataforma Apollo."
          logo="https://insany.design/wp-content/uploads/2021/08/finclass.svg"
          thumbnail="https://insany.design/wp-content/uploads/2021/08/finclass-02.jpg"
          link="https://staage.com/"
          color="#ffffff"
        />
      </div>
    </CaseContainerContextProvider>
  )
}
