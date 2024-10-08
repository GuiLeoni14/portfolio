'use client'
import { motion, useInView } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { CaseContainerContext } from '.'
import { GradientArrow } from './GradientArrow'
import { TechnologySlide } from '@/components/TechnologySlide'

interface CaseFlagProps {
  title: string
  subTitle: string
  color: string
  message?: string
}

export function CaseFlag({ title, subTitle, color, message }: CaseFlagProps) {
  const { setActiveColor } = useContext(CaseContainerContext)

  const flagRef = useRef(null)
  const isFLagInView = useInView(flagRef)

  useEffect(() => {
    if (isFLagInView) {
      setActiveColor(color)
    }
  }, [isFLagInView, color, setActiveColor])
  return (
    <div className="container relative mx-auto flex flex-col items-center justify-between gap-10 py-20 md:flex-row md:gap-20 md:py-40">
      {message && (
        <div className="absolute right-0 top-5 z-10 flex items-center gap-5 text-sm lg:text-base">
          <img
            className="max-w-[60px] translate-y-5"
            src="/img/icons/arrow.svg"
            width={120}
            height={100}
            alt="Icon de uma arrow"
          />
          <span>{message}</span>
        </div>
      )}
      <div className="md:ml-20 md:whitespace-nowrap">
        <motion.div
          className="relative flex h-96 flex-col justify-center pl-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          ref={flagRef}
        >
          <strong
            className={`text-4xl font-semibold md:text-6xl`}
            style={{
              color,
            }}
          >
            {title}
          </strong>
          <span className="mt-2 text-xl text-gray-200 md:text-2xl">
            {subTitle}
          </span>
          <GradientArrow />
        </motion.div>
      </div>
      <motion.div className="h-full w-full">
        <TechnologySlide />
      </motion.div>
    </div>
  )
}
