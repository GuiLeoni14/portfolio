'use client'
import { CaseFlag } from './CaseFlag'
import { CaseContent } from './CaseContent'
import { ReactNode, createContext, useState } from 'react'
import { CaseLine } from './CaseLine'
import { CaseFragment } from '@/graphql/generated'

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
  cases: CaseFragment[]
}

export function CaseContainer({ cases }: CaseContainerProps) {
  return (
    <CaseContainerContextProvider>
      <div className="relative h-full overflow-hidden">
        <CaseLine />
        {cases.map((job) => {
          return (
            <div key={job.slug}>
              <CaseFlag
                title={job.name}
                subTitle={job.resume}
                color={job.color.hex}
              />
              <CaseContent
                title={job.title}
                slug={job.slug}
                description={job.description}
                logo={job.logo.url}
                thumbnail={job.cover.url}
                link={job.link}
                color={job.color.hex}
              />
            </div>
          )
        })}
      </div>
    </CaseContainerContextProvider>
  )
}
