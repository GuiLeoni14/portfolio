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
}

export function CaseFlag({ title, subTitle, color }: CaseFlagProps) {
  const { setActiveColor } = useContext(CaseContainerContext)

  const flagRef = useRef(null)
  const isFLagInView = useInView(flagRef)

  useEffect(() => {
    if (isFLagInView) {
      setActiveColor(color)
    }
  }, [isFLagInView, color, setActiveColor])
  return (
    <div className="container relative mx-auto flex items-center justify-between gap-20 py-40">
      <div className="ml-20 whitespace-nowrap">
        <motion.div
          className="relative flex h-96 flex-col justify-center pl-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          ref={flagRef}
        >
          <strong
            className={`text-6xl font-semibold`}
            style={{
              color,
            }}
          >
            {title}
          </strong>
          <span className="mt-2 text-2xl text-gray-200">{subTitle}</span>
          <GradientArrow />
        </motion.div>
      </div>
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')`,
        }}
      ></div>
      <motion.div className="h-full w-full">
        <TechnologySlide />
      </motion.div>
    </div>
  )
}
