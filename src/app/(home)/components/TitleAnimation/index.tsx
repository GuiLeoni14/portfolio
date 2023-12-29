'use client'
import { TypeAnimation } from 'react-type-animation'

export function TitleAnimation() {
  return (
    <TypeAnimation
      className="relative bg-gradient-title bg-clip-text text-center text-4xl font-bold text-transparent after:absolute after:bottom-0 after:left-0 after:h-2
    after:w-full after:bg-white lg:text-6xl"
      sequence={[
        'seu problema!',
        2000,
        'sua empresa!',
        2000,
        'seu negócio!',
        2000,
      ]}
      wrapper="strong"
      cursor={false}
      repeat={Infinity}
    />
  )
}
