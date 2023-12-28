'use client'
import { CaseFlag } from './CaseFlag'
import { CaseContent } from './CaseContent'
import { ReactNode, createContext, useState } from 'react'
import { CaseLine } from './CaseLine'

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

export type Case = {
  caseFlag: {
    title: string
    subTitle: string
    color: string
  }
  caseContent: {
    title: string
    description: string
    logo: string
    thumbnail: string
    link: string
    color: string
  }
}
interface CaseContainerProps {
  cases: Case[]
}

export function CaseContainer({ cases }: CaseContainerProps) {
  return (
    <CaseContainerContextProvider>
      <div className="relative h-full overflow-hidden">
        <CaseLine />
        {cases.map((job) => {
          return (
            <div key={job.caseContent.title}>
              <CaseFlag
                title={job.caseFlag.title}
                subTitle={job.caseFlag.subTitle}
                color={job.caseFlag.color}
              />
              <CaseContent
                title={job.caseContent.title}
                description={job.caseContent.description}
                logo={job.caseContent.logo}
                thumbnail={job.caseContent.thumbnail}
                link={job.caseContent.link}
                color={job.caseContent.color}
              />
            </div>
          )
        })}
      </div>
    </CaseContainerContextProvider>
  )
}
