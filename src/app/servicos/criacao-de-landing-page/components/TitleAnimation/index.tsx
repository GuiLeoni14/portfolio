'use client'
import { TypeAnimation } from 'react-type-animation'

export function TitleAnimation() {
  return (
    <TypeAnimation
      className="relative bg-gradient-title bg-clip-text text-center text-2xl font-bold text-transparent after:absolute after:bottom-0 after:left-0 after:h-2
              after:w-full after:bg-white lg:text-2xl"
      sequence={['negócio!', 2000, 'produto!', 2000, 'serviço!', 2000]}
      wrapper="strong"
      cursor={false}
      repeat={Infinity}
    />
  )
}
