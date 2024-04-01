'use client'
import { useScroll, motion } from 'framer-motion'
import { useEffect, useState, useContext } from 'react'
import { CaseContainerContext } from '.'

export function CaseLine() {
  const { scrollYProgress } = useScroll()
  const [heightLine, setHeightLine] = useState(0)
  const { activeColor } = useContext(CaseContainerContext)

  useEffect(() => {
    scrollYProgress.on('change', (latestValue) => {
      setHeightLine(latestValue)
    })
  }, [scrollYProgress])

  return (
    <div className="container pointer-events-none absolute left-1/2 top-0 mx-auto hidden h-full -translate-x-1/2 md:block">
      <motion.div
        className={`ml-5 mt-24 w-1 lg:ml-10`}
        style={{
          height: `100%`,
          backgroundColor: activeColor,
        }}
      ></motion.div>
    </div>
  )
}
