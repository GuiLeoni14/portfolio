'use client'
import { Button } from '@/components/Button'
import { TechnologySlide } from '@/components/TechnologySlide'
import { useScroll, motion, useInView } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { CaseContainer } from './components/CaseContaner'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [heightLine, setHeightLine] = useState(0)
  const [lineColor, setLineColor] = useState('bg-indigo-500')

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    scrollYProgress.on('change', (latestValue) => {
      setHeightLine(latestValue)
    })
  }, [scrollYProgress])

  useEffect(() => {
    if (isInView) {
      setLineColor('bg-pink-500')
    }
  }, [isInView])
  return (
    <main>
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp')`,
        }}
      >
        <div className="container relative mx-auto pt-72">
          <div className="ml-[7.5rem]">
            <img
              src="/img/icons/lines-hero.svg"
              className="pointer-events-none absolute left-[3.25rem] top-0"
            />
            <h1 className="text-6xl font-semibold">
              Vamos iniciar nossa jornada
            </h1>
            <p className="mt-4 text-2xl text-gray-200">
              Antes de embarcar no foguete confira algumas instruções
            </p>
            <div className="my-20 flex h-fit gap-4">
              <Button>Meu currículo</Button>
              <div className="w-[2px] bg-gray-200/40"></div>
              <Button variant="outline">Minhas informações de contato</Button>
            </div>
            <div className="relative">
              <span className="block text-4xl font-bold text-gray-400">
                I&apos;m a <strong>Guilherme leoni</strong>
              </span>
              <div className="mt-4 flex w-full max-w-[442px]">
                <span className="font-belle self-start text-4xl text-gray-50">
                  &lt;h1&gt;
                </span>
                <span className="bg-gradient-title bg-clip-text text-center text-6xl font-bold text-transparent">
                  Full-stack <strong className="text-gray-50">Developer</strong>
                </span>
                <span className="font-belle self-end text-4xl text-gray-50">
                  &lt;/h1&gt;
                </span>
              </div>
            </div>
            <div className="mt-20">
              <TechnologySlide />
            </div>
          </div>
        </div>
      </div>
      <CaseContainer />
    </main>
  )
}
